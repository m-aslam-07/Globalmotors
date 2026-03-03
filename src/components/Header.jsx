import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = ({ onMenuOpen }) => {
    const { pathname } = useLocation();

    const navLink = (to, label) => {
        const isActive = pathname === to || (to !== '/' && pathname.startsWith(to));
        return (
            <Link
                to={to}
                className="hover:text-black transition-colors uppercase tracking-wider"
                style={{
                    color: isActive ? '#111' : undefined,
                    fontWeight: isActive ? '700' : undefined,
                    borderBottom: isActive ? '2px solid #111' : '2px solid transparent',
                    paddingBottom: '2px',
                }}
            >
                {label}
            </Link>
        );
    };

    return (
        <header className="fixed top-0 w-full z-40 bg-white border-b border-gray-100 transition-all duration-300">
            {/* position:relative needed so the absolutely-centred logo is relative to this bar */}
            <nav className="relative flex items-center justify-between max-w-7xl mx-auto px-3 py-4">

                {/* Hamburger — mobile only, stays on the left */}
                <button
                    onClick={onMenuOpen}
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
                    <img
                        src="/gmlogo.jpg"
                        alt="Global Motors"
                        style={{ height: '54px', width: 'auto', objectFit: 'contain', transform: 'scale(1.05)', transformOrigin: 'center' }}
                    />
                    <span className="hidden md:inline" style={{ fontSize: '1.45rem', fontWeight: '700', letterSpacing: '0.15em', color: '#111', fontFamily: 'serif', whiteSpace: 'nowrap' }}>GLOBAL MOTORS</span>
                </a>

                {/* Desktop inline nav — hidden on mobile */}
                <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-600">
                    {navLink('/', 'Home')}
                    {navLink('/services', 'Services')}
                    {navLink('/tour', 'Tour')}
                    <a
                        href="/#enquiry"
                        className="hover:text-black transition-colors uppercase tracking-wider"
                        style={{ borderBottom: '2px solid transparent', paddingBottom: '2px' }}
                    >
                        Contact Us
                    </a>
                </div>

            </nav>
        </header>
    );
};

export default Header;

