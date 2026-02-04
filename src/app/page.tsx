'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image'; // Optional, but recommended for images
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDark);
  }, []);

  return (
    <>
      <Header isDarkMode={isDarkMode} />
      <main className={`${isDarkMode ? 'bg-black text-white' : 'bg-white text-gray-900'}`}>
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        {/* Animated background */}
        <div className={`absolute inset-0 ${isDarkMode ? 'bg-gradient-to-b from-black via-navy to-black' : 'bg-gradient-to-b from-gray-50 via-blue-50 to-gray-50'}`}></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        
        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric-blue rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h1 className={`text-7xl lg:text-9xl font-black mb-8 bg-clip-text text-transparent ${isDarkMode ? 'bg-gradient-to-r from-white via-electric-blue to-white' : 'bg-gradient-to-r from-gray-900 via-electric-blue to-gray-900'}`}>
            RPM
          </h1>
          <p className={`text-3xl lg:text-4xl font-light mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Revenue Performance Management
          </p>
          <p className={`text-xl lg:text-2xl mb-12 max-w-3xl mx-auto ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Transform your dealership with data-driven solutions that maximize revenue, 
            optimize operations, and create lasting customer relationships.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="#solutions"
              className="px-10 py-5 bg-electric-blue text-white text-lg font-semibold rounded-xl hover:bg-electric-blue/90 transition-all duration-300 hover:scale-105 shadow-2xl shadow-electric-blue/50"
            >
              Explore Solutions
            </a>
            <a
              href="#contact"
              className={`px-10 py-5 bg-transparent text-lg font-semibold rounded-xl border-2 hover:border-electric-blue hover:bg-electric-blue/10 transition-all duration-300 backdrop-blur-sm ${isDarkMode ? 'text-white border-white/30' : 'text-gray-900 border-gray-300'}`}
            >
              Get Started
            </a>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className={`relative py-16 px-6 ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <h2 className={`text-5xl lg:text-6xl font-bold mb-6 ${isDarkMode ? '' : 'bg-clip-text text-transparent bg-gradient-to-r from-electric-blue via-electric-blue to-electric-blue'}`}>Powerful Solutions</h2>
            <p className={`text-xl max-w-3xl mx-auto ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Integrated tools designed to unlock hidden revenue and drive measurable results
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* RADAR Card */}
            <div className={`group relative rounded-3xl p-8 border hover:border-electric-blue/50 transition-all duration-500 hover:scale-105 ${isDarkMode ? 'bg-gradient-to-br from-gray-900 to-black border-gray-800' : 'bg-gradient-to-br from-white to-gray-50 border-gray-200'}`}>
              <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-electric-blue/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-electric-blue/20 transition-colors duration-300">
                  <svg className="w-8 h-8 text-electric-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold mb-3">RADAR</h3>
                <p className="text-sm text-electric-blue font-semibold mb-4 uppercase tracking-wider">Retention & Advertising Drip</p>
                <p className={`mb-6 leading-relaxed ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                  Automated messaging that works 24/7 inside your CRM, nurturing leads for months after everyone else gives up.
                </p>
                <a href="/radar" className="inline-flex items-center text-electric-blue font-semibold group-hover:gap-2 transition-all duration-300">
                  Learn More 
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* PACE Card */}
            <div className={`group relative rounded-3xl p-8 border hover:border-electric-blue/50 transition-all duration-500 hover:scale-105 ${isDarkMode ? 'bg-gradient-to-br from-gray-900 to-black border-gray-800' : 'bg-gradient-to-br from-white to-gray-50 border-gray-200'}`}>
              <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-electric-blue/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-electric-blue/20 transition-colors duration-300">
                  <svg className="w-8 h-8 text-electric-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold mb-3">PACE</h3>
                <p className="text-sm text-electric-blue font-semibold mb-4 uppercase tracking-wider">Premium Acquisition & Exchange</p>
                <p className={`mb-6 leading-relaxed ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                  Turn service customers into inventory sources. Acquire high-demand vehicles before they hit the open market.
                </p>
                <div className="text-gray-500 font-semibold">Coming Soon</div>
              </div>
            </div>

            {/* MILES Card */}
            <div className={`group relative rounded-3xl p-8 border hover:border-electric-blue/50 transition-all duration-500 hover:scale-105 ${isDarkMode ? 'bg-gradient-to-br from-gray-900 to-black border-gray-800' : 'bg-gradient-to-br from-white to-gray-50 border-gray-200'}`}>
              <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-electric-blue/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-electric-blue/20 transition-colors duration-300">
                  <svg className="w-8 h-8 text-electric-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold mb-3">MILES</h3>
                <p className="text-sm text-electric-blue font-semibold mb-4 uppercase tracking-wider">Monthly Investment & Lifetime Savings</p>
                <p className={`mb-6 leading-relaxed ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                  Show customers their true monthly investment and lifetime savings. Make every deal crystal clear.
                </p>
                <a href="https://miles.dealertransparency.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-electric-blue font-semibold group-hover:gap-2 transition-all duration-300">
                  Try It Now
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Results/Stats Section */}
      <section className={`relative py-32 px-6 border-t ${isDarkMode ? "bg-black border-gray-900" : "bg-white border-gray-200"}`}>
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <h2 className={`text-5xl lg:text-6xl font-bold mb-6 ${isDarkMode ? '' : 'bg-clip-text text-transparent bg-gradient-to-r from-electric-blue via-electric-blue to-electric-blue'}`}>Real Results</h2>
            <p className={`text-xl ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>Measurable impact from actual dealer groups</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="text-6xl lg:text-7xl font-black bg-clip-text text-transparent bg-gradient-to-r from-electric-blue to-cyan-400 mb-4">
                $5M
              </div>
              <div className="text-xl font-bold mb-2">Annual Revenue</div>
              <div className="text-gray-500">PACE per year</div>
            </div>
            
            <div className="text-center group">
              <div className="text-6xl lg:text-7xl font-black bg-clip-text text-transparent bg-gradient-to-r from-electric-blue to-cyan-400 mb-4">
                70%+
              </div>
              <div className="text-xl font-bold mb-2">Contact Rate</div>
              <div className="text-gray-500">Internet Leads</div>
            </div>
            
            <div className="text-center group">
              <div className="text-6xl lg:text-7xl font-black bg-clip-text text-transparent bg-gradient-to-r from-electric-blue to-cyan-400 mb-4">
                $3M
              </div>
              <div className="text-xl font-bold mb-2">Annual Revenue</div>
              <div className="text-gray-500">RADAR per year</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className={`relative py-32 px-6 ${isDarkMode ? "bg-gradient-to-b from-gray-900 to-black" : "bg-gradient-to-b from-gray-50 to-white"}`}>
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className={`text-5xl lg:text-6xl font-bold mb-8 ${isDarkMode ? '' : 'bg-clip-text text-transparent bg-gradient-to-r from-electric-blue via-electric-blue to-electric-blue'}`}>Ready to Transform Your Dealership?</h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Get a free analysis of your current operations and discover hidden opportunities.
          </p>
          <a
            href="mailto:ward.matt@me.com"
            className="inline-block px-10 py-5 bg-electric-blue text-white text-lg font-semibold rounded-xl hover:bg-electric-blue/90 transition-all duration-300 hover:scale-105"
          >
            Request Free Analysis
          </a>
        </div>
      </section>
    </main>
    <Footer isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
    </>
  );
}