import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Calculator, TrendingUp } from "lucide-react";

const IncomeSimulator = () => {
  const [formData, setFormData] = useState({
    propertyType: "",
    currentRate: "",
    currentOccupancy: "",
    targetOccupancy: "85",
    suggestedRate: "",
    cleaningFee: "150",
    averageStay: "3"
  });

  const [results, setResults] = useState<{
    currentRevenue: number;
    newRevenue: number;
    improvement: number;
  } | null>(null);

  const calculateRevenue = () => {
    const currentRate = parseFloat(formData.currentRate) || 0;
    const currentOccupancy = parseFloat(formData.currentOccupancy) / 100 || 0;
    const targetOccupancy = parseFloat(formData.targetOccupancy) / 100 || 0;
    const suggestedRate = parseFloat(formData.suggestedRate) || currentRate;
    const cleaningFee = parseFloat(formData.cleaningFee) || 0;
    const averageStay = parseFloat(formData.averageStay) || 3;

    const daysInMonth = 30;
    
    // Current scenario
    const currentMonthlyRevenue = currentRate * (currentOccupancy * daysInMonth);
    const currentStays = (currentOccupancy * daysInMonth) / averageStay;
    const currentNetRevenue = currentMonthlyRevenue - (currentStays * cleaningFee);

    // New scenario
    const newMonthlyRevenue = suggestedRate * (targetOccupancy * daysInMonth);
    const newStays = (targetOccupancy * daysInMonth) / averageStay;
    const newNetRevenue = newMonthlyRevenue - (newStays * cleaningFee);

    const improvement = ((newNetRevenue - currentNetRevenue) / currentNetRevenue) * 100;

    setResults({
      currentRevenue: currentNetRevenue,
      newRevenue: newNetRevenue,
      improvement
    });
  };

  const openContactForm = () => {
    // Pass simulator data to contact form
    const simulatorData = {
      propertyType: formData.propertyType,
      currentRate: formData.currentRate,
      currentOccupancy: formData.currentOccupancy,
      targetOccupancy: formData.targetOccupancy,
      suggestedRate: formData.suggestedRate,
      cleaningFee: formData.cleaningFee,
      averageStay: formData.averageStay,
      currentRevenue: results?.currentRevenue || 0,
      newRevenue: results?.newRevenue || 0,
      improvement: results?.improvement || 0
    };
    
    // Store data temporarily for the contact form
    (window as any).simulatorData = simulatorData;
    
    const element = document.getElementById('contact-form');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="simulator" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Simule seu aumento de renda
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubra quanto sua propriedade pode render com nossa gestão profissional
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="w-6 h-6 text-primary" />
                Calculadora de Potencial de Renda
              </CardTitle>
              <CardDescription>
                Preencha os dados do seu imóvel para ver a projeção de ganhos
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="propertyType">Tipo do imóvel</Label>
                  <Select value={formData.propertyType} onValueChange={(value) => setFormData({...formData, propertyType: value})}>
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
                  <Label htmlFor="currentRate">Diária média atual (R$)</Label>
                  <Input
                    id="currentRate"
                    type="number"
                    placeholder="300"
                    value={formData.currentRate}
                    onChange={(e) => setFormData({...formData, currentRate: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="currentOccupancy">Ocupação atual (%)</Label>
                  <Input
                    id="currentOccupancy"
                    type="number"
                    placeholder="60"
                    value={formData.currentOccupancy}
                    onChange={(e) => setFormData({...formData, currentOccupancy: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="suggestedRate">Diária sugerida (R$)</Label>
                  <Input
                    id="suggestedRate"
                    type="number"
                    placeholder="350"
                    value={formData.suggestedRate}
                    onChange={(e) => setFormData({...formData, suggestedRate: e.target.value})}
                  />
                </div>
              </div>

              <Button 
                onClick={calculateRevenue} 
                variant="hero" 
                size="lg"
                className="w-full"
                disabled={!formData.currentRate || !formData.currentOccupancy}
              >
                Calcular Potencial
              </Button>

              {results && (
                <div className="mt-8 p-6 gradient-subtle rounded-xl">
                  <h3 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    Resultado da Simulação
                  </h3>
                  
                  <div className="grid md:grid-cols-3 gap-4 text-center">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <p className="text-sm text-muted-foreground">Receita atual</p>
                      <p className="text-2xl font-bold text-primary">
                        R$ {results.currentRevenue.toLocaleString('pt-BR', { minimumFractionDigits: 0 })}
                      </p>
                      <p className="text-xs text-muted-foreground">por mês</p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <p className="text-sm text-muted-foreground">Receita projetada</p>
                      <p className="text-2xl font-bold text-accent">
                        R$ {results.newRevenue.toLocaleString('pt-BR', { minimumFractionDigits: 0 })}
                      </p>
                      <p className="text-xs text-muted-foreground">por mês</p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <p className="text-sm text-muted-foreground">Aumento</p>
                      <p className="text-2xl font-bold text-secondary">
                        +{results.improvement.toFixed(1)}%
                      </p>
                      <p className="text-xs text-muted-foreground">
                        +R$ {(results.newRevenue - results.currentRevenue).toLocaleString('pt-BR', { minimumFractionDigits: 0 })}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 text-center">
                    <Button variant="success" size="lg" onClick={openContactForm}>
                      Receber diagnóstico gratuito por e-mail
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default IncomeSimulator;