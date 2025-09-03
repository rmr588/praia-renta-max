import { Star, Award, Shield } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const testimonials = [
  {
    name: "Maria Silva",
    location: "Boqueirão - 2 dormitórios",
    content: "Minha ocupação aumentou 40% no primeiro mês. O atendimento é impecável e os repasses sempre em dia.",
    rating: 5
  },
  {
    name: "João Santos",
    location: "Canto do Forte - Studio",
    content: "Profissionais sérios. Não preciso me preocupar com nada, só receber o dinheiro no final do mês.",
    rating: 5
  },
  {
    name: "Ana Costa",
    location: "Tupi - 3 dormitórios",
    content: "Gestão transparente com relatórios detalhados. Recomendo para quem quer resultado sem dor de cabeça.",
    rating: 5
  }
];

const badges = [
  {
    icon: Star,
    title: "Superhost Partner",
    subtitle: "Padrão Airbnb de excelência"
  },
  {
    icon: Shield,
    title: "Limpeza Certificada",
    subtitle: "Limpamos após cada estadia"
  },
  {
    icon: Award,
    title: "4.9/5.0",
    subtitle: "Avaliação média dos hóspedes"
  }
];

const SocialProof = () => {
  return (
    <section className="py-20 bg-background hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Proprietários confiam em nosso trabalho
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Mais de 150 propriedades gerenciadas com excelência
          </p>
        </div>

        {/* Badges */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {badges.map((badge, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 gradient-success rounded-full flex items-center justify-center mx-auto mb-4">
                <badge.icon className="w-8 h-8 text-secondary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">
                {badge.title}
              </h3>
              <p className="text-muted-foreground">
                {badge.subtitle}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-card">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-secondary fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="font-semibold text-primary">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;