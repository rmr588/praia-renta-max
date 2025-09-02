import { Button } from "./ui/button";

const Header = () => {
  const scrollToSimulator = () => {
    const element = document.getElementById('simulator');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="bg-background border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-primary">
            Mota & Rocha
          </h1>
          <p className="text-sm text-muted-foreground">
            Gestão Profissional de Temporada
          </p>
        </div>
        
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