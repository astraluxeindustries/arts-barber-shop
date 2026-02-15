import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { BUSINESS_INFO } from '../constants';
import Button from './ui/Button';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-black/95 backdrop-blur-md py-4 border-b border-zinc-800' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a href="#" className="flex items-center gap-2 group">
             {/* Logo Icon mockup */}
             <div className="w-8 h-8 rounded-full border border-white flex items-center justify-center group-hover:border-amber-500 transition-colors">
                <span className="font-serif text-white group-hover:text-amber-500 transition-colors">A</span>
             </div>
             <span className="text-xl font-bold font-serif tracking-widest text-white">
                ART'S <span className="font-light text-zinc-400">BARBERSHOP</span>
             </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-bold uppercase tracking-widest text-zinc-300 hover:text-amber-500 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Button 
              variant="primary"
              onClick={() => window.location.href = `tel:${BUSINESS_INFO.phone.replace(/\D/g, '')}`}
              className="!py-3 !px-6"
            >
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-white hover:text-amber-500 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-40 bg-zinc-950 flex flex-col justify-center items-center md:hidden"
          >
            <div className="flex flex-col space-y-8 text-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-2xl font-serif text-white hover:text-amber-500 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-8">
                 <Button variant="primary" onClick={() => window.location.href = `tel:${BUSINESS_INFO.phone.replace(/\D/g, '')}`}>
                  Book Now
                 </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;