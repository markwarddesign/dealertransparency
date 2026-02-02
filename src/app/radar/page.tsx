'use client';

import { useState, useEffect } from 'react';

export default function RadarPage() {
  const currentYear = new Date().getFullYear();
  const [activeTab, setActiveTab] = useState('problem');
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDark);
  }, []);

  const tabs = [
    { id: 'problem', label: 'The Problem' },
    { id: 'why', label: 'Why It Fails' },
    { id: 'radar', label: 'Where RADAR Fits' },
    { id: 'how', label: 'How It Works' },
    { id: 'outcome', label: 'The Outcome' },
  ];

  const currentIndex = tabs.findIndex(tab => tab.id === activeTab);
  
  const goToNext = () => {
    const nextIndex = (currentIndex + 1) % tabs.length;
    setActiveTab(tabs[nextIndex].id);
  };
  
  const goToPrev = () => {
    const prevIndex = (currentIndex - 1 + tabs.length) % tabs.length;
    setActiveTab(tabs[prevIndex].id);
  };

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <div className={`min-h-screen transition-colors ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      {/* HEADER */}
      <header className={`fixed top-0 left-0 right-0 z-50 border-b transition-colors ${
        isDarkMode ? 'border-gray-700' : 'bg-white border-gray-200'
      }`} style={{ backgroundColor: isDarkMode ? '#001a33' : 'white' }}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img 
              src={isDarkMode ? "/Radar_Logo_Reverse.svg" : "/Radar_Logo_Color.svg"} 
              alt="RADAR" 
              className="h-10" 
            />
          </div>
          <a
            href="mailto:ward.matt@me.com?subject=RADAR%20-%20quick%20conversation"
            className="px-6 py-2.5 text-sm font-semibold rounded-full transition-all"
            style={{ backgroundColor: '#10B981', color: 'white' }}
          >
            Get started
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative px-6 pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden" style={{ backgroundColor: '#123b60' }}>
        {/* Large circular arcs with radar dots */}
        <div className="absolute inset-0 pointer-events-none opacity-15">
          <svg className="w-full h-full" viewBox="0 0 1200 800">
            <defs>
              <radialGradient id="radarDotHero" cx="50%" cy="50%">
                <stop offset="0%" stopColor="#10B981" stopOpacity="1" />
                <stop offset="50%" stopColor="#10B981" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
              </radialGradient>
            </defs>
            {/* Large concentric circular arcs - centered below to show top halves */}
            <circle cx="600" cy="850" r="700" fill="none" stroke="#10B981" strokeWidth="3" opacity="0.5" />
            <circle cx="600" cy="850" r="550" fill="none" stroke="#10B981" strokeWidth="2.5" opacity="0.4" />
            <circle cx="600" cy="850" r="400" fill="none" stroke="#10B981" strokeWidth="2" opacity="0.35" />
            <circle cx="600" cy="850" r="250" fill="none" stroke="#10B981" strokeWidth="1.5" opacity="0.3" />
            {/* Radar dots - large pulsing */}
            <circle cx="600" cy="700" r="20" fill="url(#radarDotHero)" />
            <circle cx="400" cy="600" r="16" fill="url(#radarDotHero)" opacity="0.8" />
            <circle cx="800" cy="600" r="16" fill="url(#radarDotHero)" opacity="0.8" />
            <circle cx="300" cy="450" r="14" fill="url(#radarDotHero)" opacity="0.7" />
            <circle cx="900" cy="450" r="14" fill="url(#radarDotHero)" opacity="0.7" />
            <circle cx="500" cy="500" r="12" fill="url(#radarDotHero)" opacity="0.6" />
            <circle cx="700" cy="500" r="12" fill="url(#radarDotHero)" opacity="0.6" />
            {/* Smaller tracking dots */}
            <circle cx="350" cy="350" r="6" fill="#10B981" opacity="0.9" />
            <circle cx="600" cy="550" r="6" fill="#10B981" opacity="0.9" />
            <circle cx="850" cy="350" r="6" fill="#10B981" opacity="0.9" />
            <circle cx="550" cy="620" r="5" fill="#10B981" opacity="0.7" />
            <circle cx="650" cy="620" r="5" fill="#10B981" opacity="0.7" />
          </svg>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-white">
            Behavioral engagement layer inside your CRM
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-6 max-w-3xl mx-auto leading-relaxed">
            Quietly works mid and long-term customers who go silent—recovering abandoned revenue.
          </p>
          
          <p className="text-lg md:text-xl text-blue-200 mb-12 max-w-2xl mx-auto">
            Captures the growing pool of customers who fall into cold or lost status every month—turning long-term silence into long-term opportunity.
          </p>
          
          <a
            href="mailto:ward.matt@me.com?subject=RADAR%20-%20Let's%20Connect"
            className="inline-block px-10 py-4 text-lg font-semibold rounded-full transition-all shadow-lg hover:shadow-xl"
            style={{ backgroundColor: '#10B981', color: 'white' }}
          >
            Get started
          </a>
        </div>
      </section>
      
      {/* CONTENT SECTIONS WITH VERTICAL TABS */}
      <section className={`relative px-6 py-32 overflow-hidden transition-colors ${
        isDarkMode ? '' : 'bg-gray-50'
      }`} style={{ backgroundColor: isDarkMode ? '#001a33' : undefined }}>
        <div className="max-w-6xl mx-auto">
          
          {/* Mobile Accordion View */}
          <div className="lg:hidden space-y-3">
            {tabs.map((tab) => (
              <div key={tab.id} className="bg-white rounded-2xl shadow-sm overflow-hidden transition-colors">
                <button
                  onClick={() => toggleAccordion(tab.id)}
                  className="w-full flex items-center justify-between p-6 text-left transition-colors"
                  style={{ 
                    backgroundColor: openAccordion === tab.id ? '#10B981' : 'white'
                  }}
                >
                  <span
                    className="text-xl font-semibold"
                    style={{ color: openAccordion === tab.id ? 'white' : '#123b60' }}
                  >
                    {tab.label}
                  </span>
                  <span
                    className="text-2xl font-light"
                    style={{ color: openAccordion === tab.id ? 'white' : '#9CA3AF' }}
                  >
                    {openAccordion === tab.id ? '−' : '+'}
                  </span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openAccordion === tab.id ? 'max-h-[2000px]' : 'max-h-0'}`}>
                  <div className="p-6 border-l-4" style={{ borderLeftColor: '#10B981' }}>
                    {tab.id === 'problem' && (
                      <div className="space-y-4 text-base text-gray-700 leading-relaxed">
                        <p>Most customers don't go silent because they already purchased — they go silent because follow-up ends too early. Without a process change, most leads end up in cold or lost status within just 14–30 days. The CRM closes them long before many of these customers are actually out of the market.</p>
                        <ul className="space-y-3 pt-4">
                          <li className="flex items-start">
                            <span className="mr-3 text-xl" style={{ color: '#10B981' }}>•</span>
                            <span>Follow-up typically stops after just a few days of no response</span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-3 text-xl" style={{ color: '#10B981' }}>•</span>
                            <span>CRM automation moves leads to cold or lost at preset inactivity thresholds</span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-3 text-xl" style={{ color: '#10B981' }}>•</span>
                            <span>AI workflows end early because they focus on appointment-first engagement</span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-3 text-xl" style={{ color: '#10B981' }}>•</span>
                            <span>Customers buy on their own timeline — not the dealership's</span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-3 text-xl" style={{ color: '#10B981' }}>•</span>
                            <span>The cold/lost pool grows larger every single month</span>
                          </li>
                        </ul>
                      </div>
                    )}
                    {tab.id === 'why' && (
                      <div className="space-y-4 text-base text-gray-700 leading-relaxed">
                        <p>Salespeople, AI tools, and CRM workflows handle the short term well. But none were designed for the long, slow, unpredictable buying cycle customers follow today. Salespeople and CRM systems often interpret silence as disinterest, causing leads to be closed too early.</p>
                        <ul className="space-y-3 pt-4">
                          <li className="flex items-start">
                            <span className="mr-3 text-xl" style={{ color: '#10B981' }}>•</span>
                            <span>Salespeople naturally prioritize today's buyers</span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-3 text-xl" style={{ color: '#10B981' }}>•</span>
                            <span>AI tools focus on early engagement and quick appointment asks</span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-3 text-xl" style={{ color: '#10B981' }}>•</span>
                            <span>Salespeople and CRM systems often close leads too early due to silence</span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-3 text-xl" style={{ color: '#10B981' }}>•</span>
                            <span>Customers pause, research, and return weeks or months later</span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-3 text-xl" style={{ color: '#10B981' }}>•</span>
                            <span>Each month, more good customers get swept into cold or lost status</span>
                          </li>
                        </ul>
                        <p className="font-semibold text-gray-900 text-lg pt-4">
                          Traditional follow-up isn't built for long-term patience or timing-based re-engagement.
                        </p>
                      </div>
                    )}
                    {tab.id === 'radar' && (
                      <div className="space-y-4 text-base text-gray-700 leading-relaxed">
                        <p>RADAR activates exactly where salespeople stop, where AI finishes, and where the CRM is about to close the opportunity. It fills the long-term gap no existing system covers.</p>
                        <ul className="space-y-3 pt-4">
                          <li className="flex items-start">
                            <span className="mr-3 text-xl" style={{ color: '#10B981' }}>•</span>
                            <span>Maintains friendly, low-pressure dialogue over time</span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-3 text-xl" style={{ color: '#10B981' }}>•</span>
                            <span>Stays with customers until their timing aligns</span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-3 text-xl" style={{ color: '#10B981' }}>•</span>
                            <span>Prevents leads from slipping into cold or lost prematurely</span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-3 text-xl" style={{ color: '#10B981' }}>•</span>
                            <span>Intercepts customers before CRM automation closes them out</span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-3 text-xl" style={{ color: '#10B981' }}>•</span>
                            <span>Converts a compounding cold/lost pool into a compounding pipeline of opportunity</span>
                          </li>
                        </ul>
                        <p className="font-semibold text-gray-900 text-lg pt-4">
                          RADAR doesn't push — it stays present.
                        </p>
                      </div>
                    )}
                    {tab.id === 'how' && (
                      <div className="space-y-4 text-base text-gray-700 leading-relaxed">
                        <p>RADAR reads customer behavior inside your CRM and engages using simple, human-sounding messages at the moments when traditional follow-up disappears.</p>
                        <ul className="space-y-3 pt-4">
                          <li className="flex items-start">
                            <span className="mr-3 text-xl" style={{ color: '#10B981' }}>•</span>
                            <span>Monitors timing signals</span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-3 text-xl" style={{ color: '#10B981' }}>•</span>
                            <span>Uses silence as "not yet," not "no"</span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-3 text-xl" style={{ color: '#10B981' }}>•</span>
                            <span>Detects inactivity before auto-close rules trigger</span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-3 text-xl" style={{ color: '#10B981' }}>•</span>
                            <span>Sends natural check-ins rather than appointment pressure</span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-3 text-xl" style={{ color: '#10B981' }}>•</span>
                            <span>Scales every month as more long-term customers accumulate</span>
                          </li>
                        </ul>
                        <p className="font-semibold text-gray-900 text-lg pt-4">
                          The longer RADAR runs, the stronger it becomes.
                        </p>
                      </div>
                    )}
                    {tab.id === 'outcome' && (
                      <div className="space-y-4 text-base text-gray-700 leading-relaxed">
                        <p>RADAR re-engages customers who still intended to buy but were pushed into cold or lost status long before their buying cycle ended.</p>
                        <ul className="space-y-3 pt-4">
                          <li className="flex items-start">
                            <span className="mr-3 text-xl" style={{ color: '#10B981' }}>•</span>
                            <span>Reopens conversations with long-cycle buyers</span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-3 text-xl" style={{ color: '#10B981' }}>•</span>
                            <span>Revives opportunities the CRM buried too early</span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-3 text-xl" style={{ color: '#10B981' }}>•</span>
                            <span>Surfaces meaningful revenue that was previously unreachable</span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-3 text-xl" style={{ color: '#10B981' }}>•</span>
                            <span>Builds a growing reservoir of warm customers over time</span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-3 text-xl" style={{ color: '#10B981' }}>•</span>
                            <span>Converts long-term silence into long-term opportunity</span>
                          </li>
                        </ul>
                        <p className="font-semibold text-gray-900 text-lg pt-4">
                          RADAR turns abandoned revenue into recovered opportunity.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Tabs + Carousel View */}
          <div className="hidden lg:block">
            <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Vertical Tabs Navigation */}
            <div className="lg:w-80 flex-shrink-0">
              <div className="lg:sticky lg:top-32 space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full text-left px-6 py-4 rounded-2xl transition-all font-semibold text-lg ${
                      activeTab === tab.id
                        ? 'shadow-lg'
                        : 'bg-white hover:shadow-md'
                    }`}
                    style={{
                      backgroundColor: activeTab === tab.id ? '#10B981' : undefined,
                      color: activeTab === tab.id ? 'white' : '#123b60',
                    }}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Content Panel */}
            <div className="flex-1">
              
              {/* THE PROBLEM NO ONE SEES */}
              {activeTab === 'problem' && (
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border-l-4 animate-fadeIn" style={{ borderLeftColor: '#10B981' }}>
                  <h3 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#123b60' }}>
                    The Problem No One Sees
                  </h3>
                  <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                    <p>Most customers don't go silent because they already purchased — they go silent because follow-up ends too early. Without a process change, most leads end up in cold or lost status within just 14–30 days. The CRM closes them long before many of these customers are actually out of the market.</p>
                    <ul className="space-y-3 pt-4">
                      <li className="flex items-start">
                        <span className="mr-3 text-2xl" style={{ color: '#10B981' }}>•</span>
                        <span>Follow-up typically stops after just a few days of no response</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-3 text-2xl" style={{ color: '#10B981' }}>•</span>
                        <span>CRM automation moves leads to cold or lost at preset inactivity thresholds</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-3 text-2xl" style={{ color: '#10B981' }}>•</span>
                        <span>AI workflows end early because they focus on appointment-first engagement</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-3 text-2xl" style={{ color: '#10B981' }}>•</span>
                        <span>Customers buy on their own timeline — not the dealership's</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-3 text-2xl" style={{ color: '#10B981' }}>•</span>
                        <span>The cold/lost pool grows larger every single month</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {/* WHY TRADITIONAL FOLLOW-UP FAILS */}
              {activeTab === 'why' && (
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border-l-4 animate-fadeIn" style={{ borderLeftColor: '#10B981' }}>
                  <h3 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#123b60' }}>
                    Why Traditional Follow-Up Fails
                  </h3>
                  <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                    <p>
                      Salespeople, AI tools, and CRM workflows handle the short term well. But none were designed for the long, slow, unpredictable buying cycle customers follow today. Salespeople and CRM systems often interpret silence as disinterest, causing leads to be closed too early.
                    </p>
                    <ul className="space-y-3 pt-4">
                      <li className="flex items-start">
                        <span className="mr-3 text-2xl" style={{ color: '#10B981' }}>•</span>
                        <span>Salespeople naturally prioritize today's buyers</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-3 text-2xl" style={{ color: '#10B981' }}>•</span>
                        <span>AI tools focus on early engagement and quick appointment asks</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-3 text-2xl" style={{ color: '#10B981' }}>•</span>
                        <span>Salespeople and CRM systems often close leads too early due to silence</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-3 text-2xl" style={{ color: '#10B981' }}>•</span>
                        <span>Customers pause, research, and return weeks or months later</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-3 text-2xl" style={{ color: '#10B981' }}>•</span>
                        <span>Each month, more good customers get swept into cold or lost status</span>
                      </li>
                    </ul>
                    <p className="font-semibold text-gray-900 text-2xl pt-4">
                      Traditional follow-up isn't built for long-term patience or timing-based re-engagement.
                    </p>
                  </div>
                </div>
              )}

              {/* WHERE RADAR TAKES OVER */}
              {activeTab === 'radar' && (
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border-l-4 animate-fadeIn" style={{ borderLeftColor: '#10B981' }}>
                  <h3 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#123b60' }}>
                    Where RADAR Takes Over
                  </h3>
                  <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                    <p>
                      RADAR activates exactly where salespeople stop, where AI finishes, and where the CRM is about to close the opportunity. It fills the long-term gap no existing system covers.
                    </p>
                    <ul className="space-y-3 pt-4">
                      <li className="flex items-start">
                        <span className="mr-3 text-2xl" style={{ color: '#10B981' }}>•</span>
                        <span>Maintains friendly, low-pressure dialogue over time</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-3 text-2xl" style={{ color: '#10B981' }}>•</span>
                        <span>Stays with customers until their timing aligns</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-3 text-2xl" style={{ color: '#10B981' }}>•</span>
                        <span>Prevents leads from slipping into cold or lost prematurely</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-3 text-2xl" style={{ color: '#10B981' }}>•</span>
                        <span>Intercepts customers before CRM automation closes them out</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-3 text-2xl" style={{ color: '#10B981' }}>•</span>
                        <span>Converts a compounding cold/lost pool into a compounding pipeline of opportunity</span>
                      </li>
                    </ul>
                    <p className="font-semibold text-gray-900 text-2xl pt-4">
                      RADAR doesn't push — it stays present.
                    </p>
                  </div>
                </div>
              )}

              {/* HOW RADAR WORKS BEHIND THE SCENES */}
              {activeTab === 'how' && (
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border-l-4 animate-fadeIn" style={{ borderLeftColor: '#10B981' }}>
                  <h3 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#123b60' }}>
                    How RADAR Works Behind the Scenes
                  </h3>
                  <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                    <p>
                      RADAR reads customer behavior inside your CRM and engages using simple, human-sounding messages at the moments when traditional follow-up disappears.
                    </p>
                    <ul className="space-y-3 pt-4">
                      <li className="flex items-start">
                        <span className="mr-3 text-2xl" style={{ color: '#10B981' }}>•</span>
                        <span>Monitors timing signals</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-3 text-2xl" style={{ color: '#10B981' }}>•</span>
                        <span>Uses silence as "not yet," not "no"</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-3 text-2xl" style={{ color: '#10B981' }}>•</span>
                        <span>Detects inactivity before auto-close rules trigger</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-3 text-2xl" style={{ color: '#10B981' }}>•</span>
                        <span>Sends natural check-ins rather than appointment pressure</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-3 text-2xl" style={{ color: '#10B981' }}>•</span>
                        <span>Scales every month as more long-term customers accumulate</span>
                      </li>
                    </ul>
                    <p className="font-semibold text-gray-900 text-2xl pt-4">
                      The longer RADAR runs, the stronger it becomes.
                    </p>
                  </div>
                </div>
              )}

              {/* THE OUTCOME */}
              {activeTab === 'outcome' && (
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border-l-4 animate-fadeIn" style={{ borderLeftColor: '#10B981' }}>
                  <h3 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#123b60' }}>
                    The Outcome: Revenue That Would've Never Happened
                  </h3>
                  <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                    <p>
                      RADAR re-engages customers who still intended to buy but were pushed into cold or lost status long before their buying cycle ended.
                    </p>
                    <ul className="space-y-3 pt-4">
                      <li className="flex items-start">
                        <span className="mr-3 text-2xl" style={{ color: '#10B981' }}>•</span>
                        <span>Reopens conversations with long-cycle buyers</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-3 text-2xl" style={{ color: '#10B981' }}>•</span>
                        <span>Revives opportunities the CRM buried too early</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-3 text-2xl" style={{ color: '#10B981' }}>•</span>
                        <span>Surfaces meaningful revenue that was previously unreachable</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-3 text-2xl" style={{ color: '#10B981' }}>•</span>
                        <span>Builds a growing reservoir of warm customers over time</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-3 text-2xl" style={{ color: '#10B981' }}>•</span>
                        <span>Converts long-term silence into long-term opportunity</span>
                      </li>
                    </ul>
                    <p className="font-semibold text-gray-900 text-2xl pt-4">
                      RADAR turns abandoned revenue into recovered opportunity.
                    </p>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative px-6 py-24 overflow-hidden" style={{ backgroundColor: '#123b60' }}>
        {/* Large circular arcs with radar dots */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.18]">
          <svg className="w-full h-full" viewBox="0 0 1200 600">
            <defs>
              <radialGradient id="radarDot" cx="50%" cy="50%">
                <stop offset="0%" stopColor="#10B981" stopOpacity="1" />
                <stop offset="50%" stopColor="#10B981" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
              </radialGradient>
            </defs>
            {/* Large concentric circular arcs */}
            <circle cx="600" cy="-50" r="700" fill="none" stroke="#10B981" strokeWidth="3" opacity="0.5" />
            <circle cx="600" cy="-50" r="550" fill="none" stroke="#10B981" strokeWidth="2.5" opacity="0.4" />
            <circle cx="600" cy="-50" r="400" fill="none" stroke="#10B981" strokeWidth="2" opacity="0.35" />
            <circle cx="600" cy="-50" r="250" fill="none" stroke="#10B981" strokeWidth="1.5" opacity="0.3" />
            {/* Radar dots - large pulsing */}
            <circle cx="600" cy="100" r="20" fill="url(#radarDot)" />
            <circle cx="400" cy="200" r="16" fill="url(#radarDot)" opacity="0.8" />
            <circle cx="800" cy="200" r="16" fill="url(#radarDot)" opacity="0.8" />
            <circle cx="300" cy="350" r="14" fill="url(#radarDot)" opacity="0.7" />
            <circle cx="900" cy="350" r="14" fill="url(#radarDot)" opacity="0.7" />
            <circle cx="500" cy="300" r="12" fill="url(#radarDot)" opacity="0.6" />
            <circle cx="700" cy="300" r="12" fill="url(#radarDot)" opacity="0.6" />
            {/* Smaller tracking dots */}
            <circle cx="350" cy="450" r="6" fill="#10B981" opacity="0.9" />
            <circle cx="600" cy="250" r="6" fill="#10B981" opacity="0.9" />
            <circle cx="850" cy="450" r="6" fill="#10B981" opacity="0.9" />
            <circle cx="550" cy="180" r="5" fill="#10B981" opacity="0.7" />
            <circle cx="650" cy="180" r="5" fill="#10B981" opacity="0.7" />
          </svg>
        </div>
        
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <img src="/Radar_Logo_Reverse.svg" alt="RADAR" className="h-12 mx-auto mb-8" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Get started with RADAR
          </h2>
          
          <p className="text-xl text-blue-100 mb-12">
            Let's explore what you might be missing.
          </p>
          
          <a
            href="mailto:ward.matt@me.com?subject=RADAR%20-%20quick%20conversation"
            className="inline-block px-10 py-4 text-lg font-semibold rounded-full transition-all shadow-lg hover:shadow-xl mb-8"
            style={{ backgroundColor: '#10B981', color: 'white' }}
          >
            Contact us
          </a>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-blue-200">
            <a href="tel:425-985-8227" className="hover:text-white transition-colors">
              425-985-8227
            </a>
            <a href="mailto:ward.matt@me.com" className="hover:text-white transition-colors">
              ward.matt@me.com
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 py-12 border-t" style={{ backgroundColor: '#001a33', borderColor: '#003366' }}>
        <div className="max-w-7xl mx-auto text-center text-sm text-blue-200">
          <div className="flex items-center justify-center gap-4 mb-4">
            <p>© 2026 Dealer Transparency. All rights reserved.</p>
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-lg hover:bg-white/10 transition-colors opacity-50 hover:opacity-100"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <svg className="w-5 h-5 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
