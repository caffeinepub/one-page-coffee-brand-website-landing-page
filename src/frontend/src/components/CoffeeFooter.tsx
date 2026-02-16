import { SiFacebook, SiInstagram, SiX, SiLinkedin, SiGithub } from 'react-icons/si';
import { Heart, Mail } from 'lucide-react';

export function CoffeeFooter() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = typeof window !== 'undefined' 
    ? encodeURIComponent(window.location.hostname) 
    : 'scnned-app';

  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/assets/generated/scnned-logo.dim_512x512.png"
                alt="Scnned Logo"
                className="h-12 w-12 object-contain"
              />
              <span className="text-3xl font-black tracking-tighter">scnned</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Revolutionary scanning technology that transforms the way you capture, process, and understand data.
            </p>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <SiFacebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <SiInstagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="X (Twitter)"
              >
                <SiX className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <SiLinkedin className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <SiGithub className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-bold mb-4 uppercase tracking-wide text-sm">Product</h3>
            <div className="flex flex-col gap-3 text-sm">
              <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">Features</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Pricing</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">API</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Documentation</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Changelog</a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold mb-4 uppercase tracking-wide text-sm">Company</h3>
            <div className="flex flex-col gap-3 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">About</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Blog</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Careers</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Press Kit</a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold mb-4 uppercase tracking-wide text-sm">Legal</h3>
            <div className="flex flex-col gap-3 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Cookie Policy</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Security</a>
              <div className="flex items-center gap-2 text-muted-foreground pt-2">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:hello@scnned.io" className="hover:text-primary transition-colors">
                  hello@scnned.io
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>
              © {currentYear} Scnned. All rights reserved.
            </p>
            <p className="flex items-center gap-2">
              Built with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> using{' '}
              <a 
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors font-medium"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
