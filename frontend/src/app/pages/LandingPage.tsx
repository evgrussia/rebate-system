import { Header } from '../components/landing/Header';
import { HeroSection } from '../components/landing/HeroSection';
import { HowItWorks } from '../components/landing/HowItWorks';
import { ExchangesSection } from '../components/landing/ExchangesSection';
import { Calculator } from '../components/landing/Calculator';
import { Benefits } from '../components/landing/Benefits';
import { FutureFeatures } from '../components/landing/FutureFeatures';
import { Testimonials } from '../components/landing/Testimonials';
import { RebateExplainer } from '../components/landing/RebateExplainer';
import { FAQ } from '../components/landing/FAQ';
import { FinalCTA } from '../components/landing/FinalCTA';
import { Footer } from '../components/landing/Footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <HowItWorks />
        <ExchangesSection />
        <Calculator />
        <Benefits />
        <FutureFeatures />
        <Testimonials />
        <RebateExplainer />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
