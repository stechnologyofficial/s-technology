import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Sparkles, Zap, Shield, Code2, Gamepad2, Wrench } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 animate-gradient" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLXdpZHRoPSIuNSIgb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')] opacity-20" />
        
        <div className="container relative py-24 md:py-32">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Modern Technology Solutions</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="gradient-text">S-Technology</span>
              <br />
              <span className="text-foreground">Build the Future</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Make a difference in the tech world with modern tools and fun games. 
              Open source, modular and user-friendly solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/tools">
                <Button size="lg" className="group">
                  Explore Tools
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/games">
                <Button size="lg" variant="outline" className="group">
                  Browse Games
                  <Gamepad2 className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card/30">
        <div className="container">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Why <span className="gradient-text">S-Technology</span>?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Projects built with modern web technologies, prioritizing user experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="glass border-primary/20 hover:border-primary/40 transition-all group">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Fast & Performant</CardTitle>
                <CardDescription>
                  Applications optimized with modern technologies, running at lightning speed.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="glass border-secondary/20 hover:border-secondary/40 transition-all group">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Code2 className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle>Modular Structure</CardTitle>
                <CardDescription>
                  Architecture developed with clean code principles, easily extensible.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="glass border-accent/20 hover:border-accent/40 transition-all group">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Shield className="w-6 h-6 text-accent" />
                </div>
                <CardTitle>Secure & Reliable</CardTitle>
                <CardDescription>
                  Systems protected with best security practices, stable and reliable.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <Card className="glass border-primary/20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 animate-gradient" />
            <CardContent className="relative p-12 text-center space-y-6">
              <div className="flex justify-center gap-4 mb-6">
                <Wrench className="w-12 h-12 text-primary animate-float" />
                <Gamepad2 className="w-12 h-12 text-secondary animate-float" style={{ animationDelay: "1s" }} />
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold">
                Ready to Explore Our Projects?
              </h2>
              
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Speed up your workflow with our tools or have fun with our games.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link href="/tools">
                  <Button size="lg" variant="default">
                    Browse Tools
                  </Button>
                </Link>
                <Link href="/games">
                  <Button size="lg" variant="outline">
                    Try Games
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
