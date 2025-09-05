import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import motaRochaLogo from "@/assets/mota-rocha-logo.png";

const Header = () => {
  const navigate = useNavigate();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const goToHome = () => {
    navigate('/');
  };

  const navigationItems = [
    { label: "Como Funciona", id: "how-it-works" },
    { label: "Simulador", id: "simulator" },
    { label: "Métricas", id: "metrics" },
    { label: "Tendências", id: "trends" },
    { label: "FAQ", id: "faq" },
    { label: "Contato", id: "contact" }
  ];

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
            className="h-16 w-auto object-contain"
          />
          <div>
            <p className="text-sm text-muted-foreground text-left">
              Gestão Profissional de Temporada
            </p>
          </div>
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {navigationItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </button>
          ))}
        </nav>
        
        {/* Desktop CTA */}
        <Button 
          variant="hero" 
          size="lg"
          onClick={() => scrollToSection('simulator')}
          className="hidden lg:flex"
        >
          Simular aumento de renda
        </Button>
        
        {/* Mobile CTA */}
        <Button 
          variant="hero" 
          size="default"
          onClick={() => scrollToSection('simulator')}
          className="lg:hidden"
        >
          Simular renda
        </Button>
      </div>
    </header>
  );
};

export default Header;