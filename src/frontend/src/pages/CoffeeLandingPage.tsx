import { CoffeeTopNav } from '@/components/CoffeeTopNav';
import { CoffeeFooter } from '@/components/CoffeeFooter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Clock, Coffee, Award, Heart } from 'lucide-react';

export default function CoffeeLandingPage() {
  const menuItems = [
    {
      name: 'Espresso',
      description: 'Rich, bold shot of pure coffee perfection',
      price: '$3.50',
      category: 'Classic'
    },
    {
      name: 'Cappuccino',
      description: 'Velvety steamed milk with a perfect foam crown',
      price: '$4.75',
      category: 'Classic'
    },
    {
      name: 'Cold Brew',
      description: 'Smooth, refreshing coffee steeped for 24 hours',
      price: '$5.00',
      category: 'Iced'
    },
    {
      name: 'Caramel Macchiato',
      description: 'Espresso marked with vanilla and caramel drizzle',
      price: '$5.50',
      category: 'Specialty'
    },
    {
      name: 'Flat White',
      description: 'Microfoam perfection with double ristretto shots',
      price: '$4.50',
      category: 'Classic'
    },
    {
      name: 'Mocha',
      description: 'Rich chocolate blended with espresso and steamed milk',
      price: '$5.25',
      category: 'Specialty'
    },
    {
      name: 'Nitro Cold Brew',
      description: 'Cascading, creamy cold brew infused with nitrogen',
      price: '$6.00',
      category: 'Iced'
    },
    {
      name: 'Vanilla Latte',
      description: 'Smooth espresso with house-made vanilla syrup',
      price: '$5.00',
      category: 'Specialty'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'Regular Customer',
      content: 'The best coffee in town, hands down. The baristas know their craft and it shows in every cup. My morning ritual starts here!',
      rating: 5
    },
    {
      name: 'James Chen',
      role: 'Coffee Enthusiast',
      content: 'I\'ve traveled the world for coffee, and this place rivals the best cafés in Seattle and Melbourne. The attention to detail is remarkable.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Local Business Owner',
      content: 'Not just great coffee, but a wonderful community space. The atmosphere is warm and welcoming, perfect for meetings or solo work sessions.',
      rating: 5
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen">
      <CoffeeTopNav />
      
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/generated/coffee-hero.dim_1920x1080.png" 
            alt="Artisan coffee being poured"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
            Crafted with Passion
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl mb-8 max-w-3xl mx-auto font-light">
            Every cup tells a story. Discover artisan coffee roasted to perfection, 
            brewed with care, and served with love.
          </p>
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 h-auto"
            onClick={() => scrollToSection('menu')}
          >
            <Coffee className="mr-2 h-5 w-5" />
            Explore Our Menu
          </Button>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Our Menu</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Handcrafted beverages made with premium beans sourced from sustainable farms around the world
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {menuItems.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-xl">{item.name}</CardTitle>
                    <span className="text-2xl font-bold text-primary">{item.price}</span>
                  </div>
                  <CardDescription className="text-sm text-muted-foreground">
                    {item.category}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our Story</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Coffee className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Premium Beans</h3>
                <p className="text-muted-foreground">
                  Sourced from the finest coffee-growing regions, roasted in small batches for optimal flavor
                </p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Expert Baristas</h3>
                <p className="text-muted-foreground">
                  Our team of certified baristas brings years of experience and passion to every cup
                </p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Community First</h3>
                <p className="text-muted-foreground">
                  More than coffee—we're building a space where connections are made and memories are created
                </p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none text-center">
              <p className="text-lg leading-relaxed">
                Founded in 2018, we set out with a simple mission: to serve exceptional coffee in a warm, 
                welcoming environment. What started as a small neighborhood café has grown into a beloved 
                community gathering place. We believe that great coffee is an art form, and we're dedicated 
                to perfecting our craft every single day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Hours Section */}
      <section id="location" className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Visit Us</h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              We're here to serve you the perfect cup
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <MapPin className="mr-2 h-6 w-6 text-primary" />
                  Location
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-lg">123 Coffee Street</p>
                <p className="text-lg">Downtown District</p>
                <p className="text-lg">San Francisco, CA 94102</p>
                <p className="text-muted-foreground mt-4">
                  Free parking available in the rear lot. Bike racks at the entrance.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Clock className="mr-2 h-6 w-6 text-primary" />
                  Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between text-lg">
                    <span className="font-medium">Monday - Friday</span>
                    <span>6:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between text-lg">
                    <span className="font-medium">Saturday</span>
                    <span>7:00 AM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between text-lg">
                    <span className="font-medium">Sunday</span>
                    <span>7:00 AM - 7:00 PM</span>
                  </div>
                  <p className="text-muted-foreground mt-4 text-sm">
                    Holiday hours may vary. Check our social media for updates.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">What People Say</h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Don't just take our word for it
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 fill-primary"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <CardDescription>{testimonial.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed italic">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CoffeeFooter />
    </div>
  );
}
