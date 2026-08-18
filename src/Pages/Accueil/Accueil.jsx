import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import Services from '../../components/Services/Services';
import Avis from '../../components/Avis/Avis';
import FAQ from '../../components/FAQ/FAQ';
import CTA from '../../components/CTA/CTA';
import Footer from '../../components/Footer/Footer';

function Accueil() {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <Avis />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}

export default Accueil;