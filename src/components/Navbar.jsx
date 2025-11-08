import { Car, Gauge, Sparkles } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-40 backdrop-blur bg-black/40 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 text-white">
          <Car className="h-6 w-6 text-red-500" />
          <span className="font-semibold tracking-tight">OmniDrive</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-300">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#models" className="hover:text-white transition-colors">Models</a>
          <a href="#cta" className="hover:text-white transition-colors">Get Started</a>
        </nav>
        <button className="inline-flex items-center gap-2 rounded-full bg-red-600/90 hover:bg-red-600 text-white px-4 py-2 text-sm font-medium transition-colors">
          <Sparkles className="h-4 w-4" /> Live Demo
        </button>
      </div>
    </header>
  );
}
