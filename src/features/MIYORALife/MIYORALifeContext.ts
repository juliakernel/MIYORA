import { createContext } from "react";
import { MIYORALife } from "./MIYORALife";

const miyoraLifeInstance = new MIYORALife();

export const MIYORALifeContext = createContext({ MIYORALife: miyoraLifeInstance });