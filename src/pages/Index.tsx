import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import IncomeSimulator from "@/components/IncomeSimulator";
import SocialProof from "@/components/SocialProof";
import Metrics from "@/components/Metrics";
import Trends from "@/components/Trends";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <IncomeSimulator />
        <SocialProof />
        <Metrics />
        <Trends />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
