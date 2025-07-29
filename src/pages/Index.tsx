import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Values from '@/components/Values'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import Team from '@/components/Team'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main id="main-content" role="main">
        <Hero />
        <Values />
        <Services />
        <Testimonials />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
