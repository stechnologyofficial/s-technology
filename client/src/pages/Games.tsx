import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Play, Github, Gamepad2, Youtube, ExternalLink, FlaskConical } from "lucide-react";
import { toast } from "sonner";
import { publishedGames, prototypeGames, type Game } from "@/data/games";

const statusConfig = {
  live: { label: "Canlı", className: "bg-green-500/20 text-green-600 dark:text-green-400 border-green-500/30" },
  prototype: { label: "Prototip", className: "bg-blue-500/20 text-blue-600 dark:text-blue-400 border-blue-500/30" },
  deprecated: { label: "Kullanımdan Kaldırıldı", className: "bg-orange-500/20 text-orange-600 dark:text-orange-400 border-orange-500/30" },
};

export default function Games() {
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [currentTab, setCurrentTab] = useState("published");

  const getImageUrl = (id: string, size: 'w200' | 'w400' | 'w800' | 'w1200' = 'w800') => {
    if (!id || id.trim() === '') return '';
    // CORS sorununu çözmek için proxy servisi kullanıyoruz
    // images.weserv.nl Google Drive görüntülerini CORS sorunu olmadan yükler
    const driveUrl = `https://drive.google.com/thumbnail?id=${id}&sz=${size}`;
    return `https://images.weserv.nl/?url=${encodeURIComponent(driveUrl)}`;
  };

  const getAlternativeImageUrl = (id: string) => {
    if (!id || id.trim() === '') return '';
    // Alternatif proxy servisi
    const driveUrl = `https://drive.google.com/thumbnail?id=${id}&sz=w800`;
    return `https://api.allorigins.win/raw?url=${encodeURIComponent(driveUrl)}`;
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    const currentSrc = target.src;
    
    // Eğer weserv.nl proxy'si çalışmazsa, alternatif proxy'ye geç
    if (currentSrc.includes('weserv.nl')) {
      const idMatch = currentSrc.match(/id=([^&]+)/);
      if (idMatch && idMatch[1]) {
        target.src = getAlternativeImageUrl(idMatch[1]);
        return;
      }
    }
    
    // Eğer alternatif proxy de çalışmazsa, doğrudan Google Drive'ı dene (referrerPolicy ile)
    if (currentSrc.includes('allorigins.win')) {
      const idMatch = currentSrc.match(/id=([^&]+)/);
      if (idMatch && idMatch[1]) {
        // Doğrudan Google Drive URL'i dene
        target.src = `https://drive.google.com/thumbnail?id=${idMatch[1]}&sz=w800`;
        target.setAttribute('referrerPolicy', 'no-referrer');
        return;
      }
    }
    
    // Son çare olarak placeholder göster
    target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23ddd" width="400" height="300"/%3E%3Ctext fill="%23999" font-family="sans-serif" font-size="18" dy="10.5" font-weight="bold" x="50%25" y="50%25" text-anchor="middle"%3EResim Yüklenemedi%3C/text%3E%3C/svg%3E';
  };

  const openGameModal = (game: Game) => {
    setSelectedGame(game);
  };

  const closeGameModal = () => {
    setSelectedGame(null);
  };

  const renderGameCard = (game: Game, index: number) => (
    <Card
      key={game.id}
      className="glass border-secondary/20 hover:border-secondary/40 transition-all group animate-slide-up overflow-hidden"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Game Screenshot */}
      <div className="relative w-full h-48 overflow-hidden bg-muted">
        {game.screenshot ? (
          <img
            src={getImageUrl(game.screenshot)}
            alt={game.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            onError={handleImageError}
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-muted text-muted-foreground">
            <Gamepad2 className="w-12 h-12 opacity-50" />
          </div>
        )}
        {/* Game Icon Overlay */}
        {game.icon && game.icon.trim() !== '' && (
          <div className="absolute top-4 left-4">
            <img
              src={getImageUrl(game.icon, 'w200')}
              alt={`${game.title} Icon`}
              className="w-16 h-16 rounded-lg shadow-lg border-2 border-white object-cover"
              onError={handleImageError}
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>
        )}
        {/* Status Badge */}
        <div className="absolute top-4 right-4">
          <Badge variant="outline" className={statusConfig[game.status].className}>
            {statusConfig[game.status].label}
          </Badge>
        </div>
      </div>

      <CardHeader>
        <CardTitle className="text-xl line-clamp-2">{game.title}</CardTitle>
        <CardDescription className="line-clamp-2">{game.shortDescription}</CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {game.genre.slice(0, 3).map((tag) => (
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
          onClick={() => openGameModal(game)}
        >
          <Play className="w-4 h-4 mr-2" />
          Detaylar
        </Button>
        {game.youtubeUrl && (
          <Button
            variant="outline"
            size="icon"
            onClick={() => window.open(game.youtubeUrl, '_blank')}
          >
            <Youtube className="w-4 h-4" />
          </Button>
        )}
        {game.githubUrl && (
          <Button
            variant="outline"
            size="icon"
            onClick={() => window.open(game.githubUrl, '_blank')}
          >
            <Github className="w-4 h-4" />
          </Button>
        )}
      </CardFooter>
    </Card>
  );

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
            Unity ile geliştirilmiş mobil ve web oyunları. 
            Yayınlanmış oyunlar ve prototipler.
          </p>
        </div>

        {/* Tabs */}
        <Tabs value={currentTab} onValueChange={setCurrentTab} className="mb-8">
          <div className="flex justify-center">
            <TabsList>
              <TabsTrigger value="published" className="gap-2">
                <Gamepad2 className="w-4 h-4" />
                Yayınlanmış Oyunlar
              </TabsTrigger>
              <TabsTrigger value="prototype" className="gap-2">
                <FlaskConical className="w-4 h-4" />
                Prototip Oyunlar
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Published Games */}
          <TabsContent value="published" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {publishedGames.map((game, index) => renderGameCard(game, index))}
            </div>
            {publishedGames.length === 0 && (
              <div className="text-center py-20">
                <Gamepad2 className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
                <h3 className="text-xl font-semibold mb-2">Henüz Oyun Eklenmedi</h3>
                <p className="text-muted-foreground">
                  Yakında burada harika oyunlar göreceksiniz!
                </p>
              </div>
            )}
          </TabsContent>

          {/* Prototype Games */}
          <TabsContent value="prototype" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {prototypeGames.map((game, index) => renderGameCard(game, index))}
            </div>
            {prototypeGames.length === 0 && (
              <div className="text-center py-20">
                <FlaskConical className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
                <h3 className="text-xl font-semibold mb-2">Henüz Prototip Eklenmedi</h3>
                <p className="text-muted-foreground">
                  Yakında burada prototip oyunlar göreceksiniz!
                </p>
              </div>
            )}
          </TabsContent>
        </Tabs>

        {/* Game Detail Modal */}
        <Dialog open={!!selectedGame} onOpenChange={closeGameModal}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            {selectedGame && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl">{selectedGame.title}</DialogTitle>
                  <DialogDescription>{selectedGame.shortDescription}</DialogDescription>
                </DialogHeader>

                {/* Screenshot Carousel */}
                {selectedGame.images && selectedGame.images.length > 0 && (
                  <div className="mt-4">
                    <Carousel className="w-full">
                      <CarouselContent>
                        {selectedGame.images.map((imageId, index) => (
                          <CarouselItem key={index}>
                            <div className="flex items-center justify-center p-2">
                              <img
                                src={getImageUrl(imageId, 'w1200')}
                                alt={`${selectedGame.title} Screenshot ${index + 1}`}
                                className="max-w-full max-h-[500px] object-contain rounded-lg"
                                onError={handleImageError}
                                loading="lazy"
                                referrerPolicy="no-referrer"
                              />
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious />
                      <CarouselNext />
                    </Carousel>
                  </div>
                )}

                {/* Description */}
                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-3">Oyun Hakkında</h3>
                  <div className="text-muted-foreground whitespace-pre-line leading-relaxed">
                    {selectedGame.description}
                  </div>
                </div>

                {/* Technologies */}
                {selectedGame.technologies && selectedGame.technologies.length > 0 && (
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold mb-3">🔧 Kullanılan Teknolojiler</h3>
                    <div className="space-y-3">
                      {selectedGame.technologies.map((tech, index) => (
                        <div key={index} className="flex items-start gap-4 p-4 bg-muted rounded-lg">
                          <Badge
                            variant="outline"
                            className={`${
                              tech.color === 'red' ? 'bg-red-500/20 text-red-600 dark:text-red-400 border-red-500/30' :
                              tech.color === 'blue' ? 'bg-blue-500/20 text-blue-600 dark:text-blue-400 border-blue-500/30' :
                              tech.color === 'green' ? 'bg-green-500/20 text-green-600 dark:text-green-400 border-green-500/30' :
                              'bg-purple-500/20 text-purple-600 dark:text-purple-400 border-purple-500/30'
                            }`}
                          >
                            {tech.name}
                          </Badge>
                          <p className="text-sm text-muted-foreground flex-1">{tech.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="mt-6 flex flex-col sm:flex-row gap-4">
                  {selectedGame.youtubeUrl && (
                    <Button
                      variant="default"
                      className="flex-1"
                      onClick={() => window.open(selectedGame.youtubeUrl, '_blank')}
                    >
                      <Youtube className="w-4 h-4 mr-2" />
                      YouTube'da İzle
                    </Button>
                  )}
                  {selectedGame.playStoreUrl && selectedGame.status !== 'deprecated' && (
                    <Button
                      variant="default"
                      className="flex-1"
                      onClick={() => window.open(selectedGame.playStoreUrl, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Play Store'da Aç
                    </Button>
                  )}
                  {selectedGame.githubUrl && (
                    <Button
                      variant="outline"
                      className="flex-1"
                      onClick={() => window.open(selectedGame.githubUrl, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      GitHub'da Görüntüle
                    </Button>
                  )}
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
