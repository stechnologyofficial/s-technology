import { Tutorial } from "@/types/tool";
import { yttrackerTutorials } from "../tools/yttracker/tutorials";
import { t } from "@/lib/i18n";

const translateTutorial = (tutorial: Tutorial): Tutorial => {
  const titleKey = `${tutorial.id}._title`;
  const descKey = `${tutorial.id}.description`;

  return {
    ...tutorial,
    title: t(titleKey),
    description: t(descKey),
    steps: tutorial.steps.map((step, index) => {
      const stepTitleKey = `${tutorial.id}.step${index + 1}.title`;
      const stepDescKey = `${tutorial.id}.step${index + 1}.description`;
      const stepCodeKey = `${tutorial.id}.step${index + 1}.codeExample`;

      return {
        ...step,
        title: t(stepTitleKey),
        description: t(stepDescKey),
        codeExample: step.codeExample ? t(stepCodeKey) : undefined,
      };
    }),
  };
};

export const tutorialsByToolId: Record<string, Tutorial[]> = {
  yttracker: yttrackerTutorials,
};

export const getTutorialsByToolId = (toolId: string): Tutorial[] => {
  const tutorials = tutorialsByToolId[toolId] || [];
  return tutorials.map(translateTutorial);
};

export const getTutorialById = (toolId: string, tutorialId: string): Tutorial | undefined => {
  const tutorials = getTutorialsByToolId(toolId);
  return tutorials.find(t => t.id === tutorialId);
};
