import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

const faqs = [
  {
    question: "Meu condomínio permite aluguel por temporada?",
    answer: "Verificamos a convenção do condomínio e regulamentações locais antes de iniciar. Se houver restrições, orientamos sobre alternativas como hospedagem de longa duração (30+ dias) que não se enquadram como temporada."
  },
  {
    question: "Como funciona a caução e política de danos?",
    answer: "Coletamos caução via Airbnb/Booking (geralmente R$ 500-1000) e temos seguro adicional. Danos são documentados com fotos e cobrados diretamente do hóspede. Proprietário só arca com danos em casos excepcionais cobertos pelo nosso seguro."
  },
  {
    question: "Quem paga a limpeza?",
    answer: "A limpeza é cobrada separadamente do hóspede (taxa de limpeza). O valor varia entre R$ 120-200 dependendo do tamanho do imóvel. Este custo não é descontado do repasse do proprietário."
  },
  {
    question: "Posso usar o imóvel quando quiser?",
    answer: "Sim! Você pode bloquear datas para uso próprio a qualquer momento através do nosso sistema. Recomendamos avisar com pelo menos 30 dias de antecedência para não prejudicar reservas confirmadas."
  },
  {
    question: "Como fica a questão de pets e regras de silêncio?",
    answer: "Definimos as regras conforme seu perfil: aceitar pets (+15% na diária), horário de silêncio, capacidade máxima. Todas as regras ficam claras no anúncio e são reforçadas no check-in."
  },
  {
    question: "Questões de impostos e contratos seguem a Lei 8.245/91?",
    answer: "Sim, seguimos a legislação para contratos de temporada (até 90 dias). Para ISS, orientamos sobre a declaração mas não fornecemos consultoria tributária. Recomendamos consultar um contador para questões fiscais específicas."
  }
];

const FAQ = () => {
  return (
    <section className="py-20 gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Esclarecemos as principais dúvidas sobre gestão de temporada
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-lg shadow-card px-6 border-none"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold text-primary">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Ainda tem dúvidas? Nossa equipe está pronta para esclarecer tudo.
          </p>
          <a 
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent font-semibold hover:underline"
          >
            Falar no WhatsApp →
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;