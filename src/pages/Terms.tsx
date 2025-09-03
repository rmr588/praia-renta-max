import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <article className="prose prose-lg max-w-none">
            <header className="mb-12 text-center">
              <h1 className="text-4xl font-bold text-foreground mb-4">
                📄 Termos de Uso – Mota & Rocha
              </h1>
              <p className="text-muted-foreground">
                Última atualização: Janeiro de 2025
              </p>
            </header>

            <div className="space-y-8">
              <section className="bg-card rounded-lg p-6 border">
                <p className="text-foreground leading-relaxed mb-6">
                  Bem-vindo ao site motarocha.com.br. Ao acessar e utilizar nossos serviços, 
                  você concorda com os seguintes termos:
                </p>
              </section>

              <section className="bg-card rounded-lg p-6 border">
                <h2 className="text-2xl font-semibold text-foreground mb-4">1. Objeto</h2>
                <p className="text-muted-foreground">
                  O site tem como finalidade apresentar a gestão profissional de imóveis para 
                  aluguel por temporada em Praia Grande (SP) e outras localidades.
                </p>
              </section>

              <section className="bg-card rounded-lg p-6 border">
                <h2 className="text-2xl font-semibold text-foreground mb-4">2. Cadastro e uso</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• O usuário deve fornecer informações verdadeiras.</li>
                  <li>• O uso indevido do site pode gerar suspensão de acesso.</li>
                </ul>
              </section>

              <section className="bg-card rounded-lg p-6 border">
                <h2 className="text-2xl font-semibold text-foreground mb-4">3. Serviços</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Simulação de renda com base em estimativas de mercado.</li>
                  <li>• Consultoria personalizada em gestão de temporada.</li>
                  <li>• Informações e conteúdos sobre o mercado imobiliário.</li>
                </ul>
              </section>

              <section className="bg-card rounded-lg p-6 border">
                <h2 className="text-2xl font-semibold text-foreground mb-4">4. Limitações</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• As simulações têm caráter informativo e não garantem retorno financeiro.</li>
                  <li>• A Mota & Rocha não se responsabiliza por indisponibilidades técnicas temporárias.</li>
                </ul>
              </section>

              <section className="bg-card rounded-lg p-6 border">
                <h2 className="text-2xl font-semibold text-foreground mb-4">5. Propriedade intelectual</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Todo o conteúdo (textos, imagens, logotipos) é de uso exclusivo da Mota & Rocha.</li>
                  <li>• É proibida a reprodução sem autorização prévia.</li>
                </ul>
              </section>

              <section className="bg-card rounded-lg p-6 border">
                <h2 className="text-2xl font-semibold text-foreground mb-4">6. Responsabilidades do usuário</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Utilizar o site apenas para fins lícitos.</li>
                  <li>• Respeitar direitos autorais e de marca.</li>
                  <li>• Não inserir informações falsas ou fraudulentas.</li>
                </ul>
              </section>

              <section className="bg-card rounded-lg p-6 border">
                <h2 className="text-2xl font-semibold text-foreground mb-4">7. Alterações e vigência</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• A Mota & Rocha pode alterar os Termos a qualquer momento.</li>
                  <li>• O uso contínuo implica concordância com as novas condições.</li>
                </ul>
              </section>

              <section className="bg-card rounded-lg p-6 border">
                <h2 className="text-2xl font-semibold text-foreground mb-4">8. Foro</h2>
                <p className="text-muted-foreground">
                  Para dirimir conflitos, fica eleito o Foro da Comarca de Praia Grande/SP.
                </p>
              </section>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Terms;