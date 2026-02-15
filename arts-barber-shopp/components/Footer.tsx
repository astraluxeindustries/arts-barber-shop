import React from 'react';
import { BUSINESS_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-zinc-500 py-12 border-t border-zinc-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-2xl font-serif font-bold text-white mb-2">{BUSINESS_INFO.name}</h3>
            <p className="text-sm tracking-wide">PREMIUM CUTS IN ST. GEORGE, UTAH.</p>
          </div>
          
          <div className="flex space-x-8 text-xs font-bold uppercase tracking-widest">
            <a href="#services" className="hover:text-amber-500 transition-colors">Services</a>
            <a href="#about" className="hover:text-amber-500 transition-colors">About</a>
            <a href="#contact" className="hover:text-amber-500 transition-colors">Contact</a>
          </div>
        </div>
        
        <div className="border-t border-zinc-900 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-600">
          <p>&copy; {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed for excellence.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;