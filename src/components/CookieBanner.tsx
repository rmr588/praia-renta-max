import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { X, Cookie } from "lucide-react";
import { Link } from "react-router-dom";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Verifica se o usuário já aceitou ou recusou cookies
    const cookieConsent = localStorage.getItem("cookie-consent");
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookie-consent", "rejected");
    setIsVisible(false);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <Card className="mx-auto max-w-4xl bg-card border shadow-lg">
        <div className="relative p-6">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-1 hover:bg-muted rounded-full transition-colors"
            aria-label="Fechar banner"
          >
            <X className="w-4 h-4" />
          </button>
          
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 pr-8">
            <div className="flex-shrink-0">
              <Cookie className="w-8 h-8 text-primary" />
            </div>
            
            <div className="flex-1 space-y-3">
              <h3 className="text-lg font-semibold text-foreground">
                🍪 Uso de Cookies
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Este site utiliza cookies para melhorar sua experiência de navegação, 
                realizar análises de tráfego e personalizar conteúdo. Alguns cookies são 
                essenciais para o funcionamento do site. Você pode escolher aceitar ou 
                recusar cookies não essenciais.
              </p>
              <p className="text-xs text-muted-foreground">
                Para mais informações, consulte nossa{" "}
                <Link 
                  to="/privacidade" 
                  className="text-primary hover:underline font-medium"
                >
                  Política de Privacidade
                </Link>.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <Button
                onClick={handleReject}
                variant="outline"
                size="sm"
                className="w-full sm:w-auto"
              >
                Rejeitar
              </Button>
              <Button
                onClick={handleAccept}
                size="sm"
                className="w-full sm:w-auto"
              >
                Aceitar Cookies
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CookieBanner;