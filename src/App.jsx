import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Preloader from './components/Preloader';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import ServicesRow from './components/ServicesRow';
import Statistics from './components/Statistics';
import EnquiryForm from './components/EnquiryForm';
import ServicesPage from './components/ServicesPage';
import Footer from './components/Footer';

function HomePage() {
  return (
    <>
      <main className="flex-grow">
        <Hero />
        <AboutUs />
        <Statistics />
        <ServicesRow />
        <EnquiryForm />
      </main>
      <Footer />
    </>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
        <AnimatePresence mode='wait'>
          {loading && <Preloader key="preloader" />}
        </AnimatePresence>

        {!loading && (
          <div className="flex flex-col min-h-screen">
            <Routes>
              <Route path="/services" element={<ServicesPage />} />
              <Route path="*" element={
                <>
                  <header className="fixed top-0 w-full p-6 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
                    <nav className="flex justify-between items-center max-w-7xl mx-auto">
                      <h1 className="text-2xl font-bold text-black tracking-widest font-serif">GLOBAL MOTORS</h1>
                      <div className="flex-1 flex justify-end space-x-8 text-sm font-medium text-gray-600 hidden md:flex">
                        <a href="#" className="hover:text-black transition-colors uppercase tracking-wider">Home</a>
                        <Link to="/services" className="hover:text-black transition-colors uppercase tracking-wider">Services</Link>
                        <a href="#enquiry" className="hover:text-black transition-colors uppercase tracking-wider">Contact Us</a>
                      </div>
                    </nav>
                  </header>
                  <HomePage />
                </>
              } />
            </Routes>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
