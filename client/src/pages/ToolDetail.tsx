import { useRoute } from "wouter";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Download, Github, Play } from "lucide-react";
import { Link } from "wouter";
import { getToolById } from "@/data/tools";
import { getTutorialsByToolId } from "@/data/tutorials";
import { useEffect, useState } from "react";

export default function ToolDetail() {
  const [, params] = useRoute("/tool/:id");
  const toolId = params?.id || "";
  
  const [tool, setTool] = useState(getToolById(toolId));
  const [tutorials, setTutorials] = useState(getTutorialsByToolId(toolId));

  useEffect(() => {
    const foundTool = getToolById(toolId);
    const foundTutorials = getTutorialsByToolId(toolId);
    setTool(foundTool);
    setTutorials(foundTutorials);
  }, [toolId]);

  if (!tool) {
    return (
      <div className="min-h-screen bg-background py-12">
        <div className="container">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Tool Not Found</h1>
            <Link href="/tools">
              <Button variant="outline">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Tools
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="border-b border-border/50 bg-card/30">
        <div className="container py-8">
          <Link href="/tools">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Tools
            </Button>
          </Link>

          <div className="flex flex-col md:flex-row gap-6 items-start">
            {/* Icon */}
            <div className="flex-shrink-0">
              {tool.iconPath ? (
                <img
                  src={tool.iconPath}
                  alt={tool.title}
                  className="w-24 h-24 rounded-lg border border-border"
                />
              ) : (
                <div className="w-24 h-24 rounded-lg bg-primary/10 flex items-center justify-center border border-border">
                  {tool.icon}
                </div>
              )}
            </div>

            {/* Info */}
            <div className="flex-1 space-y-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-4xl font-bold">{tool.title}</h1>
                  <Badge variant="outline" className={
                    tool.status === "active" 
                      ? "bg-accent/20 text-accent border-accent/30"
                      : tool.status === "beta"
                      ? "bg-secondary/20 text-secondary border-secondary/30"
                      : "bg-muted/50 text-muted-foreground border-muted"
                  }>
                    {tool.status === "active" ? "Active" : tool.status === "beta" ? "Beta" : "Coming Soon"}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">Version {tool.version}</p>
              </div>

              <p className="text-lg text-muted-foreground">{tool.description}</p>

              {/* Download Info */}
              {tool.downloadInfo && (
                <div className="flex items-center gap-4 pt-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Download className="w-4 h-4 text-primary" />
                    <span className="font-medium">
                      {tool.downloadInfo.platform}
                      {tool.downloadInfo.architecture && ` ${tool.downloadInfo.architecture}`}
                      {tool.downloadInfo.fileExtension && ` ${tool.downloadInfo.fileExtension}`}
                    </span>
                  </div>
                  {tool.downloadUrl && (
                    <a href={tool.downloadUrl} target="_blank" rel="noopener noreferrer" download>
                      <Button size="sm">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </a>
                  )}
                  {tool.githubUrl && (
                    <a href={tool.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm">
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </Button>
                    </a>
                  )}
                </div>
              )}

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {tool.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tutorials Section */}
      <section className="py-12">
        <div className="container">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">Tutorials</h2>
            <p className="text-muted-foreground">
              Discover step-by-step tutorials related to {tool.title}
            </p>
          </div>

          {tutorials.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No tutorials available for this tool yet.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tutorials.map((tutorial, index) => (
                <Card
                  key={tutorial.id}
                  className="glass border-primary/20 hover:border-primary/40 transition-all group animate-slide-up cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Link href={`/tool/${toolId}/tutorial/${tutorial.id}`}>
                    <CardHeader>
                      {tutorial.image && (
                        <div className="w-full h-48 rounded-lg overflow-hidden mb-4 bg-muted">
                          <img
                            src={tutorial.image}
                            alt={tutorial.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                          />
                        </div>
                      )}
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {tutorial.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-2">
                        {tutorial.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">
                          {tutorial.steps.length} steps
                        </span>
                        <Button variant="ghost" size="sm">
                          <Play className="w-4 h-4 mr-2" />
                          Start
                        </Button>
                      </div>
                    </CardContent>
                  </Link>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

