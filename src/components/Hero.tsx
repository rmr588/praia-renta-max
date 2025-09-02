import { Button } from "./ui/button";
import { Shield, Clock, Globe } from "lucide-react";
import heroImage from "@/assets/praia-grande-hero.jpg";

const Hero = () => {
  const scrollToSimulator = () => {
    const element = document.getElementById('simulator');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const openContactForm = () => {
    const element = document.getElementById('contact-form');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Vista aérea da orla de Praia Grande com prédios residenciais"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/60"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Mota & Rocha — gestão profissional de aluguel por temporada em Praia Grande
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
            Maximizamos ocupação e diária média enquanto você recebe sem dor de cabeça. 
            Atendimento local, operação multicanal (Airbnb/Booking/VRBO) e repasses no prazo.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              variant="success" 
              size="lg"
              onClick={scrollToSimulator}
              className="text-lg"
            >
              Quero simular meu ganho
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={openContactForm}
              className="text-lg border-white text-white hover:bg-white hover:text-primary"
            >
              Falar com um especialista
            </Button>
          </div>
          
          {/* Trust Badges */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-sm opacity-90">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              <span>Atendimento local</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5" />
              <span>Operação multicanal</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>Repasses no prazo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;