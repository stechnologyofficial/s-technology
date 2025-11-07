import { Github, Mail, Code2, Facebook, Youtube } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  const currentYear = new Date().getFullYear();

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

          {/* Social Links */}
          <div className="space-y-3">
            <h3 className="font-semibold text-foreground">Contact</h3>
            <div className="flex gap-3">
              <a
                href="https://github.com/stechnologyofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-muted/50 hover:bg-[#24292e] dark:hover:bg-[#f6f8fa] flex items-center justify-center transition-colors group"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-muted-foreground group-hover:text-[#ffffff] dark:group-hover:text-[#24292e] transition-colors" />
              </a>
              <a
                href="mailto:stechnology.com.tr@gmail.com"
                className="w-10 h-10 rounded-lg bg-muted/50 hover:bg-[#ea4335] flex items-center justify-center transition-colors group"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-muted-foreground group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://www.facebook.com/salih.bgl.9"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-muted/50 hover:bg-[#1877f2] flex items-center justify-center transition-colors group"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-muted-foreground group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://www.youtube.com/@STechnologyOfficial-b9b"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-muted/50 hover:bg-[#ff0000] flex items-center justify-center transition-colors group"
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
