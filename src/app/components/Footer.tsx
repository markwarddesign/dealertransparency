import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="flex items-center justify-center md:justify-start space-x-3">
              <svg width="44" height="44" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="footerIconGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor: '#3B82F6', stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: '#10B981', stopOpacity: 1}} />
                  </linearGradient>
                </defs>
                <path d="M20 50 L50 20 L80 50 L50 80 Z" fill="url(#footerIconGrad)" opacity="0.9"/>
                <circle cx="50" cy="50" r="12" fill="white"/>
                <path d="M35 50 L50 35 L65 50 L50 65 Z" fill="none" stroke="white" strokeWidth="3" strokeLinejoin="round"/>
              </svg>
              <span className="text-2xl font-bold uppercase" style={{letterSpacing: '-0.02em', fontFamily: 'Inter, system-ui, -apple-system, sans-serif'}}>
                <span className="font-light text-gray-300">Dealer</span><span className="font-bold text-electric-blue">Transparency</span>
              </span>
            </Link>
            <p className="text-sm text-gray-500 mt-2">© 2026 Dealer Transparency. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <Link href="#solutions" className="text-gray-400 hover:text-electric-blue transition-colors">Solutions</Link>
            <Link href="#results" className="text-gray-400 hover:text-electric-blue transition-colors">Results</Link>
            <Link href="#contact" className="text-gray-400 hover:text-electric-blue transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}