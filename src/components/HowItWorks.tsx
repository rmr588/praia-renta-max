import { Search, Camera, Settings, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Análise do imóvel",
    description: "Visitamos, estimamos potencial e definimos estratégia de preço e posicionamento."
  },
  {
    icon: Camera,
    title: "Preparação & anúncio",
    description: "Fotos profissionais, descrição otimizada e publicação em Airbnb/Booking/VRBO."
  },
  {
    icon: Settings,
    title: "Operação completa",
    description: "Reservas, comunicação, limpeza, manutenção, enxoval e check-in/out."
  },
  {
    icon: TrendingUp,
    title: "Ajustes e repasses",
    description: "Monitoramos performance, ajustamos preços dinamicamente e enviamos relatório mensal com repasse pontual."
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Como funciona
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Processo simples e transparente em 4 passos
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white shadow-card rounded-xl p-6 mb-4 group-hover:shadow-elegant transition-smooth">
                <div className="w-16 h-16 gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                  <div className="w-8 h-0.5 bg-primary/20"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;