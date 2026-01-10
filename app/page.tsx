import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductShowcase from "./components/ProductShowcase";
import Benefits from "./components/Benefits";
import Testimonial from "./components/Testimonial";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="pt-20 md:pt-24 bg-gradient-to-b from-gray-950 via-black to-gray-950 text-white min-h-screen">
        <Hero />
        <ProductShowcase />
        <Benefits />
        <Testimonial />
        <CTA />
      </main>

      <Footer />
    </>
  );
}
