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
    <section id="metrics" className="py-20 gradient-subtle">
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

        <div className="mt-12">
          <p className="text-muted-foreground mb-6 text-center">
            Relatórios enviados todo dia 5 do mês com repasse pontual
          </p>
          <div className="bg-card rounded-lg shadow-card p-6 max-w-4xl mx-auto">
            <h3 className="text-lg font-semibold text-primary mb-6 text-center">
              Relatório de Performance - Exemplo
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Occupancy Chart */}
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-muted-foreground">Taxa de Ocupação (%)</h4>
                <div className="h-32 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg flex items-end justify-between px-4 pb-4">
                  {[65, 78, 85, 92, 88, 83].map((value, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div 
                        className="bg-primary rounded-t-md w-6 transition-all hover:bg-primary/80"
                        style={{ height: `${(value / 100) * 80}px` }}
                      ></div>
                      <span className="text-xs text-muted-foreground mt-1">
                        {['J', 'F', 'M', 'A', 'M', 'J'][index]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Revenue Chart */}
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-muted-foreground">Receita Mensal (R$)</h4>
                <div className="h-32 bg-gradient-to-r from-secondary/10 to-accent/10 rounded-lg flex items-end justify-between px-4 pb-4">
                  {[8500, 9200, 11800, 14200, 12800, 10500].map((value, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div 
                        className="bg-secondary rounded-t-md w-6 transition-all hover:bg-secondary/80"
                        style={{ height: `${(value / 15000) * 80}px` }}
                      ></div>
                      <span className="text-xs text-muted-foreground mt-1">
                        {['J', 'F', 'M', 'A', 'M', 'J'][index]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Summary Stats */}
              <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                <div className="text-center p-3 bg-primary/5 rounded-lg">
                  <div className="text-lg font-bold text-primary">85%</div>
                  <div className="text-xs text-muted-foreground">Ocupação Média</div>
                </div>
                <div className="text-center p-3 bg-secondary/5 rounded-lg">
                  <div className="text-lg font-bold text-secondary">R$ 380</div>
                  <div className="text-xs text-muted-foreground">Diária Média</div>
                </div>
                <div className="text-center p-3 bg-accent/5 rounded-lg">
                  <div className="text-lg font-bold text-accent">28 dias</div>
                  <div className="text-xs text-muted-foreground">Lead Time</div>
                </div>
                <div className="text-center p-3 bg-destructive/5 rounded-lg">
                  <div className="text-lg font-bold text-destructive">3.2%</div>
                  <div className="text-xs text-muted-foreground">Cancelamentos</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Metrics;