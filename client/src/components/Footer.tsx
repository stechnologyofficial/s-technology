import { Github, Mail, Code2, Facebook, Youtube } from "lucide-react";
import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const profileImageId = "15DqAOmm7SN-jfk-OMwZVDn7leZo5AcsI";
  
  const getProfileImageUrl = (id: string) => {
    if (!id || id.trim() === '') return '';
    // CORS sorununu çözmek için proxy servisi kullanıyoruz
    const driveUrl = `https://drive.google.com/thumbnail?id=${id}&sz=w400`;
    return `https://images.weserv.nl/?url=${encodeURIComponent(driveUrl)}`;
  };

  const getAlternativeImageUrl = (id: string) => {
    if (!id || id.trim() === '') return '';
    const driveUrl = `https://drive.google.com/thumbnail?id=${id}&sz=w400`;
    return `https://api.allorigins.win/raw?url=${encodeURIComponent(driveUrl)}`;
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    const currentSrc = target.src;
    
    // Eğer weserv.nl proxy'si çalışmazsa, alternatif proxy'ye geç
    if (currentSrc.includes('weserv.nl')) {
      target.src = getAlternativeImageUrl(profileImageId);
      return;
    }
    
    // Eğer alternatif proxy de çalışmazsa, doğrudan Google Drive'ı dene
    if (currentSrc.includes('allorigins.win')) {
      target.src = `https://drive.google.com/thumbnail?id=${profileImageId}&sz=w400`;
      target.setAttribute('referrerPolicy', 'no-referrer');
      return;
    }
  };

  return (
    <footer className="border-t border-border/50 bg-card/50 backdrop-blur-sm">
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Code2 className="w-6 h-6 text-primary" />
              <span className="text-lg font-bold gradient-text">
                S-Technology
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Technology platform developing modern tools and games.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/tools" className="hover:text-primary transition-colors">
                  Tools
                </Link>
              </li>
              <li>
                <Link href="/games" className="hover:text-primary transition-colors">
                  Games
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Contact</h3>
            {/* Profile Picture and Name */}
            <div className="flex items-start gap-4">
              <div className="relative flex-shrink-0 group">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <img
                  src={getProfileImageUrl(profileImageId)}
                  alt="Profile"
                  className="relative w-20 h-20 rounded-full object-cover border-2 border-primary/30 shadow-lg ring-2 ring-background/50 transition-transform duration-300 group-hover:scale-105"
                  onError={handleImageError}
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col gap-2 pt-1">
                <div>
                  <h4 className="text-xl font-bold text-foreground mb-1.5">Salih Bağlan</h4>
                  <Badge variant="secondary" className="text-xs font-medium">
                    Game Developer
                  </Badge>
                </div>
              </div>
            </div>
            {/* About */}
            <p className="text-sm text-muted-foreground leading-relaxed pt-1">
              I have been working in game development for 5 years. I am an expert in
              Unity and C#. I love developing creative and user-friendly games.
            </p>
            {/* Social Links */}
            <div className="flex gap-2 pt-1">
              <a
                href="https://github.com/salihbaglan"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-muted/50 hover:bg-[#24292e] dark:hover:bg-[#f6f8fa] flex items-center justify-center transition-all duration-200 group hover:scale-110 hover:shadow-lg"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-muted-foreground group-hover:text-[#ffffff] dark:group-hover:text-[#24292e] transition-colors" />
              </a>
              <a
                href="mailto:stechnology.com.tr@gmail.com"
                className="w-10 h-10 rounded-lg bg-muted/50 hover:bg-[#ea4335] flex items-center justify-center transition-all duration-200 group hover:scale-110 hover:shadow-lg"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-muted-foreground group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://www.facebook.com/salih.bgl.9"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-muted/50 hover:bg-[#1877f2] flex items-center justify-center transition-all duration-200 group hover:scale-110 hover:shadow-lg"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-muted-foreground group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://www.youtube.com/@STechnologyOfficial-b9b"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-muted/50 hover:bg-[#ff0000] flex items-center justify-center transition-all duration-200 group hover:scale-110 hover:shadow-lg"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5 text-muted-foreground group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-border/50 text-center text-sm text-muted-foreground">
          <p>© {currentYear} S-Technology. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
