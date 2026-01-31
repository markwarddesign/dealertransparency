import Image from 'next/image'; // Optional, but recommended for images
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
      {/* Hero Section */}
      <section className="bg-gray-50">
        <div className="container mx-auto px-6 py-20 lg:py-24 text-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-navy leading-tight mb-4">
            Dealer Transparency Suite - RPM
          </h1>
          <p className="text-lg lg:text-xl text-slate-gray max-w-3xl mx-auto mb-8">
            Blending 30 years of experience with intelligent automation. We create custom strategies and processes to meet your dealership&apos;s unique goals. It starts with a free Dealer Health Report to identify hidden opportunities within your operations.
          </p>
          <a
            href="#contact"
            className="px-8 py-4 bg-electric-blue text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-navy transform hover:-translate-y-1 transition-all duration-300"
          >
            Get Your Free Health Report
          </a>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="bg-white py-16 lg:py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy mb-4">Our Dealer Solutions Portfolio</h2>
            <p className="text-lg text-slate-gray max-w-3xl mx-auto">A fully integrated suite of software and services designed to drive profitability and enhance the customer experience at every touchpoint.</p>
          </div>

          <div className="space-y-16 lg:space-y-24">

            {/* 1. R.A.D.A.R. */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:order-2">
                <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" className="inline-block w-full max-w-md">
                  <defs>
                    <linearGradient id="radarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{stopColor: '#3B82F6', stopOpacity: 0.8}} />
                      <stop offset="100%" style={{stopColor: '#10B981', stopOpacity: 0.4}} />
                    </linearGradient>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  <circle cx="100" cy="60" r="50" fill="none" stroke="#E5E7EB" strokeWidth="2"/>
                  <circle cx="100" cy="60" r="35" fill="none" stroke="#D1D5DB" strokeWidth="2"/>
                  <circle cx="100" cy="60" r="20" fill="none" stroke="#9CA3AF" strokeWidth="2"/>
                  <circle cx="100" cy="60" r="5" fill="#3B82F6" filter="url(#glow)"/>
                  <path d="M100 60 L100 10" stroke="url(#radarGrad)" strokeWidth="3" opacity="0.6">
                    <animateTransform attributeName="transform" type="rotate" from="0 100 60" to="360 100 60" dur="4s" repeatCount="indefinite"/>
                  </path>
                  <path d="M 100 60 Q 85 45, 70 30" fill="none" stroke="#3B82F6" strokeWidth="2" opacity="0.7">
                    <animate attributeName="opacity" values="0.3;0.9;0.3" dur="2s" repeatCount="indefinite"/>
                  </path>
                  <path d="M 100 60 Q 115 45, 130 30" fill="none" stroke="#10B981" strokeWidth="2" opacity="0.7">
                    <animate attributeName="opacity" values="0.9;0.3;0.9" dur="2s" repeatCount="indefinite"/>
                  </path>
                  <circle cx="70" cy="30" r="4" fill="#3B82F6">
                    <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="130" cy="30" r="4" fill="#10B981">
                    <animate attributeName="r" values="5;3;5" dur="2s" repeatCount="indefinite"/>
                  </circle>
                </svg>
              </div>
              <div className="lg:order-1">
                <h3 className="text-2xl font-bold text-navy mb-4">1. R.A.D.A.R.™ (Retention & Advertising Drip for Automated ROI)</h3>
                <p className="text-gray-700 mb-4">
                  R.A.D.A.R. is an automated messaging engine that works within your existing CRM to continue engaging customers long after the salesperson stops. By sending consistent, personalized messages over an extended period, R.A.D.A.R. nurtures leads that might otherwise be lost after 30–60 days, helping you maximize advertising dollars and drive higher ROI. Integrated with PipelinePro and TemplateWorks, it ensures long-term engagement, retention, and measurable results for every customer.
                </p>
                <a
                  href="/radar"
                  className="inline-block px-6 py-3 bg-electric-blue text-white font-semibold rounded-lg hover:bg-navy transition duration-300"
                >
                  Learn More About RADAR →
                </a>
              </div>
            </div>

            {/* 2. P.A.C.E. */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-center">
                <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" className="inline-block w-full max-w-md">
                  <defs>
                    <linearGradient id="flowGrad" x1="0%" y1="50%" x2="100%" y2="50%">
                      <stop offset="0%" style={{stopColor: '#F59E0B', stopOpacity: 1}} />
                      <stop offset="50%" style={{stopColor: '#3B82F6', stopOpacity: 1}} />
                      <stop offset="100%" style={{stopColor: '#10B981', stopOpacity: 1}} />
                    </linearGradient>
                  </defs>
                  <circle cx="40" cy="60" r="25" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="3"/>
                  <text x="40" y="65" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#92400E">Service</text>
                  <circle cx="160" cy="60" r="25" fill="#D1FAE5" stroke="#10B981" strokeWidth="3"/>
                  <text x="160" y="65" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#065F46">Sales</text>
                  <path d="M 70 50 Q 100 30, 130 50" fill="none" stroke="url(#flowGrad)" strokeWidth="4" markerEnd="url(#arrowhead1)">
                    <animate attributeName="stroke-dasharray" values="0,100;100,0" dur="2s" repeatCount="indefinite"/>
                  </path>
                  <path d="M 130 70 Q 100 90, 70 70" fill="none" stroke="url(#flowGrad)" strokeWidth="4" markerEnd="url(#arrowhead2)">
                    <animate attributeName="stroke-dasharray" values="0,100;100,0" dur="2s" begin="1s" repeatCount="indefinite"/>
                  </path>
                  <defs>
                    <marker id="arrowhead1" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
                      <polygon points="0 0, 10 3, 0 6" fill="#10B981" />
                    </marker>
                    <marker id="arrowhead2" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
                      <polygon points="0 0, 10 3, 0 6" fill="#F59E0B" />
                    </marker>
                  </defs>
                  <circle cx="100" cy="40" r="5" fill="#3B82F6">
                    <animate attributeName="cy" values="40;80;40" dur="2s" repeatCount="indefinite"/>
                  </circle>
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-navy mb-4">2. P.A.C.E.™ (Premium Acquisition & Customer Exchange)</h3>
                <p className="text-gray-700">
                  P.A.C.E. focuses on acquiring high-demand vehicles from active service customers to fill inventory gaps before they reach the open market. This approach benefits both the dealership and the customer by securing vehicles with a verified history for a higher trade-in value. Working with M.I.L.E.S. and R.A.D.A.R., P.A.C.E. uses custom workflows and targeted communications to convert high-value service customers into loyal buyers.
                </p>
              </div>
            </div>

            {/* 3. M.I.L.E.S. */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:order-2">
                <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" className="inline-block w-full max-w-md">
                  <defs>
                    <linearGradient id="cashGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" style={{stopColor: '#10B981', stopOpacity: 1}} />
                      <stop offset="100%" style={{stopColor: '#059669', stopOpacity: 1}} />
                    </linearGradient>
                  </defs>
                  <rect x="30" y="15" width="140" height="90" rx="10" fill="#F9FAFB" stroke="#E5E7EB" strokeWidth="2"/>
                  <rect x="30" y="15" width="140" height="20" rx="10" fill="#3B82F6"/>
                  <rect x="30" y="15" width="140" height="20" fill="#3B82F6"/>
                  <text x="100" y="29" textAnchor="middle" fontSize="10" fontWeight="bold" fill="white">MILES Calculator</text>
                  <text x="45" y="52" fontSize="8" fill="#6B7280">Monthly Payment</text>
                  <rect x="45" y="57" width="110" height="12" rx="4" fill="white" stroke="#D1D5DB" strokeWidth="1"/>
                  <text x="50" y="66" fontSize="10" fontWeight="bold" fill="#0A1931">$485/mo</text>
                  <rect x="125" y="58" width="25" height="10" rx="2" fill="#DBEAFE"/>
                  <text x="137.5" y="66" textAnchor="middle" fontSize="7" fill="#1E40AF">-$63</text>
                  <text x="45" y="80" fontSize="8" fill="#6B7280">Lifetime Savings</text>
                  <rect x="45" y="85" width="110" height="15" rx="6" fill="url(#cashGrad)"/>
                  <text x="100" y="95" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white">$5,280</text>
                  <path d="M 55 48 L 58 45 L 61 48" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <animateTransform attributeName="transform" type="translate" values="0,0; 0,-3; 0,0" dur="1.5s" repeatCount="indefinite"/>
                  </path>
                  <circle cx="150" cy="48" r="3" fill="#10B981">
                    <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite"/>
                  </circle>
                </svg>
              </div>
              <div className="lg:order-1">
                <h3 className="text-2xl font-bold text-navy mb-4">3. M.I.L.E.S.™ (Monthly Investment & Lifetime Expense Savings)</h3>
                <p className="text-gray-700 mb-4">
                  M.I.L.E.S. is your next-gen tool for creating customized offers that help customers save money, visualize their monthly investments, and maximize their lifetime expense savings. Empower your team to guide customers into smarter decisions—including trading in their vehicles for the best value. This program integrates marketing, sales strategies, and custom workflows to boost profitability while enhancing the customer experience.
                </p>
                <a
                  href="https://miles.dealertransparency.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-electric-blue text-white font-semibold rounded-lg hover:bg-navy transition duration-300"
                >
                  Try M.I.L.E.S. →
                </a>
              </div>
            </div>

            {/* 4. TemplateWorks */}
            <div className="hidden grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:order-2">
                <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" className="inline-block w-full max-w-md"><rect x="30" y="20" width="140" height="80" rx="8" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1"/><path d="M50 40 H 150 M50 55 H 150 M50 70 H 120" stroke="#D1D5DB" strokeWidth="4" strokeLinecap="round" /><path d="M120 85 l 30 -30 M120 85 l 10 0 M120 85 l0 -10" stroke="#3B82F6" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div className="lg:order-1">
                <h3 className="text-2xl font-bold text-navy mb-4">4. TemplateWorks™</h3>
                <p className="text-gray-700">
                  TemplateWorks develops fully-customized text and email templates that align with your dealership’s brand and sales approach. Templates cover every stage of customer engagement—from first response to objection handling, follow-ups, and long-term nurturing. Integrated into M.I.L.E.S., R.A.D.A.R., and P.A.C.E., TemplateWorks ensures every message is personal, timely, and effective.
                </p>
              </div>
            </div>

            {/* 5. PipelinePro */}
            <div className="hidden grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-center">
                <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" className="inline-block w-full max-w-md"><rect x="20" y="30" width="30" height="60" rx="4" fill="#F3F4F6" /><rect x="65" y="30" width="70" height="60" rx="4" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1"/><rect x="150" y="30" width="30" height="60" rx="4" fill="#F3F4F6" /><path d="M50 60 H 65 M135 60 H 150" stroke="#9CA3AF" strokeWidth="2"/><path d="M75 45 H 125 M75 60 H 125 M75 75 H 105" stroke="#D1D5DB" strokeWidth="4" strokeLinecap="round"/></svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-navy mb-4">5. PipelinePro™</h3>
                <p className="text-gray-700">
                  PipelinePro is a CRM optimization and lead tracking solution that enhances every aspect of dealership operations. Working within your existing CRM, it creates custom workflows, tracks engagement, and provides insights for improved ROI. PipelinePro supports all other programs—M.I.L.E.S., R.A.D.A.R., P.A.C.E., and TemplateWorks—giving your team full visibility and data-driven tools to succeed.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* How It Works Together Section */}
      <section className="hidden bg-gray-100 py-16 lg:py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-navy mb-4">How It All Works Together</h2>
          <p className="text-lg text-slate-gray max-w-3xl mx-auto">
            These programs complement each other: M.I.L.E.S. drives smarter offers, R.A.D.A.R. keeps leads engaged long-term, P.A.C.E. acquires high-demand vehicles from service customers, TemplateWorks optimizes messaging at every touchpoint, and PipelinePro ties it all together for full visibility, automation, and measurable results.
          </p>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="bg-white py-16 lg:py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">Proven Results. Unmatched ROI.</h2>
            <p className="text-lg text-slate-gray max-w-3xl mx-auto">Real-world data from a three-rooftop, four-franchise dealer group using our systems.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <p className="text-4xl font-extrabold text-electric-blue mb-2">$11.7 Million</p>
              <p className="font-semibold text-navy">In Sales Gross (Combined)</p>
              <p className="text-sm text-slate-gray">Generated by the P.A.C.E.™ program in its first 2 years.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <p className="text-4xl font-extrabold text-electric-blue mb-2">82%</p>
              <p className="font-semibold text-navy">Contact Rate on Internet Leads</p>
              <p className="text-sm text-slate-gray">Achieved group-wide with our custom content and communication strategies.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <p className="text-4xl font-extrabold text-electric-blue mb-2">$3+ Million</p>
              <p className="font-semibold text-navy">Per Year in Sales Gross Profit</p>
              <p className="text-sm text-slate-gray">From the R.A.D.A.R.™ automated program, with leads 200-900 days old.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="bg-navy">
        <div className="container mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Unlock Your Dealership&apos;s True Potential?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">It all starts with a conversation. Let us generate a free, no-obligation Dealer Health Report to pinpoint your greatest opportunities for growth.</p>
          {/* Note: mailto: links should remain as <a> tags, not <Link> */}
          <a
            href="mailto:contact@dealertransparency.com"
            className="px-8 py-4 bg-electric-blue text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-white hover:text-navy transform hover:-translate-y-1 transition-all duration-300"
          >
            Request Your Free Report
          </a>
        </div>
      </section>
    </main>
    <Footer />
    </>
  );
}