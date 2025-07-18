import { Queue } from "typescript-collections";

import { config } from "@/utils/config";
import { wait } from "@/utils/wait";
import { pauseIdleTimer, resumeIdleTimer } from "@/utils/isIdle";

import { Chat } from "@/features/chat/chat";
import {
  MIYORALifeEvents,
  idleEvents,
  handleIdleEvent,
  basedPrompt,
  TimestampedPrompt,
} from "@/features/MIYORALife/eventHandler";
import { Viewer } from "../vrmViewer/viewer";


export class MIYORALife {
  public initialized: boolean;

  public mainEvents: Queue<MIYORALifeEvents>;
  public viewer?: Viewer;
  public chat?: Chat;

  public setSubconciousLogs?: (subconciousLogs: TimestampedPrompt[]) => void;
  public isChatSpeaking?: boolean;

  public triggerMessage: boolean;
  public eventProcessing?: boolean;

  public isSleep: boolean;
  private isSettingOff: boolean;
  private isPause: boolean;
  private isProcessingEventRunning?: boolean;
  private isProcessingIdleRunning?: boolean;

  constructor() {
    this.initialized = false;

    this.mainEvents = new Queue<MIYORALifeEvents>();
    this.triggerMessage = false;
    this.eventProcessing = false;

    this.isSleep = false;
    this.isPause = false;
    this.isSettingOff = false;
    this.isProcessingEventRunning = false;
    this.isProcessingIdleRunning = false;
  }

  public initialize(viewer: Viewer, chat: Chat, setSubconciousLogs: (subconciousLogs: TimestampedPrompt[]) => void, isChatSpeaking: boolean) {
    this.viewer = viewer;
    this.chat = chat;

    this.setSubconciousLogs = setSubconciousLogs
    this.isChatSpeaking = isChatSpeaking

    this.loadIdleTextPrompt(null);

    // This loop will run depending on MIYORA Life Enabled/Disabled config
    this.processingIdle();

    this.initialized = true;
  }

  // These are function to coonfigure mainEvents queue

  // Function for loaded idle text prompt
  public async loadIdleTextPrompt(prompts: string[] | null) {
    if (prompts === null) {
      idleEvents.forEach((prompt) =>
        this.mainEvents.enqueue({ events: prompt }),
      );
    } else {
      if (prompts.length > 0) {
        this.mainEvents.clear();
        prompts.forEach((prompt: string) =>
          basedPrompt.idleTextPrompt.push(prompt),
        );
      }
    }
  }

  // Function to insert event to the front of the mainEvents Queue
  public insertFront(event: MIYORALifeEvents) {
    const newQueue = new Queue<MIYORALifeEvents>();
    newQueue.enqueue(event);

    while (!this.mainEvents.isEmpty()) {
      newQueue.enqueue(this.mainEvents.dequeue()!);
    }

    this.mainEvents = newQueue;
  }

  // Function to remove a specific event from the mainEvents queue
  public removeEvent(eventName: string) {
    const newQueue = new Queue<MIYORALifeEvents>();
    let found = false;

    while (!this.mainEvents.isEmpty()) {
      const event = this.mainEvents.dequeue();
      if (event && event.events !== eventName) {
        newQueue.enqueue(event);
      } else {
        found = true;
      }
    }

    this.mainEvents = newQueue;
  }

  // Function to check if a specific event exists in the mainEvents queue
  public containsEvent(eventName: string): boolean {
    let contains = false;

    this.mainEvents.forEach((event) => {
      if (event.events === eventName) {
        contains = true;
      }
    });

    return contains;
  }

  // These are function to handle idle event

  // Function to check message from user
  public receiveMessageFromUser(message: string) {
    if (message.toLowerCase().includes('news')) {
      console.log("Triggering news function call.");
      this.insertFront({ events: "News" });
    }

    // Re-enqueue subconcious event after get the user input (1 Subconcious events per idle cycle)
    (!this.containsEvent("Subconcious")) ? this.mainEvents.enqueue({ events: "Subconcious" }) : null;

    this.pause();
    this.wakeFromSleep();
    this.triggerMessage = true;
  }

  // Function handle when MIYORA got poked in MIYORA life event

  // public handlePoked() {
  //   if (!this.chat?.isAwake() && config("MIYORA_life_enabled") === "true") {
  //     console.log("Handling idle event:", "I just poked you!");
  //     this.chat?.receiveMessageFromUser("I just poked you!",true);
  //   }
  // }

  public async processingIdle() {
    // Preventing duplicate processingIdle loop
    if (this.isProcessingIdleRunning) { return; }

    this.isProcessingIdleRunning = true;

    console.log("Starting MIYORA Life");
    while (config("MIYORA_life_enabled") === "true") {
      // Check if MIYORA is in idle state trigger processingEvent loop
      if (!this.chat?.isAwake()) {
        this.processingEvent();
      }
      await wait(50);
    }

    this.isProcessingIdleRunning = false;
    this.isProcessingEventRunning = false;
    this.triggerMessage = false;
    console.log("Stopping idle loop");
  }

  public async processingEvent() {
    // Preventing duplicate processing event loop
    if (this.isProcessingEventRunning) {
      // Check for resume
      if (!(await this.checkResume())) {
        return;
      }
      return;
    }

    // User must start the conversation with MIYORA first to activate MIYORA life
    if (!this.triggerMessage) {
      return;
    }

    this.isProcessingEventRunning = true;

    while (this.isProcessingEventRunning) {
      // Wait for current event to finish before processing next event
      if (
        this.chat!.speakJobs.size() < 1 &&
        this.chat!.ttsJobs.size() < 1 &&
        !this.isChatSpeaking &&
        !this.eventProcessing
      ) {

        resumeIdleTimer();

        // Check for pause and sleep
        await this.checkSleep();
        await this.checkPause();

        // Random chance for doing nothing (25% chance)
        if (Math.random() <= 0.25) {
          // removed for staging usage
          //console.log("Handling idle event:", "Doing nothing this cycle");
          await this.waitInterval();
          continue;
        }

        // Main event handling
        const idleEvent = this.mainEvents.dequeue();
        if (idleEvent) {
          console.time(`processing_event ${idleEvent.events}`);
          this.eventProcessing = true;
          await handleIdleEvent(idleEvent, this, this.chat!, this.viewer!);
          !(idleEvent.events === 'Subconcious' || idleEvent.events === 'Sleep') ? this.mainEvents.enqueue(idleEvent) : null;
        } else {
          //removed for staging usage
          //console.log("Handling idle event:", "No idle events in queue");
        }
      } else if (this.chat!.speakJobs.size() > 0 || this.chat!.ttsJobs.size() > 0 || this.isChatSpeaking) {
        pauseIdleTimer();
      }

      await this.waitInterval();
    }
    this.isProcessingEventRunning = false;
  }

  public async pause() {
    await this.chat?.interrupt();
    this.isPause = true;
  }

  public resume() {
    this.isPause = false;
  }

  // Function to check for sleep event if idleTime > time_to_sleep add Sleep event to the front of MIYORA queue
  private async checkSleep() {
    if (!this.isSleep) {
      const chat = this.chat;
      if (!chat) {
        console.error("Chat instance is not available");
        return;
      }
      const idleTime = chat.idleTime();
      // If character being idle morethan 120 sec or 2 min, play handle sleep event
      if (!this.containsEvent("Sleep")) {
        if (idleTime > parseInt(config("time_to_sleep_sec"))) {
          this.insertFront({ events: "Sleep" });
        }
      }
    }
  }

  // Function to pause the processingEvent loop is pauseFlag is true/false
  private async checkPause() {
    if (this.isPause) {
      console.log("MIYORA Life Paused");
      await new Promise<void>((resolve) => {
        const checkPause = setInterval(() => {
          if (!this.isPause) {
            clearInterval(checkPause);
            resolve(console.log("MIYORA Life Initiated"));
          }
        }, 50);
      });
    }
  }

  // Function to resume the processingEvent loop from pause
  private async checkResume(): Promise<boolean> {
    if (this.isPause === true && !this.isSleep && this.isSettingOff) {
      this.resume();
      return true;
    }
    return false;
  }

  // Function to pause/resume the loop when setting page is open/close
  public checkSettingOff(off: boolean) {
    if (off) {
      this.isSettingOff = true;
      this.wakeFromSleep();
      this.chat?.updateAwake(); // Update awake when user exit the setting page
      this.resume();
    } else {
      this.isSettingOff = false;
      this.pause();
    }
  }

  // These is MIYORA life utils

  // Update time before idle increase by 1.25 times
  public updatedIdleTime() {
    const idleTimeSec = Math.min(
      parseInt(config("time_before_idle_sec")) * 1.25,
      240,
    );
    // updateConfig("time_before_idle_sec", idleTimeSec.toString());
    // removed for staging
    //console.log(`Updated time before idle to ${idleTimeSec} seconds`);
  }

  public async waitInterval() {
    const [minMs, maxMs] = [
      parseInt(config("min_time_interval_sec")),
      parseInt(config("max_time_interval_sec")),
    ];
    const interval =
      Math.floor(Math.random() * (maxMs - minMs + 1) + minMs) * 1000;
    return new Promise((resolve) => setTimeout(resolve, interval));
  }

  public wakeFromSleep() {
    this.isSleep = false;
    this.viewer?.model?.playEmotion("Neutral");
  }

}