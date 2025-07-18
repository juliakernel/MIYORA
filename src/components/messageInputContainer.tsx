import dynamic from "next/dynamic";
import { useCallback, useEffect, useState } from "react";
import { CAPanel } from "@/components/CAPanel";

// necessary because of VAD in MessageInput
const DynamicMessageInput = dynamic(() =>
  import("@/components/messageInput"), {
  ssr: false
}
);

/**
 * Provides text input and voice input
 *
 * Automatically send when speech recognition is completed,
 * and disable input while generating response text
 */
export const MessageInputContainer = ({
  isChatProcessing,
}: {
  isChatProcessing: boolean;
}) => {
  const [userMessage, setUserMessage] = useState("");

  useEffect(() => {
    if (!isChatProcessing) {
      setUserMessage("");
    }
  }, [isChatProcessing]);

  return (
    <>
      <div className="fixed top-4 z-20 w-full">
        <div className="mx-auto max-w-4xl p-2">
          <CAPanel className="mb-2" />
        </div>
      </div>
      <DynamicMessageInput
        userMessage={userMessage}
        setUserMessage={setUserMessage}
        isChatProcessing={isChatProcessing}
        onChangeUserMessage={(e) => setUserMessage(e.target.value)}
      />
    </>
  );
};
