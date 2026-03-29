import { useState, useEffect } from 'react';
import { Phone, Mail, Menu, X, Car } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="bg-blue p-2 rounded-lg">
            <Car className="text-white w-6 h-6" />
          </div>
          <div>
            <h1 className={`text-xl font-display font-extrabold tracking-tight leading-none ${isScrolled ? 'text-dark' : 'text-dark md:text-white'}`}>
              CAR CENTER
            </h1>
            <span className={`text-[10px] font-bold tracking-[0.2em] uppercase ${isScrolled ? 'text-muted' : 'text-muted md:text-blue-light'}`}>
              Baden
            </span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {['Inventory', 'Services', 'Financing', 'About Us', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className={`text-sm font-bold uppercase tracking-wider transition-colors ${
                isScrolled ? 'text-dark hover:text-blue' : 'text-white hover:text-blue-light'
              }`}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Contact Info */}
        <div className="hidden lg:flex items-center gap-6">
          <a href="tel:+49123456789" className={`flex items-center gap-2 text-sm font-bold ${isScrolled ? 'text-dark' : 'text-white'}`}>
            <Phone className="w-4 h-4 text-blue" />
            <span>+49 123 456 789</span>
          </a>
          <button className="bg-blue hover:bg-blue-dark text-white px-6 py-2.5 rounded-lg text-sm font-bold transition-all transform hover:-translate-y-0.5 shadow-lg shadow-blue/20">
            Sell Your Car
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-dark"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className={`w-6 h-6 ${isScrolled ? 'text-dark' : 'text-dark md:text-white'}`} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-border overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {['Inventory', 'Services', 'Financing', 'About Us', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="text-lg font-bold text-dark hover:text-blue"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <hr className="border-border" />
              <div className="flex flex-col gap-4">
                <a href="tel:+49123456789" className="flex items-center gap-3 text-dark font-bold">
                  <Phone className="w-5 h-5 text-blue" />
                  <span>+49 123 456 789</span>
                </a>
                <a href="mailto:info@carcenterbaden.de" className="flex items-center gap-3 text-dark font-bold">
                  <Mail className="w-5 h-5 text-blue" />
                  <span>info@carcenterbaden.de</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
