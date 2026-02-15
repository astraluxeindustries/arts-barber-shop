import React from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';
import { BUSINESS_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074&auto=format&fit=crop")' }}
      >
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-black/40"></div>
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center items-center text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl"
        >
          <p className="text-amber-500 uppercase tracking-[0.2em] text-sm font-bold mb-6">
            St. George's Premier Grooming
          </p>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-none mb-8">
            Art's <br />
            <span className="italic text-zinc-300">Barbershop</span>
          </h1>
          
          <p className="text-lg text-zinc-300 mb-10 max-w-xl mx-auto leading-relaxed">
            {BUSINESS_INFO.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button onClick={() => window.location.href = `tel:${BUSINESS_INFO.phone.replace(/\D/g, '')}`} variant="primary">
              Book Appointment
            </Button>
            <Button onClick={() => document.getElementById('services')?.scrollIntoView({behavior: 'smooth'})} variant="outline">
              View Services
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;