import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Preloader from './components/Preloader';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import ServicesRow from './components/ServicesRow';
import EnquiryForm from './components/EnquiryForm';
import TourPage from './components/TourPage';
import ServicesDetailPage from './components/ServicesDetailPage';
import Header from './components/Header';
import Footer from './components/Footer';

function HomePage() {
  return (
    <>
      <main className="flex-grow">
        <Hero />
        <AboutUs />
        <ServicesRow />
        <EnquiryForm />
      </main>
      <Footer />
    </>
  );
}

function App() {
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [sidebarOpen]);

  return (
    <Router>
      <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
        <AnimatePresence mode='wait'>
          {loading && <Preloader key="preloader" />}
        </AnimatePresence>

        {!loading && (
          <div className="flex flex-col min-h-screen">
            {/* Sidebar Overlay */}
            <div
              className={`fixed inset-0 z-50 transition-opacity duration-300 ${sidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
              style={{ background: 'rgba(0,0,0,0.45)' }}
              onClick={() => setSidebarOpen(false)}
              aria-hidden="true"
            />

            {/* Sidebar Panel */}
            <aside
              className="fixed top-0 left-0 h-full z-50 flex flex-col bg-white shadow-2xl transition-transform duration-300 ease-in-out"
              style={{
                width: '280px',
                transform: sidebarOpen ? 'translateX(0)' : 'translateX(-100%)',
              }}
              aria-label="Sidebar navigation"
            >
              {/* Sidebar Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
                <img
                  src="/gmlogo.jpeg"
                  alt="Global Motors"
                  style={{ height: '40px', width: 'auto', objectFit: 'contain' }}
                />
                <button
                  onClick={() => setSidebarOpen(false)}
                  aria-label="Close menu"
                  className="text-gray-500 hover:text-black transition-colors p-1 rounded-md"
                >
                  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Sidebar Nav Links */}
              <nav className="flex flex-col gap-1 px-4 pt-6">
                <Link
                  to="/"
                  onClick={() => setSidebarOpen(false)}
                  className="px-4 py-3 rounded-lg text-sm font-medium uppercase tracking-widest text-gray-700 hover:bg-gray-50 hover:text-black transition-colors"
                >
                  Home
                </Link>
                <Link
                  to="/services"
                  onClick={() => setSidebarOpen(false)}
                  className="px-4 py-3 rounded-lg text-sm font-medium uppercase tracking-widest text-gray-700 hover:bg-gray-50 hover:text-black transition-colors"
                >
                  Services
                </Link>
                <Link
                  to="/tour"
                  onClick={() => setSidebarOpen(false)}
                  className="px-4 py-3 rounded-lg text-sm font-medium uppercase tracking-widest text-gray-700 hover:bg-gray-50 hover:text-black transition-colors"
                >
                  Tour
                </Link>
                <a
                  href="/#contact"
                  onClick={() => setSidebarOpen(false)}
                  className="px-4 py-3 rounded-lg text-sm font-medium uppercase tracking-widest text-gray-700 hover:bg-gray-50 hover:text-black transition-colors"
                >
                  Contact Us
                </a>
              </nav>
            </aside>

            <Routes>
              {/* Tour page (formerly "Services" video page) */}
              <Route path="/tour" element={<TourPage />} />
              {/* New Services detail page */}
              <Route path="/services" element={
                <>
                  <Header onMenuOpen={() => setSidebarOpen(true)} />
                  <ServicesDetailPage />
                </>
              } />
              {/* Home and everything else */}
              <Route path="*" element={
                <>
                  <Header onMenuOpen={() => setSidebarOpen(true)} />
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
