import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-black">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Our Services</h2>
          <p className="text-zinc-400 max-w-xl mx-auto text-lg">
            Top-tier grooming services delivered with precision and care.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="flex justify-between items-baseline mb-3 border-b border-zinc-800 pb-2 group-hover:border-amber-900 transition-colors">
                <h3 className="text-xl font-bold text-white">{service.title}</h3>
                <span className="text-2xl font-serif text-amber-500 font-bold">{service.priceRange.split(' - ')[0]}</span>
              </div>
              <p className="text-zinc-500 text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;