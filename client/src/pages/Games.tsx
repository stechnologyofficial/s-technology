import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Github, Gamepad2 } from "lucide-react";
import { toast } from "sonner";

interface Game {
  id: string;
  title: string;
  description: string;
  genre: string[];
  status: "live" | "beta" | "coming-soon";
  icon: React.ReactNode;
}

const games: Game[] = [
  {
    id: "game-1",
    title: "Örnek Oyun 1",
    description: "Bu oyun henüz geliştirilme aşamasında. Yakında oynamaya hazır olacak.",
    genre: ["Puzzle", "Casual", "Single Player"],
    status: "coming-soon",
    icon: <Gamepad2 className="w-6 h-6" />,
  },
  {
    id: "game-2",
    title: "Örnek Oyun 2",
    description: "Bu oyun henüz geliştirilme aşamasında. Yakında oynamaya hazır olacak.",
    genre: ["Action", "Multiplayer", "Web"],
    status: "coming-soon",
    icon: <Gamepad2 className="w-6 h-6" />,
  },
  {
    id: "game-3",
    title: "Örnek Oyun 3",
    description: "Bu oyun henüz geliştirilme aşamasında. Yakında oynamaya hazır olacak.",
    genre: ["Strategy", "Turn-Based", "Free"],
    status: "coming-soon",
    icon: <Gamepad2 className="w-6 h-6" />,
  },
];

const statusConfig = {
  live: { label: "Canlı", className: "bg-accent/20 text-accent border-accent/30" },
  beta: { label: "Beta", className: "bg-secondary/20 text-secondary border-secondary/30" },
  "coming-soon": { label: "Yakında", className: "bg-muted/50 text-muted-foreground border-muted" },
};

export default function Games() {
  const handlePlayClick = (gameId: string) => {
    toast.info("Oyun yakında kullanıma sunulacak!", {
      description: "Bu oyun şu anda geliştirilme aşamasında.",
    });
  };

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12 space-y-4 animate-slide-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-secondary/20 mb-4">
            <Gamepad2 className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium">Eğlenceli Oyunlar</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">Oyunlar</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tarayıcınızda oynayabileceğiniz eğlenceli ve bağımlılık yapan oyunlar. 
            Tamamen ücretsiz ve reklamsız.
          </p>
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map((game, index) => (
            <Card
              key={game.id}
              className="glass border-secondary/20 hover:border-secondary/40 transition-all group animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <div className="text-secondary">{game.icon}</div>
                  </div>
                  <Badge variant="outline" className={statusConfig[game.status].className}>
                    {statusConfig[game.status].label}
                  </Badge>
                </div>
                <CardTitle className="text-xl">{game.title}</CardTitle>
                <CardDescription>{game.description}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {game.genre.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="flex gap-2">
                <Button
                  variant="default"
                  className="flex-1"
                  onClick={() => handlePlayClick(game.id)}
                >
                  <Play className="w-4 h-4 mr-2" />
                  Oyna
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => toast.info("GitHub linki yakında eklenecek")}
                >
                  <Github className="w-4 h-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Empty State Message */}
        {games.length === 0 && (
          <div className="text-center py-20">
            <Gamepad2 className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
            <h3 className="text-xl font-semibold mb-2">Henüz Oyun Eklenmedi</h3>
            <p className="text-muted-foreground">
              Yakında burada harika oyunlar göreceksiniz!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
