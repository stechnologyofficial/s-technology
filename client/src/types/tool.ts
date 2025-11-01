import { ReactNode } from "react";

export type ToolStatus = "active" | "beta" | "coming-soon";

export interface Tool {
  id: string;
  title: string;
  description: string;
  tags: string[];
  status: ToolStatus;
  icon: ReactNode;
  version: string;
  downloadInfo?: {
    platform: string;
    architecture?: string;
    fileExtension?: string;
  };
  downloadUrl?: string;
  iconPath?: string;
  githubUrl?: string;
}

export interface Tutorial {
  id: string;
  title: string;
  description: string;
  image?: string;
  steps: TutorialStep[];
}

export interface TutorialStep {
  title: string;
  description: string;
  image?: string;
  codeExample?: string;
}

