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
  downloads: [
    {
      label: "Portable",
      url: "https://drive.google.com/open?id=15DhtlzlCGxLYB2PCtw-Cms1w7d-N0ifp&usp=drive_copy",
    },
    {
      label: "Setup",
      url: "https://drive.google.com/open?id=10w2Fw3zMoJ6i9Mxhv-hO7SdW31rrYEQ8&usp=drive_copy",
    },
  ],
  githubUrl: "https://github.com/stechnologyofficial",
};

