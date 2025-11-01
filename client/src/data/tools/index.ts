import { Tool } from "@/types/tool";
import { yttrackerTool } from "./yttracker";

export const tools: Tool[] = [
  yttrackerTool,
];

export const getToolById = (id: string): Tool | undefined => {
  return tools.find(tool => tool.id === id);
};

export { yttrackerTool } from "./yttracker";

