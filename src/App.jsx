import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Products from './components/Products';
import NewArrivals from './components/NewArrivals';
import Offers from './components/Offers';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';

function App() {
  return (
    <AnimatePresence>
      <div className="relative min-h-screen">
        <ParticleBackground />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <Products />
          <NewArrivals />
          <Offers />
          <Portfolio />
          <Testimonials />
          <BookingForm />
        </main>
        <Footer />
      </div>
    </AnimatePresence>
  );
}

export default App;
