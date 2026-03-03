import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Preloader from './components/Preloader';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import ServicesRow from './components/ServicesRow';
import Statistics from './components/Statistics';
import EnquiryForm from './components/EnquiryForm';
import TourPage from './components/TourPage';
import ServicesDetailPage from './components/ServicesDetailPage';
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
                  src="/gmlogo.jpg"
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
                  href="#enquiry"
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
              <Route path="/services" element={<ServicesDetailPage />} />
              {/* Home and everything else */}
              <Route path="*" element={
                <>
                  <header className="fixed top-0 w-full z-40 bg-white border-b border-gray-100 transition-all duration-300">
                    {/* position:relative needed so the absolutely-centred logo is relative to this bar */}
                    <nav className="relative flex items-center justify-between max-w-7xl mx-auto px-3 py-4">

                      {/* Hamburger — mobile only, stays on the left */}
                      <button
                        onClick={() => setSidebarOpen(true)}
                        aria-label="Open menu"
                        className="md:hidden text-gray-700 hover:text-black transition-colors p-1 rounded-md flex-shrink-0 z-10"
                      >
                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                      </button>

                      {/* Logo — absolutely centred on mobile, normal flow on desktop */}
                      <a
                        href="/"
                        className="
                          flex items-center flex-shrink-0
                          md:static md:transform-none
                          absolute left-1/2 -translate-x-1/2
                          md:relative md:left-auto md:translate-x-0
                        "
                        style={{ gap: '10px', textDecoration: 'none' }}
                      >
                        {/* DEPLOYMENT NOTE: Vite serves /public files at root → src="/gmlogo.jpg" is correct.
                             On Render (Linux), paths are CASE-SENSITIVE. Verify the exact filename
                             on disk matches this path character-for-character (e.g. .jpg not .JPG). */}
                        <img
                          src="/gmlogo.jpg"
                          alt="Global Motors"
                          style={{ height: '54px', width: 'auto', objectFit: 'contain', transform: 'scale(1.05)', transformOrigin: 'center' }}
                        />
                        <span className="hidden md:inline" style={{ fontSize: '1.45rem', fontWeight: '700', letterSpacing: '0.15em', color: '#111', fontFamily: 'serif', whiteSpace: 'nowrap' }}>GLOBAL MOTORS</span>
                      </a>

                      {/* Desktop inline nav — hidden on mobile */}
                      <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-600">
                        <Link to="/" className="hover:text-black transition-colors uppercase tracking-wider">Home</Link>
                        <Link to="/services" className="hover:text-black transition-colors uppercase tracking-wider">Services</Link>
                        <Link to="/tour" className="hover:text-black transition-colors uppercase tracking-wider">Tour</Link>
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
