import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <article className="prose prose-lg max-w-none">
            <header className="mb-12 text-center">
              <h1 className="text-4xl font-bold text-foreground mb-4">
                📄 Política de Privacidade – Mota & Rocha
              </h1>
              <p className="text-muted-foreground">
                Última atualização: Janeiro de 2025
              </p>
            </header>

            <div className="space-y-8">
              <section className="bg-card rounded-lg p-6 border">
                <p className="text-foreground leading-relaxed mb-6">
                  A Mota & Rocha Gestão Imobiliária respeita a sua privacidade e está comprometida 
                  em proteger os dados pessoais coletados em nosso site motarocha.com.br.
                </p>
              </section>

              <section className="bg-card rounded-lg p-6 border">
                <h2 className="text-2xl font-semibold text-foreground mb-4">1. Dados coletados</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Nome, e-mail e telefone informados em formulários.</li>
                  <li>• Dados de navegação (cookies, IP, dispositivo).</li>
                  <li>• Informações fornecidas em simulações de renda e consultorias.</li>
                </ul>
              </section>

              <section className="bg-card rounded-lg p-6 border">
                <h2 className="text-2xl font-semibold text-foreground mb-4">2. Finalidade</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Responder solicitações de contato.</li>
                  <li>• Enviar propostas, relatórios e materiais de gestão imobiliária.</li>
                  <li>• Melhorar a experiência do usuário no site.</li>
                  <li>• Cumprir obrigações legais e contratuais.</li>
                </ul>
              </section>

              <section className="bg-card rounded-lg p-6 border">
                <h2 className="text-2xl font-semibold text-foreground mb-4">3. Compartilhamento</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Não vendemos dados pessoais.</li>
                  <li>• Podemos compartilhar com parceiros de tecnologia (hospedagem, CRM, Pipefy, ferramentas de marketing).</li>
                  <li>• Em casos de obrigação legal ou determinação judicial.</li>
                </ul>
              </section>

              <section className="bg-card rounded-lg p-6 border">
                <h2 className="text-2xl font-semibold text-foreground mb-4">4. Direitos do titular (LGPD)</h2>
                <ul className="space-y-2 text-muted-foreground mb-4">
                  <li>• Confirmar existência de tratamento.</li>
                  <li>• Solicitar acesso, correção ou exclusão.</li>
                  <li>• Revogar consentimento.</li>
                </ul>
                <p className="text-sm">
                  <strong>Contato:</strong> 
                  <a href="mailto:contato@motarocha.com.br" className="text-primary hover:underline ml-1">
                    contato@motarocha.com.br
                  </a>
                </p>
              </section>

              <section className="bg-card rounded-lg p-6 border">
                <h2 className="text-2xl font-semibold text-foreground mb-4">5. Armazenamento e segurança</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Dados mantidos em servidores seguros.</li>
                  <li>• Retenção pelo prazo necessário para cumprimento das finalidades.</li>
                </ul>
              </section>

              <section className="bg-card rounded-lg p-6 border">
                <h2 className="text-2xl font-semibold text-foreground mb-4">6. Cookies</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Utilizamos cookies para análise de navegação e marketing.</li>
                  <li>• O usuário pode desativá-los no navegador, mas isso pode limitar funcionalidades.</li>
                </ul>
              </section>

              <section className="bg-card rounded-lg p-6 border">
                <h2 className="text-2xl font-semibold text-foreground mb-4">7. Alterações</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• A política pode ser atualizada.</li>
                  <li>• Alterações relevantes serão comunicadas no site.</li>
                </ul>
              </section>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Privacy;