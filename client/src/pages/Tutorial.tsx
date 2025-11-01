import { useRoute } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Link } from "wouter";
import { getToolById } from "@/data/tools";
import { getTutorialById } from "@/data/tutorials";
import { useEffect, useState } from "react";
import { Tutorial as TutorialType } from "@/types/tool";

export default function Tutorial() {
  const [, params] = useRoute("/tool/:id/tutorial/:tutorialId");
  const toolId = params?.id || "";
  const tutorialId = params?.tutorialId || "";

  const [tool, setTool] = useState(getToolById(toolId));
  const [tutorial, setTutorial] = useState<TutorialType | undefined>(
    getTutorialById(toolId, tutorialId)
  );
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const foundTool = getToolById(toolId);
    const foundTutorial = getTutorialById(toolId, tutorialId);
    setTool(foundTool);
    setTutorial(foundTutorial);
    setCurrentStep(0);
  }, [toolId, tutorialId]);

  if (!tool || !tutorial) {
    return (
      <div className="min-h-screen bg-background py-12">
        <div className="container">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Tutorial Not Found</h1>
            <Link href={tool ? `/tool/${toolId}` : "/tools"}>
              <Button variant="outline">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Go Back
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const step = tutorial.steps[currentStep];
  const isFirstStep = currentStep === 0;
  const isLastStep = currentStep === tutorial.steps.length - 1;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="border-b border-border/50 bg-card/30">
        <div className="container py-6">
          <div className="flex items-center justify-between mb-4">
            <Link href={`/tool/${toolId}`}>
              <Button variant="ghost">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Tool Details
              </Button>
            </Link>
          </div>
          
          <div>
            <h1 className="text-3xl font-bold mb-2">{tutorial.title}</h1>
            <p className="text-muted-foreground">{tutorial.description}</p>
          </div>

          {/* Progress */}
          <div className="mt-4">
            <div className="flex items-center gap-2 mb-2">
              {tutorial.steps.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 flex-1 rounded-full transition-colors ${
                    index <= currentStep
                      ? "bg-primary"
                      : "bg-muted"
                  }`}
                />
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              Step {currentStep + 1} / {tutorial.steps.length}
            </p>
          </div>
        </div>
      </section>

      {/* Step Content */}
      <section className="py-12">
        <div className="container max-w-4xl">
          <Card className="glass border-primary/20">
            <CardContent className="p-8">
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold">{currentStep + 1}</span>
                  </div>
                  <h2 className="text-2xl font-bold">{step.title}</h2>
                </div>

                {step.image && (
                  <div className="w-full h-64 rounded-lg overflow-hidden mb-6 bg-muted">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                <p className="text-lg text-muted-foreground mb-6 whitespace-pre-line">
                  {step.description}
                </p>

                {step.codeExample && (
                  <div className="bg-muted rounded-lg p-4 mb-6">
                    <pre className="text-sm font-mono whitespace-pre-wrap">
                      {step.codeExample}
                    </pre>
                  </div>
                )}
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between pt-6 border-t border-border">
                <Button
                  variant="outline"
                  onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                  disabled={isFirstStep}
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Previous
                </Button>

                <div className="flex items-center gap-2">
                  {tutorial.steps.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentStep(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentStep
                          ? "bg-primary w-8"
                          : index < currentStep
                          ? "bg-primary/50"
                          : "bg-muted"
                      }`}
                      aria-label={`Step ${index + 1}`}
                    />
                  ))}
                </div>

                {isLastStep ? (
                  <Link href={`/tool/${toolId}`}>
                    <Button>
                      <Check className="w-4 h-4 mr-2" />
                      Complete
                    </Button>
                  </Link>
                ) : (
                  <Button
                    onClick={() =>
                      setCurrentStep(Math.min(tutorial.steps.length - 1, currentStep + 1))
                    }
                  >
                    Next
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

