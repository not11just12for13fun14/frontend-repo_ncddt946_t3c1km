import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import ModelsShowcase from './components/ModelsShowcase';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-black font-['Inter',_'Inter_var',_'system-ui']">
      <Navbar />
      <Hero />
      <Features />
      <ModelsShowcase />
      <CTA />
      <footer className="border-t border-white/10 bg-black/80 text-gray-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-sm flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} OmniDrive. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#models" className="hover:text-white">Models</a>
            <a href="#cta" className="hover:text-white">Get Started</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
