import { BarChart3, DollarSign, Calendar, XCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import reportImage from "@/assets/performance-report.jpg";

const metrics = [
  {
    icon: BarChart3,
    title: "Taxa de Ocupação",
    description: "Média anual de reservas",
    value: "85%",
    detail: "vs. 60% média do mercado",
    color: "text-accent"
  },
  {
    icon: DollarSign,
    title: "Diária Média",
    description: "Por sazonalidade",
    value: "R$ 380",
    detail: "Alta: R$ 450 | Baixa: R$ 310",
    color: "text-secondary"
  },
  {
    icon: Calendar,
    title: "Lead Time",
    description: "Dias de antecedência",
    value: "28 dias",
    detail: "Reservas com antecedência ideal",
    color: "text-primary"
  },
  {
    icon: XCircle,
    title: "Cancelamentos",
    description: "Taxa anual",
    value: "3.2%",
    detail: "vs. 8% média do mercado",
    color: "text-destructive"
  }
];

const Metrics = () => {
  return (
    <section className="py-20 gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Métricas que você recebe
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Acompanhe a performance do seu imóvel com relatórios mensais detalhados
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <Card key={index} className="shadow-card hover:shadow-elegant transition-smooth">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <metric.icon className={`w-6 h-6 ${metric.color}`} />
                  </div>
                  <CardTitle className="text-lg">{metric.title}</CardTitle>
                </div>
                <CardDescription>{metric.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className={`text-3xl font-bold mb-2 ${metric.color}`}>
                  {metric.value}
                </div>
                <p className="text-sm text-muted-foreground">
                  {metric.detail}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Relatórios enviados todo dia 5 do mês com repasse pontual
          </p>
          <div className="flex justify-center">
            <img 
              src={reportImage} 
              alt="Exemplo de relatório de performance mensal"
              className="max-w-md rounded-lg shadow-card"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Metrics;