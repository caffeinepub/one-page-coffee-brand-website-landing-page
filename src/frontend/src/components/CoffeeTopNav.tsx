import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X } from 'lucide-react';

export function CoffeeTopNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Features', href: '#features' },
    { label: 'Showcase', href: '#showcase' },
    { label: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-lg border-b'
          : 'bg-background/70 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('#home')}
            className="flex items-center gap-3 hover:opacity-90 transition-opacity group"
          >
            <img
              src="/assets/generated/scnned-logo.dim_512x512.png"
              alt="Scnned Logo"
              className="h-12 w-12 object-contain group-hover:scale-110 transition-transform"
            />
            <span className="text-3xl font-black tracking-tighter text-foreground">
              scnned
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-sm font-semibold transition-colors hover:text-primary uppercase tracking-wider"
              >
                {link.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection('#contact')}
              variant="default"
              className="uppercase tracking-wide font-bold"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="flex flex-col gap-6 mt-8">
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src="/assets/generated/scnned-logo.dim_512x512.png"
                    alt="Scnned Logo"
                    className="h-12 w-12 object-contain"
                  />
                  <span className="text-2xl font-black tracking-tighter">scnned</span>
                </div>
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => scrollToSection(link.href)}
                    className="text-left text-lg font-semibold hover:text-primary transition-colors uppercase"
                  >
                    {link.label}
                  </button>
                ))}
                <Button
                  onClick={() => scrollToSection('#contact')}
                  className="mt-4 uppercase font-bold"
                >
                  Get Started
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
