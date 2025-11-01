import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Wrench } from "lucide-react";
import { Link } from "wouter";
import { tools } from "@/data/tools";
import { ToolStatus } from "@/types/tool";

const statusConfig: Record<ToolStatus, { label: string; className: string }> = {
  active: { label: "Active", className: "bg-accent/20 text-accent border-accent/30" },
  beta: { label: "Beta", className: "bg-secondary/20 text-secondary border-secondary/30" },
  "coming-soon": { label: "Coming Soon", className: "bg-muted/50 text-muted-foreground border-muted" },
};

export default function Tools() {

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12 space-y-4 animate-slide-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 mb-4">
            <Wrench className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Developer Tools</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">Tools</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Modern and useful tools that will speed up your workflow. 
            All tools are free.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <Card
              key={tool.id}
              className="glass border-primary/20 hover:border-primary/40 transition-all group animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform overflow-hidden">
                    {tool.icon}
                  </div>
                  <Badge variant="outline" className={statusConfig[tool.status].className}>
                    {statusConfig[tool.status].label}
                  </Badge>
                </div>
                <CardTitle className="text-xl">{tool.title}</CardTitle>
                <CardDescription>{tool.description}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {tool.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="flex gap-2">
                <Link href={`/tool/${tool.id}`} className="flex-1">
                  <Button
                    variant="default"
                    className="w-full"
                  >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Details
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => window.open(tool.githubUrl || "https://github.com/stechnologyofficial", "_blank")}
                >
                  <Github className="w-4 h-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Empty State Message */}
        {tools.length === 0 && (
          <div className="text-center py-20">
            <Wrench className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
            <h3 className="text-xl font-semibold mb-2">No Tools Added Yet</h3>
            <p className="text-muted-foreground">
              You'll see great tools here soon!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
