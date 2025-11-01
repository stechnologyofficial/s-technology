import { Tool } from "@/types/tool";
import React from "react";

export const yttrackerTool: Tool = {
  id: "yttracker",
  title: "YouTube Live Tracker",
  description: "Track YouTube live streams and create visual overlays. Professional tool compatible with streaming software.",
  tags: ["Desktop", "Windows", "Streaming", "Free"],
  status: "active",
  icon: <img src="/yttracker-icon.png" alt="YouTube Live Tracker" className="w-full h-full object-contain" />,
  version: "1.0.0",
  downloadInfo: {
    platform: "Windows",
    architecture: "x64",
    fileExtension: ".exe",
  },
  iconPath: "/yttracker-icon.png",
  githubUrl: "https://github.com/stechnologyofficial",
};

