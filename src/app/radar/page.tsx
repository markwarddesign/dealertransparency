'use client';

import { useState } from 'react';

export default function RadarPage() {
  const currentYear = new Date().getFullYear();
  const [openSection, setOpenSection] = useState<string | null>('why');

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-black">
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" className="h-10 w-10">
              <defs>
                <filter id="headerGlow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
                <radialGradient id="headerCenterGlow">
                  <stop offset="0%" stopColor="#ed2024" stopOpacity="1" />
                  <stop offset="100%" stopColor="#ed2024" stopOpacity="0" />
                </radialGradient>
              </defs>
              
              {/* Background circle for contrast */}
              <circle cx="60" cy="60" r="55" fill="#1a0000" opacity="0.4"/>
              
              {/* Concentric circles - thicker and brighter */}
              <circle cx="60" cy="60" r="50" fill="none" stroke="#ed2024" strokeWidth="2.5" opacity="0.6" filter="url(#headerGlow)"/>
              <circle cx="60" cy="60" r="35" fill="none" stroke="#ed2024" strokeWidth="2.5" opacity="0.7" filter="url(#headerGlow)"/>
              <circle cx="60" cy="60" r="20" fill="none" stroke="#ed2024" strokeWidth="2.5" opacity="0.8" filter="url(#headerGlow)"/>
              
              {/* Center point - brighter */}
              <circle cx="60" cy="60" r="10" fill="url(#headerCenterGlow)"/>
              <circle cx="60" cy="60" r="4" fill="#ed2024" opacity="1"/>
              
              {/* Grid lines - thicker */}
              <line x1="10" y1="60" x2="110" y2="60" stroke="#ed2024" strokeWidth="1.5" opacity="0.5" filter="url(#headerGlow)"/>
              <line x1="60" y1="10" x2="60" y2="110" stroke="#ed2024" strokeWidth="1.5" opacity="0.5" filter="url(#headerGlow)"/>
              
              {/* Sweep line - thicker and brighter */}
              <line x1="60" y1="60" x2="60" y2="15" stroke="#ed2024" strokeWidth="3" strokeLinecap="round" filter="url(#headerGlow)" opacity="1"/>
              
              {/* Tracking dots - larger and brighter */}
              <circle cx="85" cy="35" r="4" fill="#10B981" filter="url(#headerGlow)" opacity="1"/>
              <circle cx="40" cy="30" r="3.5" fill="#F59E0B" filter="url(#headerGlow)" opacity="1"/>
              <circle cx="35" cy="80" r="4" fill="#ed2024" filter="url(#headerGlow)" opacity="1"/>
            </svg>
            <span className="text-2xl font-black tracking-wider uppercase ml-2" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', letterSpacing: '0.15em', color: '#ed2024' }}>RADAR</span>
          </div>
          <a
            href="mailto:ward.matt@me.com?subject=RADAR%20-%20quick%20conversation"
            className="px-6 py-2 text-sm rounded-lg font-medium transition-colors" style={{ backgroundColor: '#ed2024', color: 'white' }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#c91b1f'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ed2024'}
          >
            Contact
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative px-6 pt-32 pb-20 md:pt-48 md:pb-32 min-h-[75vh] flex items-center overflow-hidden">
        {/* Animated Radar Background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg" className="w-full h-full max-w-6xl">
            <defs>
              {/* Radar sweep gradient with glow */}
              <linearGradient id="radarSweep" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ed2024" stopOpacity="0" />
                <stop offset="40%" stopColor="#ed2024" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#ed2024" stopOpacity="0.5" />
              </linearGradient>
              
              {/* Glow filter */}
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
              
              {/* Radial gradient for center */}
              <radialGradient id="centerGlow">
                <stop offset="0%" stopColor="#ed2024" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#ed2024" stopOpacity="0" />
              </radialGradient>
            </defs>
            
            {/* Grid lines - horizontal */}
            <line x1="0" y1="150" x2="600" y2="150" stroke="#ed2024" strokeWidth="0.5" opacity="0.1"/>
            <line x1="0" y1="300" x2="600" y2="300" stroke="#ed2024" strokeWidth="0.5" opacity="0.15"/>
            <line x1="0" y1="450" x2="600" y2="450" stroke="#ed2024" strokeWidth="0.5" opacity="0.1"/>
            
            {/* Grid lines - vertical */}
            <line x1="150" y1="0" x2="150" y2="600" stroke="#ed2024" strokeWidth="0.5" opacity="0.1"/>
            <line x1="300" y1="0" x2="300" y2="600" stroke="#ed2024" strokeWidth="0.5" opacity="0.15"/>
            <line x1="450" y1="0" x2="450" y2="600" stroke="#ed2024" strokeWidth="0.5" opacity="0.1"/>
            
            {/* Radar circles with glow */}
            <circle cx="300" cy="300" r="250" fill="none" stroke="#ed2024" strokeWidth="1.5" opacity="0.2" filter="url(#glow)"/>
            <circle cx="300" cy="300" r="180" fill="none" stroke="#ed2024" strokeWidth="1.5" opacity="0.25" filter="url(#glow)"/>
            <circle cx="300" cy="300" r="110" fill="none" stroke="#ed2024" strokeWidth="1.5" opacity="0.3" filter="url(#glow)"/>
            <circle cx="300" cy="300" r="40" fill="none" stroke="#ed2024" strokeWidth="2" opacity="0.4" filter="url(#glow)"/>
            
            {/* Center glow pulse */}
            <circle cx="300" cy="300" r="20" fill="url(#centerGlow)" className="animate-pulse" style={{ animationDuration: '2s' }}/>
            <circle cx="300" cy="300" r="5" fill="#ed2024" opacity="0.8"/>
            
            {/* Radar sweep - animated */}
            <g className="animate-[spin_6s_linear_infinite]" style={{ transformOrigin: '300px 300px' }}>
              {/* Main sweep beam */}
              <path 
                d="M 300 300 L 300 50 A 250 250 0 0 1 477 170 Z" 
                fill="url(#radarSweep)" 
                opacity="0.4"
              />
              {/* Sweep line with glow */}
              <line x1="300" y1="300" x2="300" y2="50" stroke="#ed2024" strokeWidth="2" strokeLinecap="round" filter="url(#glow)" opacity="0.8"/>
            </g>
            
            {/* Animated dots with trails */}
            <g className="animate-pulse" style={{ animationDuration: '3s' }}>
              <circle cx="420" cy="180" r="4" fill="#10B981" opacity="0.3"/>
              <circle cx="420" cy="180" r="6" fill="#10B981" filter="url(#glow)"/>
            </g>
            
            <g className="animate-pulse" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }}>
              <circle cx="180" cy="160" r="3" fill="#F59E0B" opacity="0.3"/>
              <circle cx="180" cy="160" r="5" fill="#F59E0B" filter="url(#glow)"/>
            </g>
            
            <g className="animate-pulse" style={{ animationDuration: '3.5s', animationDelay: '1s' }}>
              <circle cx="150" cy="400" r="5" fill="#ed2024" opacity="0.3"/>
              <circle cx="150" cy="400" r="7" fill="#ed2024" filter="url(#glow)"/>
            </g>
            
            <g className="animate-pulse" style={{ animationDuration: '2.8s', animationDelay: '1.5s' }}>
              <circle cx="450" cy="420" r="3" fill="#8B5CF6" opacity="0.3"/>
              <circle cx="450" cy="420" r="5" fill="#8B5CF6" filter="url(#glow)"/>
            </g>
            
            <g className="animate-pulse" style={{ animationDuration: '3.2s', animationDelay: '0.8s' }}>
              <circle cx="330" cy="480" r="4" fill="#06B6D4" opacity="0.3"/>
              <circle cx="330" cy="480" r="6" fill="#06B6D4" filter="url(#glow)"/>
            </g>
            
            {/* Scanlines effect */}
            <g opacity="0.05">
              {Array.from({ length: 30 }).map((_, i) => (
                <line key={i} x1="0" y1={i * 20} x2="600" y2={i * 20} stroke="#ed2024" strokeWidth="1"/>
              ))}
            </g>
          </svg>
        </div>
        
        <div className="max-w-5xl mx-auto w-full relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold leading-relaxed">
              A behavioral engagement layer inside the CRM.
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              It quietly works the mid and long-term opportunities that salespeople and AI tend to miss — without adding noise, dashboards, or complexity.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href="mailto:ward.matt@me.com?subject=RADAR%20-%20quick%20conversation"
                className="px-8 py-3 rounded-lg font-medium transition-colors shadow-md text-lg"
                style={{ backgroundColor: '#ed2024', color: 'white' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#c91b1f'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ed2024'}
              >
                Let's talk
              </a>
              <a
                href="#what-it-does"
                className="px-8 py-3 text-gray-300 font-medium flex items-center gap-2 transition-colors text-lg hover:text-white"
              >
                What does it do? <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ACCORDION SECTIONS */}
      <section className="px-6 py-16 bg-black">
        <div className="max-w-4xl mx-auto space-y-4">
          
          {/* WHY IT EXISTS */}
          <div className="border-b border-gray-800">
            <button
              onClick={() => toggleSection('why')}
              className="w-full flex items-center justify-between py-6 text-left group"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white group-hover:text-red-500 transition-colors">
                Why It Exists
              </h2>
              <span className="text-3xl text-gray-400 group-hover:text-red-500 transition-colors">
                {openSection === 'why' ? '−' : '+'}
              </span>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${openSection === 'why' ? 'max-h-96 pb-6' : 'max-h-0'}`}>
              <div className="space-y-4 text-lg text-gray-400 leading-relaxed">
                <p>Most systems focus on fast: first hour, first day, first week.</p>
                <p>But buyers don't follow a script.</p>
                <p className="font-medium text-white text-xl pt-2">
                  When timing isn't right today, RADAR stays present — silently — until it is.
                </p>
              </div>
            </div>
          </div>

          {/* WHAT IT DOES */}
          <div className="border-b border-gray-800">
            <button
              onClick={() => toggleSection('what')}
              className="w-full flex items-center justify-between py-6 text-left group"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white group-hover:text-red-500 transition-colors">
                What It Does
              </h2>
              <span className="text-3xl text-gray-400 group-hover:text-red-500 transition-colors">
                {openSection === 'what' ? '−' : '+'}
              </span>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${openSection === 'what' ? 'max-h-96 pb-6' : 'max-h-0'}`}>
              <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
                <p>
                  RADAR grows over time and picks up thousands of long-term opportunities that normally fall through the cracks when processes end, leads get marked lost, or humans/AI stop following up.
                </p>
                <p className="font-medium text-white text-xl">
                  It lives where timing changes — and creates conversations months after everyone else gives up.
                </p>
              </div>
            </div>
          </div>

          {/* HOW IT WORKS */}
          <div className="border-b border-gray-800">
            <button
              onClick={() => toggleSection('how')}
              className="w-full flex items-center justify-between py-6 text-left group"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white group-hover:text-red-500 transition-colors">
                How It Works
              </h2>
              <span className="text-3xl text-gray-400 group-hover:text-red-500 transition-colors">
                {openSection === 'how' ? '−' : '+'}
              </span>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${openSection === 'how' ? 'max-h-[600px] pb-6' : 'max-h-0'}`}>
              <ul className="space-y-3 text-lg text-gray-300 mb-8">
                <li className="flex items-start">
                  <span className="mr-3" style={{ color: '#ed2024' }}>•</span>
                  <span>Maintains a persistent engagement state</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3" style={{ color: '#ed2024' }}>•</span>
                  <span>Uses timing and silence as signals</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3" style={{ color: '#ed2024' }}>•</span>
                  <span>Steps back when humans engage</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3" style={{ color: '#ed2024' }}>•</span>
                  <span>Steps back in when engagement drops</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3" style={{ color: '#ed2024' }}>•</span>
                  <span>Never restarts; never expires</span>
                </li>
              </ul>
              <div>
                <p className="text-xl text-white font-medium mb-2">
                  RADAR doesn't replace people or AI.
                </p>
                <p className="text-lg text-gray-400">
                  It supports both, for months and years.
                </p>
              </div>
            </div>
          </div>

          {/* SUPPORTING FRAMEWORK */}
          <div className="border-b border-gray-800">
            <button
              onClick={() => toggleSection('framework')}
              className="w-full flex items-center justify-between py-6 text-left group"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white group-hover:text-red-500 transition-colors">
                RADAR's Supporting Framework
              </h2>
              <span className="text-3xl text-gray-400 group-hover:text-red-500 transition-colors">
                {openSection === 'framework' ? '−' : '+'}
              </span>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${openSection === 'framework' ? 'max-h-96 pb-6' : 'max-h-0'}`}>
              <div className="space-y-4 text-lg text-gray-300">
                <p><span className="text-white font-semibold">ACE</span> opens the conversation.</p>
                <p><span className="text-white font-semibold">ALIGN</span> matches timing and intent.</p>
                <p><span className="text-white font-semibold">ERL</span> keeps communication consistent.</p>
                <p className="text-white font-semibold pt-2">RADAR sustains the long-term engagement.</p>
              </div>
            </div>
          </div>

          {/* REAL-WORLD IMPACT */}
          <div className="border-b border-gray-800">
            <button
              onClick={() => toggleSection('impact')}
              className="w-full flex items-center justify-between py-6 text-left group"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white group-hover:text-red-500 transition-colors">
                Real-World Impact
              </h2>
              <span className="text-3xl text-gray-400 group-hover:text-red-500 transition-colors">
                {openSection === 'impact' ? '−' : '+'}
              </span>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${openSection === 'impact' ? 'max-h-96 pb-6' : 'max-h-0'}`}>
              <p className="text-lg text-gray-300 leading-relaxed">
                In live dealership CRMs, RADAR consistently drives new conversations from aged and "lost" opportunities — with low opt-out rates and high re-engagement when implemented correctly.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 text-white" style={{ background: 'linear-gradient(135deg, #1a0000 0%, #000000 50%, #1a0000 100%)' }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            If this resonates…
          </h2>
          
          <p className="text-lg leading-relaxed mb-8 text-gray-300">
            Let's talk timing, behavior, and missed opportunity.<br />
            No pitch. Just a conversation.
          </p>
          
          <div className="space-y-4 mb-8">
            <p className="text-2xl font-semibold">Matt Ward</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-lg">
              <a href="tel:425-985-8227" className="hover:text-white transition-colors" style={{ color: '#ed2024' }}>
                📞 425-985-8227
              </a>
              <a href="mailto:ward.matt@me.com" className="hover:text-white transition-colors" style={{ color: '#ed2024' }}>
                ✉️ ward.matt@me.com
              </a>
            </div>
          </div>
          
          <a
            href="mailto:ward.matt@me.com?subject=RADAR%20-%20quick%20conversation"
            className="inline-block px-8 py-3 rounded-lg font-medium transition-colors shadow-lg"
            style={{ backgroundColor: '#ed2024', color: 'white' }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#c91b1f'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ed2024'}
          >
            Email Matt
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 py-8 bg-black text-gray-600 text-center border-t border-gray-900">
        <p className="text-sm">
          © {currentYear} Matt Ward — Proprietary Engagement Framework
        </p>
      </footer>
    </div>
  );
}
