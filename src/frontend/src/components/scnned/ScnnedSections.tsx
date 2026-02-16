import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Scan, Zap, Shield, Layers, ArrowRight, CheckCircle2 } from 'lucide-react';

export function ScnnedHero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Hero Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/generated/scnned-hero.dim_1920x1080.png"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/85 to-background/75" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(var(--primary-rgb),0.15),transparent_50%)]" />
      </div>

      {/* Hero Content */}
      <div className="container relative z-10 px-4 py-24">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <Badge variant="outline" className="text-sm px-4 py-2 border-primary/50 bg-primary/5">
            <Scan className="w-4 h-4 mr-2 inline-block" />
            Next-Gen Scanning Technology
          </Badge>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight">
            Scan. Analyze.
            <span className="block text-primary mt-2">Transform.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Revolutionary scanning technology that transforms the way you capture, process, and understand data in real-time.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 h-auto"
              onClick={() => scrollToSection('features')}
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 h-auto"
              onClick={() => scrollToSection('showcase')}
            >
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-black text-primary">99.9%</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Accuracy</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-black text-primary">10x</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Faster</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-black text-primary">24/7</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
}

export function ScnnedFeatures() {
  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Process thousands of scans per second with our optimized algorithms and cutting-edge infrastructure.',
      color: 'text-yellow-500'
    },
    {
      icon: Shield,
      title: 'Secure & Private',
      description: 'Enterprise-grade encryption and privacy controls ensure your data stays protected at all times.',
      color: 'text-green-500'
    },
    {
      icon: Layers,
      title: 'Multi-Format Support',
      description: 'Seamlessly handle documents, images, QR codes, barcodes, and more with unified processing.',
      color: 'text-blue-500'
    },
    {
      icon: Scan,
      title: 'AI-Powered Analysis',
      description: 'Advanced machine learning models extract insights and patterns from your scanned data automatically.',
      color: 'text-purple-500'
    }
  ];

  return (
    <section id="features" className="py-24 md:py-32 relative">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge variant="secondary" className="mb-4">Features</Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            Built for Performance
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to scan, analyze, and transform data at scale.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-strong transition-all duration-300 border-2 hover:border-primary/50 bg-card/50 backdrop-blur-sm"
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl bg-background border-2 ${feature.color} border-current/20 group-hover:scale-110 transition-transform`}>
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <h3 className="text-2xl font-bold">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ScnnedShowcase() {
  const benefits = [
    'Real-time processing and instant results',
    'Cloud-based infrastructure with 99.99% uptime',
    'Comprehensive API for seamless integration',
    'Advanced analytics and reporting dashboard',
    'Automated workflows and batch processing',
    'Multi-language OCR with 100+ languages'
  ];

  return (
    <section id="showcase" className="py-24 md:py-32 bg-muted/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, currentColor 35px, currentColor 36px)',
        }} />
      </div>

      <div className="container px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <Badge variant="outline" className="mb-4">Why Choose Scnned</Badge>
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                Transform Your Workflow
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Scnned combines powerful scanning capabilities with intelligent automation to help you work smarter, not harder.
              </p>
            </div>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-lg">{benefit}</span>
                </div>
              ))}
            </div>

            <Button size="lg" className="text-lg px-8 py-6 h-auto">
              View Documentation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden border-4 border-primary/20 shadow-strong bg-background/50 backdrop-blur-sm">
              <img
                src="/assets/generated/scnned-hero.dim_1920x1080.png"
                alt="Scnned Platform"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function ScnnedCTA() {
  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      
      <div className="container px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <Badge variant="secondary" className="text-sm px-4 py-2">
            Get Started Today
          </Badge>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black">
            Ready to Transform Your
            <span className="block text-primary mt-2">Scanning Experience?</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Join thousands of businesses already using Scnned to streamline their operations and unlock new possibilities.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button size="lg" className="text-lg px-8 py-6 h-auto">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 h-auto">
              Schedule Demo
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="pt-12 space-y-4">
            <p className="text-sm text-muted-foreground uppercase tracking-wider">
              Trusted by Industry Leaders
            </p>
            <div className="flex flex-wrap justify-center gap-8 items-center opacity-50">
              <div className="text-2xl font-bold">ACME Corp</div>
              <div className="text-2xl font-bold">TechFlow</div>
              <div className="text-2xl font-bold">DataSync</div>
              <div className="text-2xl font-bold">CloudBase</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
