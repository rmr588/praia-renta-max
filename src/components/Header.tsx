import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import motaRochaLogo from "@/assets/mota-rocha-logo.png";

const Header = () => {
  const navigate = useNavigate();
  
  const scrollToSimulator = () => {
    const element = document.getElementById('simulator');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const goToHome = () => {
    navigate('/');
  };

  return (
    <header className="bg-background border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <button 
          onClick={goToHome}
          className="flex items-center gap-3 hover:opacity-80 transition-opacity group"
        >
          <img 
            src={motaRochaLogo} 
            alt="Mota & Rocha Logo" 
            className="w-12 h-12 object-contain"
          />
          <div>
            <h1 className="text-2xl font-bold text-primary group-hover:text-primary/80 transition-colors">
              Mota & Rocha
            </h1>
            <p className="text-sm text-muted-foreground text-left">
              Gestão Profissional de Temporada
            </p>
          </div>
        </button>
        
        <Button 
          variant="hero" 
          size="lg"
          onClick={scrollToSimulator}
          className="hidden md:flex"
        >
          Simular aumento de renda
        </Button>
        
        <Button 
          variant="hero" 
          size="default"
          onClick={scrollToSimulator}
          className="md:hidden"
        >
          Simular renda
        </Button>
      </div>
    </header>
  );
};

export default Header;