import { CoffeeTopNav } from '@/components/CoffeeTopNav';
import { CoffeeFooter } from '@/components/CoffeeFooter';
import { 
  ScnnedHero, 
  ScnnedFeatures, 
  ScnnedShowcase, 
  ScnnedCTA 
} from '@/components/scnned/ScnnedSections';

export default function CoffeeLandingPage() {
  return (
    <div className="min-h-screen">
      <CoffeeTopNav />
      <ScnnedHero />
      <ScnnedFeatures />
      <ScnnedShowcase />
      <ScnnedCTA />
      <CoffeeFooter />
    </div>
  );
}
