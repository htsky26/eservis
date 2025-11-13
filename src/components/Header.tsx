import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark-bg/80 backdrop-blur-lg border-b border-dark-bg-tertiary">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <img src="/e servis arancio.png" alt="e' SERVIS" className="h-10" />

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-300 hover:text-primary-orange transition-colors duration-300"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('servizi')}
              className="text-gray-300 hover:text-primary-orange transition-colors duration-300"
            >
              Servizi
            </button>
            <button
              onClick={() => scrollToSection('team')}
              className="text-gray-300 hover:text-primary-orange transition-colors duration-300"
            >
              Chi Siamo
            </button>
            <button
              onClick={() => scrollToSection('contatti')}
              className="px-6 py-2.5 bg-primary-orange text-dark-bg font-medium rounded-full hover:bg-primary-orange-light transition-all duration-300 hover:scale-105"
            >
              Contatti
            </button>
          </div>

          <button
            className="md:hidden text-primary-orange"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 animate-fade-in">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left text-gray-300 hover:text-primary-orange transition-colors duration-300"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('servizi')}
              className="block w-full text-left text-gray-300 hover:text-primary-orange transition-colors duration-300"
            >
              Servizi
            </button>
            <button
              onClick={() => scrollToSection('team')}
              className="block w-full text-left text-gray-300 hover:text-primary-orange transition-colors duration-300"
            >
              Chi Siamo
            </button>
            <button
              onClick={() => scrollToSection('contatti')}
              className="block w-full text-left px-6 py-2.5 bg-primary-orange text-dark-bg font-medium rounded-full hover:bg-primary-orange-light transition-all duration-300"
            >
              Contatti
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
