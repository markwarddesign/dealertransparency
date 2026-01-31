import Link from 'next/link';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="flex items-center justify-center md:justify-start space-x-2">
              <Logo className="h-8 w-auto" />
              <span className="text-xl font-bold">Dealer Transparency</span>
            </Link>
            <p className="text-sm text-gray-400 mt-2">© 2026 Dealer Transparency. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <Link href="#portfolio" className="hover:text-electric-blue">Solutions</Link>
            <Link href="#results" className="hover:text-electric-blue">Results</Link>
            <Link href="#contact" className="hover:text-electric-blue">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}