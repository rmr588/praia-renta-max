import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Textarea } from "./ui/textarea";
import { Checkbox } from "./ui/checkbox";
import { Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "Praia Grande",
    neighborhood: "",
    propertyType: "",
    capacity: "",
    hasListing: "",
    listingUrl: "",
    allowsPets: "",
    startTime: "",
    observations: "",
    consent: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Get simulator data if available
  const simulatorData = (window as any).simulatorData || null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.consent) {
      toast({
        title: "Consentimento necessário",
        description: "Por favor, autorize o recebimento de comunicações.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://hooks.zapier.com/hooks/catch/24454656/uh0n6lq/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors", // Required for Zapier webhooks
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          city: formData.city,
          neighborhood: formData.neighborhood,
          propertyType: formData.propertyType,
          capacity: formData.capacity,
          hasListing: formData.hasListing,
          listingUrl: formData.listingUrl,
          allowsPets: formData.allowsPets,
          startTime: formData.startTime,
          observations: formData.observations,
          timestamp: new Date().toISOString(),
          source: "Mota & Rocha Landing Page",
          // Include simulator data if available
          ...(simulatorData && {
            simulator_propertyType: simulatorData.propertyType,
            simulator_currentRate: simulatorData.currentRate,
            simulator_currentOccupancy: simulatorData.currentOccupancy,
            simulator_targetOccupancy: simulatorData.targetOccupancy,
            simulator_suggestedRate: simulatorData.suggestedRate,
            simulator_cleaningFee: simulatorData.cleaningFee,
            simulator_averageStay: simulatorData.averageStay,
            simulator_currentRevenue: simulatorData.currentRevenue,
            simulator_newRevenue: simulatorData.newRevenue,
            simulator_improvement: simulatorData.improvement
          })
        }),
      });

      // Since we're using no-cors, we won't get a proper response status
      toast({
        title: "Formulário enviado com sucesso!",
        description: "Em até 24h úteis enviamos sua estimativa e o convite para o beta.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        city: "Praia Grande",
        neighborhood: "",
        propertyType: "",
        capacity: "",
        hasListing: "",
        listingUrl: "",
        allowsPets: "",
        startTime: "",
        observations: "",
        consent: false
      });

      // Clear simulator data after successful submission
      if ((window as any).simulatorData) {
        delete (window as any).simulatorData;
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Erro ao enviar formulário",
        description: "Tente novamente ou entre em contato conosco diretamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-form" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Receba seu diagnóstico gratuito
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Preencha o formulário para receber uma análise personalizada do potencial do seu imóvel
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="w-6 h-6 text-primary" />
                Solicitar Diagnóstico Gratuito
              </CardTitle>
              <CardDescription>
                Nossa equipe analisará seu imóvel e enviará um relatório detalhado por e-mail
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome completo *</Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Seu nome completo"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone (WhatsApp)</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="(11) 99999-9999"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="neighborhood">Bairro *</Label>
                    <Select required value={formData.neighborhood} onValueChange={(value) => setFormData({...formData, neighborhood: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o bairro" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="boqueirao">Boqueirão</SelectItem>
                        <SelectItem value="canto-do-forte">Canto do Forte</SelectItem>
                        <SelectItem value="tupi">Tupi</SelectItem>
                        <SelectItem value="guilhermina">Guilhermina</SelectItem>
                        <SelectItem value="outros">Outros</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="propertyType">Tipo de imóvel *</Label>
                    <Select required value={formData.propertyType} onValueChange={(value) => setFormData({...formData, propertyType: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o tipo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="studio">Studio</SelectItem>
                        <SelectItem value="1-dorm">1 dormitório</SelectItem>
                        <SelectItem value="2-dorm">2 dormitórios</SelectItem>
                        <SelectItem value="3-dorm">3+ dormitórios</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="capacity">Capacidade de hóspedes</Label>
                    <Select value={formData.capacity} onValueChange={(value) => setFormData({...formData, capacity: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Quantas pessoas" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2">2 pessoas</SelectItem>
                        <SelectItem value="4">4 pessoas</SelectItem>
                        <SelectItem value="6">6 pessoas</SelectItem>
                        <SelectItem value="8+">8+ pessoas</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Possui anúncio ativo?</Label>
                    <Select value={formData.hasListing} onValueChange={(value) => setFormData({...formData, hasListing: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione uma opção" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sim">Sim</SelectItem>
                        <SelectItem value="nao">Não</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {formData.hasListing === "sim" && (
                    <div className="space-y-2">
                      <Label htmlFor="listingUrl">Link do anúncio</Label>
                      <Input
                        id="listingUrl"
                        type="url"
                        value={formData.listingUrl}
                        onChange={(e) => setFormData({...formData, listingUrl: e.target.value})}
                        placeholder="https://airbnb.com/..."
                      />
                    </div>
                  )}

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label>Permite pets?</Label>
                      <Select value={formData.allowsPets} onValueChange={(value) => setFormData({...formData, allowsPets: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Sim">Sim</SelectItem>
                          <SelectItem value="Não">Não</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Quando deseja iniciar?</Label>
                      <Select value={formData.startTime} onValueChange={(value) => setFormData({...formData, startTime: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o prazo" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="imediato">Imediato</SelectItem>
                          <SelectItem value="30-dias">≤ 30 dias</SelectItem>
                          <SelectItem value="90-dias">≤ 90 dias</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="observations">Observações</Label>
                    <Textarea
                      id="observations"
                      value={formData.observations}
                      onChange={(e) => setFormData({...formData, observations: e.target.value})}
                      placeholder="Informações adicionais sobre seu imóvel..."
                      rows={3}
                    />
                  </div>

                  <div className="flex items-start space-x-3">
                    <Checkbox 
                      id="consent"
                      checked={formData.consent}
                      onCheckedChange={(checked) => setFormData({...formData, consent: !!checked})}
                    />
                    <Label htmlFor="consent" className="text-sm leading-relaxed">
                      Autorizo receber comunicações da Mota & Rocha sobre gestão de aluguel por temporada. 
                      Seus dados serão tratados conforme nossa política de privacidade e Lei Geral de Proteção de Dados (LGPD).
                    </Label>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Enviando..." : "Receber Diagnóstico Gratuito"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;