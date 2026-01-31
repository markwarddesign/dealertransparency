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
            <span className="text-2xl font-black text-red-500 tracking-wider uppercase" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', letterSpacing: '0.15em', color: '#ed2024' }}>RADAR</span>
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

      {/* SECTION 1 — HERO */}
      <section className="relative px-6 pt-32 pb-32 md:pt-48 md:pb-40 min-h-[85vh] flex items-center overflow-hidden">
        {/* Animated Radar Background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30">
          <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-4xl">
            <defs>
              <linearGradient id="radarSweep" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ed2024" stopOpacity="0" />
                <stop offset="100%" stopColor="#ed2024" stopOpacity="0.4" />
              </linearGradient>
            </defs>
            
            {/* Radar circles */}
            <circle cx="200" cy="200" r="180" fill="none" stroke="#ed2024" strokeWidth="1" opacity="0.2"/>
            <circle cx="200" cy="200" r="130" fill="none" stroke="#ed2024" strokeWidth="1" opacity="0.3"/>
            <circle cx="200" cy="200" r="80" fill="none" stroke="#ed2024" strokeWidth="1" opacity="0.4"/>
            <circle cx="200" cy="200" r="30" fill="none" stroke="#ed2024" strokeWidth="1" opacity="0.5"/>
            
            {/* Radar sweep line - animated */}
            <g className="animate-[spin_4s_linear_infinite] origin-center" style={{ transformOrigin: '200px 200px' }}>
              <path d="M200 200 L200 20" stroke="url(#radarSweep)" strokeWidth="3" strokeLinecap="round" opacity="0.6"/>
              <path d="M200 200 L200 20" stroke="#ed2024" strokeWidth="2" strokeLinecap="round"/>
            </g>
            
            {/* Blinking dots at different positions */}
            <circle cx="280" cy="120" r="6" fill="#10B981" className="animate-pulse" style={{ animationDuration: '2s' }} />
            <circle cx="140" cy="110" r="5" fill="#F59E0B" className="animate-pulse" style={{ animationDuration: '3s', animationDelay: '0.5s' }} />
            <circle cx="120" cy="260" r="7" fill="#ed2024" className="animate-pulse" style={{ animationDuration: '2.5s', animationDelay: '1s' }} />
            <circle cx="300" cy="280" r="4" fill="#8B5CF6" className="animate-pulse" style={{ animationDuration: '3.5s', animationDelay: '1.5s' }} />
            <circle cx="220" cy="320" r="5" fill="#06B6D4" className="animate-pulse" style={{ animationDuration: '2.8s', animationDelay: '0.8s' }} />
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-tight">
              RADAR is a behavioral engagement layer inside the CRM.
            </h1>
            
            <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-300 font-light leading-relaxed max-w-3xl mx-auto">
              It quietly works the mid- and long-term opportunities that salespeople and AI tend to miss.
            </h2>
            
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
              No noise. No extra dashboards.<br />
              Just persistent, time-aware engagement.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
              <a
                href="mailto:ward.matt@me.com?subject=RADAR%20-%20quick%20conversation"
                className="px-8 py-4 rounded-lg font-medium transition-colors shadow-md text-lg"
                style={{ backgroundColor: '#ed2024', color: 'white' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#c91b1f'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ed2024'}
              >
                Let's talk
              </a>
              <a
                href="#what-it-does"
                className="px-8 py-4 text-gray-300 font-medium flex items-center gap-2 transition-colors text-lg hover:text-white"
              >
                What does it do? <span>→</span>
              </a>
            </div>
            
            <p className="text-sm text-gray-500 pt-6">
              Built inside real CRM environments. Designed for long horizons.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2 — THE PROBLEM */}
      <section id="problem" className="px-6 py-20 bg-zinc-950">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
            Most systems are built for <span style={{ color: '#ed2024' }}>speed</span>. RADAR is built for <span className="text-gray-300">timing</span>.
          </h2>
          
          <div className="space-y-6 text-lg text-gray-400 leading-relaxed">
            <p>
              CRMs and AI tools are optimized for the first hour, the first day, and the first week.
            </p>
            
            <p>
              But real buying behavior isn't linear.
            </p>
            
            <p>
              If a customer isn't ready right now, they often fall into a gray area: processes expire, 
              leads get marked "lost," follow-up fades, and the opportunity quietly disappears.
            </p>
            
            <p className="font-medium text-white">
              RADAR was built to live in that gap.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 — WHAT IT DOES */}
      <section id="what-it-does" className="px-6 py-20 bg-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
            What RADAR does differently
          </h2>
          
          <ul className="space-y-4 text-lg text-gray-300">
            <li className="flex items-start">
              <span className="mr-3" style={{ color: '#ed2024' }}>•</span>
              <span>Maintains a persistent engagement state for every contact</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3" style={{ color: '#ed2024' }}>•</span>
              <span>Treats time and non-response as behavioral signals</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3" style={{ color: '#ed2024' }}>•</span>
              <span>Continues working leads long after traditional follow-up ends</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3" style={{ color: '#ed2024' }}>•</span>
              <span>Pauses automatically when humans engage</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3" style={{ color: '#ed2024' }}>•</span>
              <span>Resumes intelligently if engagement drops again</span>
            </li>
          </ul>
          
          <p className="text-lg text-gray-400 mt-12 text-center">
            RADAR doesn't replace salespeople or AI. It supports both — over months and years, not days.
          </p>
        </div>
      </section>

      {/* SECTION 4 — HOW IT WORKS */}
      <section className="px-6 py-20 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
            How it works (in plain terms)
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-3 border border-gray-800 p-6 rounded-lg bg-black/50">
              <h3 className="text-xl font-semibold text-white">Persistent memory</h3>
              <p className="text-gray-400">
                RADAR maintains a long-term engagement state that doesn't reset when processes change or end.
              </p>
            </div>
            
            <div className="space-y-3 border border-gray-800 p-6 rounded-lg bg-black/50">
              <h3 className="text-xl font-semibold text-white">Time + behavior logic</h3>
              <p className="text-gray-400">
                It evaluates engagement using interaction signals, non-response, and elapsed time.
              </p>
            </div>
            
            <div className="space-y-3 border border-gray-800 p-6 rounded-lg bg-black/50">
              <h3 className="text-xl font-semibold text-white">Clean handoff to humans</h3>
              <p className="text-gray-400">
                When a customer re-engages, the right people get notified and automation steps back.
              </p>
            </div>
            
            <div className="space-y-3 border border-gray-800 p-6 rounded-lg bg-black/50">
              <h3 className="text-xl font-semibold text-white">Non-linear re-entry</h3>
              <p className="text-gray-400">
                If engagement fades again, RADAR resumes intelligently without restarting from the beginning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — WHY IT EXISTS */}
      <section className="px-6 py-20 bg-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
            Why RADAR exists
          </h2>
          
          <div className="space-y-6 text-lg text-gray-400 leading-relaxed">
            <p>
              After years inside real dealerships and real CRMs, one pattern kept showing up:
            </p>
            
            <p>
              A meaningful percentage of deals come from customers who didn't buy the first time — 
              or the second — or even the third.
            </p>
            
            <p>
              They buy when timing changes.
            </p>
            
            <p className="font-medium text-white">
              RADAR was built to respect that reality and stay present without becoming noise.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 6 — MODULES */}
      <section className="px-6 py-20 bg-zinc-950">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
            Part of a larger engagement system
          </h2>
          
          <p className="text-lg text-gray-400 text-center mb-12">
            RADAR can operate on its own, or alongside complementary components:
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="space-y-3 border border-gray-800 p-6 rounded-lg bg-black/50">
              <h3 className="text-2xl font-bold text-white">ACE</h3>
              <p className="text-gray-400">
                Early-stage automated engagement that focuses on fast initial response.
              </p>
            </div>
            
            <div className="space-y-3 border border-gray-800 p-6 rounded-lg bg-black/50">
              <h3 className="text-2xl font-bold text-white">ALIGN</h3>
              <p className="text-gray-400">
                Behavior-matched follow-up cadences (urgent to passive) to reflect customer intent.
              </p>
            </div>
            
            <div className="space-y-3 border border-gray-800 p-6 rounded-lg bg-black/50">
              <h3 className="text-2xl font-bold text-white">ERL</h3>
              <p className="text-gray-400">
                A structured engagement response library that keeps messaging consistent and human.
              </p>
            </div>
          </div>
          
          <p className="text-lg text-gray-400 text-center">
            Each component solves a specific gap — but RADAR is the long-term backbone.
          </p>
        </div>
      </section>

      {/* SECTION 7 — PROOF */}
      <section className="px-6 py-20 bg-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
            What we've seen in real environments
          </h2>
          
          <p className="text-lg text-gray-400 leading-relaxed mb-4">
            In live CRM environments, RADAR has demonstrated the ability to sustain engagement 
            beyond traditional follow-up windows and generate inbound conversations from long-aged 
            opportunities — while maintaining low opt-out behavior when implemented with the right governance.
          </p>
          
          <p className="text-xs text-gray-600 text-center">
            Results vary by implementation and process discipline. This page is informational and not a performance guarantee.
          </p>
        </div>
      </section>

      {/* SECTION 8 — CTA */}
      <section className="px-6 py-20 text-white" style={{ background: 'linear-gradient(135deg, #1a0000 0%, #000000 50%, #1a0000 100%)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            If this resonates, let's have a conversation.
          </h2>
          
          <div className="space-y-6 text-lg leading-relaxed mb-10 text-gray-300">
            <p>
              If you're responsible for growth, engagement, CRM strategy, or long-term opportunity capture — 
              I'd love to compare notes.
            </p>
            
            <p>
              No pitch. No deck.<br />
              Just a conversation around timing, behavior, and missed opportunity.
            </p>
          </div>
          
          <a
            href="mailto:ward.matt@me.com?subject=RADAR%20-%20quick%20conversation"
            className="inline-block px-8 py-3 rounded-lg font-medium transition-colors mb-6 shadow-lg"
            style={{ backgroundColor: '#ed2024', color: 'white' }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#c91b1f'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ed2024'}
          >
            Email Matt
          </a>
          
          <p className="text-sm text-gray-500">
            Or text/call: 425-985-8227
          </p>
        </div>
      </section>

      {/* SECTION 9 — FOOTER */}
      <footer className="px-6 py-12 bg-black text-gray-400 border-t border-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-gray-900">
            <div>
              <div className="text-2xl font-bold mb-2" style={{ color: '#ed2024' }}>RADAR</div>
              <p className="text-sm text-gray-600">Behavioral Engagement Layer</p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm mb-2 text-gray-500">Matt Ward</p>
              <a href="mailto:ward.matt@me.com" className="text-sm hover:text-white transition-colors" style={{ color: '#ed2024' }}>
                ward.matt@me.com
              </a>
              <p className="text-sm mt-1 text-gray-500">425-985-8227</p>
            </div>
          </div>
          <div className="pt-8 text-center text-sm space-y-2">
            <p className="text-gray-600">
              RADAR is a proprietary engagement orchestration framework.
            </p>
            <p className="text-gray-700">
              © {currentYear} Matt Ward. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
