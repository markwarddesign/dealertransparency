'use client';

export default function RadarPage() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-black">
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" className="h-12 w-auto">
              <circle cx="100" cy="60" r="50" fill="none" stroke="#ed2024" strokeWidth="2.5" opacity="0.3"/>
              <circle cx="100" cy="60" r="35" fill="none" stroke="#ed2024" strokeWidth="2.5" opacity="0.5"/>
              <circle cx="100" cy="60" r="20" fill="none" stroke="#ed2024" strokeWidth="2.5" opacity="0.7"/>
              <path d="M100 60 L140 30" stroke="#ed2024" strokeWidth="4" strokeLinecap="round"/>
              <circle cx="125" cy="41" r="6" fill="#10B981" />
              <circle cx="80" cy="35" r="5" fill="#F59E0B" />
              <circle cx="70" cy="80" r="7" fill="#ed2024" />
            </svg>
            <span className="text-2xl font-black tracking-wider uppercase" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', letterSpacing: '0.15em', color: '#ed2024' }}>RADAR</span>
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
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30">
          <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-4xl">
            <defs>
              <linearGradient id="radarSweep" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ed2024" stopOpacity="0" />
                <stop offset="100%" stopColor="#ed2024" stopOpacity="0.4" />
              </linearGradient>
            </defs>
            <circle cx="200" cy="200" r="180" fill="none" stroke="#ed2024" strokeWidth="1" opacity="0.2"/>
            <circle cx="200" cy="200" r="130" fill="none" stroke="#ed2024" strokeWidth="1" opacity="0.3"/>
            <circle cx="200" cy="200" r="80" fill="none" stroke="#ed2024" strokeWidth="1" opacity="0.4"/>
            <circle cx="200" cy="200" r="30" fill="none" stroke="#ed2024" strokeWidth="1" opacity="0.5"/>
            <g className="animate-[spin_4s_linear_infinite] origin-center" style={{ transformOrigin: '200px 200px' }}>
              <path d="M200 200 L200 20" stroke="url(#radarSweep)" strokeWidth="3" strokeLinecap="round" opacity="0.6"/>
              <path d="M200 200 L200 20" stroke="#ed2024" strokeWidth="2" strokeLinecap="round"/>
            </g>
            <circle cx="280" cy="120" r="6" fill="#10B981" className="animate-pulse" style={{ animationDuration: '2s' }} />
            <circle cx="140" cy="110" r="5" fill="#F59E0B" className="animate-pulse" style={{ animationDuration: '3s', animationDelay: '0.5s' }} />
            <circle cx="120" cy="260" r="7" fill="#ed2024" className="animate-pulse" style={{ animationDuration: '2.5s', animationDelay: '1s' }} />
            <circle cx="300" cy="280" r="4" fill="#8B5CF6" className="animate-pulse" style={{ animationDuration: '3.5s', animationDelay: '1.5s' }} />
            <circle cx="220" cy="320" r="5" fill="#06B6D4" className="animate-pulse" style={{ animationDuration: '2.8s', animationDelay: '0.8s' }} />
          </svg>
        </div>
        
        <div className="max-w-5xl mx-auto w-full relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
              RADAR
            </h1>
            
            <h2 className="text-2xl md:text-3xl text-gray-300 font-light leading-relaxed">
              A behavioral engagement layer inside the CRM.
            </h2>
            
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
              It quietly works the mid- and long-term opportunities that salespeople and AI tend to miss — without adding noise, dashboards, or complexity.
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

      {/* WHY IT EXISTS */}
      <section className="px-6 py-16 bg-zinc-950">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
            Why It Exists
          </h2>
          
          <div className="space-y-4 text-lg text-gray-400 leading-relaxed text-center">
            <p>Most systems focus on fast: first hour, first day, first week.</p>
            <p>But buyers don't follow a script.</p>
            <p className="font-medium text-white text-xl pt-2">
              When timing isn't right today, RADAR stays present — silently — until it is.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT IT DOES */}
      <section id="what-it-does" className="px-6 py-16 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            What It Does (in 10 seconds)
          </h2>
          
          <p className="text-xl text-gray-300 leading-relaxed mb-6">
            RADAR grows over time and picks up thousands of long-term opportunities that normally fall through the cracks when processes end, leads get marked lost, or humans/AI stop following up.
          </p>
          
          <p className="text-xl font-medium text-white">
            It lives where timing changes — and creates conversations months after everyone else gives up.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-6 py-16 bg-zinc-950">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
            How It Works
          </h2>
          
          <ul className="space-y-3 text-lg text-gray-300 mb-8">
            <li className="flex items-start">
              <span className="mr-3" style={{ color: '#ed2024' }}>•</span>
              <span>Maintains a persistent engagement state</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3" style={{ color: '#ed2024' }}>•</span>
              <span>Uses time + non-response as signals</span>
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
          
          <div className="text-center">
            <p className="text-xl text-white font-medium mb-2">
              RADAR doesn't replace people or AI.
            </p>
            <p className="text-lg text-gray-400">
              It supports both, for months and years.
            </p>
          </div>
        </div>
      </section>

      {/* MODULES */}
      <section className="px-6 py-16 bg-black">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
            Part of a Larger System
          </h2>
          
          <div className="space-y-3 text-lg text-gray-400 text-center mb-6">
            <p><span className="text-white font-semibold">ACE</span> – early-stage automated response</p>
            <p><span className="text-white font-semibold">ALIGN</span> – intent-matched cadences</p>
            <p><span className="text-white font-semibold">ERL</span> – unified message library</p>
          </div>
          
          <p className="text-lg text-gray-400 text-center font-medium">
            RADAR is the long-term backbone.
          </p>
        </div>
      </section>

      {/* PROOF */}
      <section className="px-6 py-16 bg-zinc-950">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Real-World Impact
          </h2>
          
          <p className="text-lg text-gray-300 leading-relaxed">
            In live dealership CRMs, RADAR consistently drives new conversations from aged and "lost" opportunities — with low opt-out rates and high re-engagement when implemented correctly.
          </p>
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
