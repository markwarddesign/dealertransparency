'use client'; // This is required for interactivity (useState)

import { useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-black/95 backdrop-blur-md border-b border-gray-800 sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2 md:space-x-3" onClick={closeMenu}>
          <svg className="w-8 h-8 md:w-11 md:h-11" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="iconGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: '#3B82F6', stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: '#10B981', stopOpacity: 1}} />
              </linearGradient>
            </defs>
            <path d="M20 50 L50 20 L80 50 L50 80 Z" fill="url(#iconGrad)" opacity="0.9"/>
            <circle cx="50" cy="50" r="12" fill="white"/>
            <path d="M35 50 L50 35 L65 50 L50 65 Z" fill="none" stroke="white" strokeWidth="3" strokeLinejoin="round"/>
          </svg>
          <span className="text-lg md:text-2xl uppercase" style={{letterSpacing: '-0.02em', fontFamily: 'Inter, system-ui, -apple-system, sans-serif'}}>
            <span className="font-light text-gray-300">Dealer</span><span className="font-bold text-electric-blue">Transparency</span>
          </span>
        </Link>
        <div className="hidden md:flex items-center space-x-6">
          <Link href="#solutions" className="text-gray-300 hover:text-electric-blue transition duration-300">Solutions</Link>
          <Link href="#results" className="text-gray-300 hover:text-electric-blue transition duration-300">Results</Link>
          <Link href="/radar" className="text-gray-300 hover:text-electric-blue transition duration-300">RADAR</Link>
          <Link href="#contact" className="px-5 py-2 bg-electric-blue text-white rounded-xl hover:bg-electric-blue/90 transition-all duration-300 hover:scale-105">Request a Health Report</Link>
        </div>
        <div className="md:hidden">
          <button
            id="mobile-menu-button"
            className="text-white focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </nav>
      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden px-6 pt-2 pb-4 bg-black/95 border-t border-gray-800`}
      >
        <Link href="#solutions" className="block py-2 text-gray-300 hover:text-electric-blue" onClick={closeMenu}>Solutions</Link>
        <Link href="#results" className="block py-2 text-gray-300 hover:text-electric-blue" onClick={closeMenu}>Results</Link>
        <Link href="/radar" className="block py-2 text-gray-300 hover:text-electric-blue" onClick={closeMenu}>RADAR</Link>
        <Link href="#contact" className="block mt-2 px-5 py-2 bg-electric-blue text-white text-center rounded-xl hover:bg-electric-blue/90" onClick={closeMenu}>Request a Health Report</Link>
      </div>
    </header>
  );
}