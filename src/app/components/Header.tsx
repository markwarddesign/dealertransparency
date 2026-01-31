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
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2" onClick={closeMenu}>
          <Logo className="h-8 w-auto text-navy" />
          <span className="text-xl font-bold text-navy">Dealer Transparency</span>
        </Link>
        <div className="hidden md:flex items-center space-x-6">
          <Link href="#portfolio" className="text-slate-gray hover:text-electric-blue transition duration-300">Solutions</Link>
          <Link href="#results" className="text-slate-gray hover:text-electric-blue transition duration-300">Results</Link>
          <Link href="/radar" className="text-slate-gray hover:text-electric-blue transition duration-300">RADAR</Link>
          <Link href="#contact" className="px-5 py-2 bg-electric-blue text-white rounded-md hover:bg-navy transition duration-300">Request a Health Report</Link>
        </div>
        <div className="md:hidden">
          <button
            id="mobile-menu-button"
            className="text-navy focus:outline-none"
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
        className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden px-6 pt-2 pb-4`}
      >
        <Link href="#portfolio" className="block py-2 text-slate-gray hover:text-electric-blue" onClick={closeMenu}>Solutions</Link>
        <Link href="#results" className="block py-2 text-slate-gray hover:text-electric-blue" onClick={closeMenu}>Results</Link>
        <Link href="/radar" className="block py-2 text-slate-gray hover:text-electric-blue" onClick={closeMenu}>RADAR</Link>
        <Link href="#contact" className="block mt-2 px-5 py-2 bg-electric-blue text-white text-center rounded-md hover:bg-navy" onClick={closeMenu}>Request a Health Report</Link>
      </div>
    </header>
  );
}