import { Tutorial } from "@/types/tool";
import { installationTutorial } from "./installation";
import { youtubeConnectionTutorial } from "./youtube-connection";
import { overlayCreationTutorial } from "./overlay-creation";
import { layerManagementTutorial } from "./layer-management";
import { statisticsDisplayTutorial } from "./statistics-display";
import { mediaManagementTutorial } from "./media-management";

export const yttrackerTutorials: Tutorial[] = [
  installationTutorial,
  youtubeConnectionTutorial,
  overlayCreationTutorial,
  layerManagementTutorial,
  statisticsDisplayTutorial,
  mediaManagementTutorial,
];

