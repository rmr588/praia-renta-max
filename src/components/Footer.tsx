import { MapPin, Phone, Mail, Instagram, Facebook, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Mota & Rocha</h3>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Gestão profissional de aluguel por temporada em Praia Grande. 
              Maximizamos sua renda com transparência e qualidade de serviço.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-secondary" />
                <span className="text-sm">Praia Grande - SP</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary" />
                <span className="text-sm">(13) 99999-9999</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary" />
                <span className="text-sm">contato@motarocha.com.br</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Serviços</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li>Gestão de Temporada</li>
              <li>Precificação Dinâmica</li>
              <li>Limpeza Profissional</li>
              <li>Check-in Digital</li>
              <li>Relatórios Mensais</li>
              <li>Atendimento 24/7</li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Úteis</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li>
                <a href="#simulator" className="hover:text-secondary transition-colors">
                  Simular Renda
                </a>
              </li>
              <li>
                <a href="#contact-form" className="hover:text-secondary transition-colors">
                  Diagnóstico Gratuito
                </a>
              </li>
              <li>
                <a href="/privacidade" className="hover:text-secondary transition-colors">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="/termos" className="hover:text-secondary transition-colors">
                  Termos de Uso
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex justify-center gap-6 mt-12 pt-8 border-t border-primary-foreground/20">
          <a 
            href="https://instagram.com/motarocha" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 bg-primary-foreground/10 rounded-full hover:bg-secondary hover:text-secondary-foreground transition-colors"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a 
            href="https://facebook.com/motarocha" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 bg-primary-foreground/10 rounded-full hover:bg-secondary hover:text-secondary-foreground transition-colors"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a 
            href="https://linkedin.com/company/motarocha" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 bg-primary-foreground/10 rounded-full hover:bg-secondary hover:text-secondary-foreground transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>

        {/* Legal */}
        <div className="text-center mt-8 pt-8 border-t border-primary-foreground/20">
          <p className="text-xs text-primary-foreground/60 leading-relaxed max-w-4xl mx-auto">
            <strong>Importante:</strong> Valores podem variar conforme sazonalidade, localização, tipo de imóvel e regras de condomínio. 
            Dados estimados e não constituem promessa de rentabilidade. Esta é uma página informativa para validação de demanda.
            <br />
            © 2025 Mota & Rocha. Todos os direitos reservados. CNPJ: 00.000.000/0001-00
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;