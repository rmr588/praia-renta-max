import { TrendingUp, Calendar, MapPin } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const trends = [
  {
    icon: Calendar,
    title: "Alta Temporada",
    period: "Dez-Mar",
    insight: "Ocupação média de 95% com diárias 45% superiores",
    tip: "Reserve com antecedência mínima de 60 dias"
  },
  {
    icon: TrendingUp,
    title: "Feriados Prolongados",
    period: "Carnaval, Páscoa, Junho",
    insight: "Picos de demanda com diárias premium de até R$ 600",
    tip: "Bloqueie as datas 90 dias antes"
  },
  {
    icon: MapPin,
    title: "Por Região",
    period: "Boqueirão líder",
    insight: "Canto do Forte: R$ 420 | Boqueirão: R$ 380 | Tupi: R$ 350",
    tip: "Studios rendem 20% mais por m² que apartamentos grandes"
  }
];

const Trends = () => {
  return (
    <section id="trends" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Tendências do bairro
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Insights atualizados para maximizar sua receita em Praia Grande
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {trends.map((trend, index) => (
            <Card key={index} className="shadow-card hover:shadow-elegant transition-smooth">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 gradient-hero rounded-lg">
                    <trend.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{trend.title}</CardTitle>
                    <CardDescription className="text-primary font-semibold">
                      {trend.period}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3 leading-relaxed">
                  {trend.insight}
                </p>
                <div className="p-3 bg-accent/10 rounded-lg">
                  <p className="text-sm text-accent font-medium">
                    💡 {trend.tip}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-primary mb-4">
            Dados atualizados em tempo real
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Monitoramos preços, ocupação e tendências de mercado para ajustar sua estratégia automaticamente. 
            Você sempre estará um passo à frente da concorrência.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-accent rounded-full"></div>
              <span>Airbnb</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <span>Booking.com</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-secondary rounded-full"></div>
              <span>VRBO</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trends;