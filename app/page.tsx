import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import QuoteForm from "@/components/QuoteForm";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="contenu">
        <Hero />
        <Services />
        <About />
        <Portfolio />
        <QuoteForm />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
