import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="flex items-center justify-center md:justify-start">
              <Image 
                src="/dealer-transparency-logo.svg" 
                alt="Dealer Transparency" 
                width={200}
                height={44}
                className="h-10 w-auto"
              />
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