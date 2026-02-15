import React from 'react';
import { motion } from 'framer-motion';
import { BUSINESS_INFO } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-zinc-950 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 order-2 lg:order-1"
          >
            <div className="mb-6">
               <span className="text-amber-500 font-bold uppercase tracking-widest text-sm">Since 2010</span>
               <div className="h-0.5 w-12 bg-amber-500 mt-2"></div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8">
              Our Barber Shop
            </h2>
            
            <p className="text-zinc-400 leading-relaxed mb-6 text-lg">
              Ernesto's Barber Shop (Art's) is delighted to be a part of the St. George community in Southern Utah, providing exceptional grooming services for every client.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-10 text-lg">
              Whether you're sticking with your signature look or craving a fresh new cut, our skilled barbers are here to craft the perfect hairstyle that suits you. Book your appointment now and get ready to look your sharpest!
            </p>
            
            <div className="flex gap-16 border-t border-zinc-800 pt-8">
              <div>
                <span className="block text-4xl font-serif font-bold text-white mb-1">{BUSINESS_INFO.rating}</span>
                <span className="text-xs text-zinc-500 uppercase tracking-widest font-bold">Google Rating</span>
              </div>
              <div>
                <span className="block text-4xl font-serif font-bold text-white mb-1">100+</span>
                <span className="text-xs text-zinc-500 uppercase tracking-widest font-bold">Happy Clients</span>
              </div>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 order-1 lg:order-2 relative"
          >
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1634480643265-27a147da0610?q=80&w=2000&auto=format&fit=crop" 
                alt="Barber Tools" 
                className="w-full h-auto object-cover shadow-2xl border border-zinc-800"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -top-6 -right-6 w-full h-full border-2 border-amber-500/20 z-0"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;