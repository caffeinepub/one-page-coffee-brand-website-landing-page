import { Button } from '@/components/ui/button';

export default function ReferencePage() {
  const handleViewDocument = () => {
    window.location.href = 'https://hollywooddiqitalblueprint.com/hjvdhuidv/wsoft.html';
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/assets/generated/reference-bg.dim_1920x1080.png)',
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-accent/30 to-secondary/50" />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-8 px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white drop-shadow-lg">
          Reference #: CSN-8403D-PDF-18932
        </h1>
        
        <Button 
          size="lg"
          onClick={handleViewDocument}
          className="text-lg px-8 py-6 shadow-strong hover:shadow-medium transition-all duration-300"
        >
          View Document
        </Button>
      </div>
    </div>
  );
}
