import { Tool } from "@/types/tool";
import React from "react";

export const yttrackerTool: Tool = {
  id: "yttracker",
  title: "YouTube Live Tracker",
  description: "Track YouTube live streams and create visual overlays. Professional tool compatible with streaming software.",
  tags: ["Desktop", "Windows", "Streaming", "Free"],
  status: "active",
  icon: <img src={`${import.meta.env.BASE_URL}yttracker-icon.png`} alt="YouTube Live Tracker" className="w-full h-full object-contain" />,
  version: "1.0.0",
  downloadInfo: {
    platform: "Windows",
    architecture: "x64",
    fileExtension: ".exe",
  },
  iconPath: `${import.meta.env.BASE_URL}yttracker-icon.png`,
  downloadUrl: "https://drive.google.com/uc?export=download&id=1feAt9EGdGncGrGVPWWANmIVDlkDZx-iY",
  githubUrl: "https://github.com/stechnologyofficial",
};

