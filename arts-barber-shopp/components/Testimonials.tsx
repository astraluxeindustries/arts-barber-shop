import React from 'react';
import { motion } from 'framer-motion';
import { REVIEWS, BUSINESS_INFO } from '../constants';
import { Star, Quote } from 'lucide-react';
import Button from './ui/Button';

const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-32 bg-zinc-950">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8">The Best of the Best</h2>
          
          {/* Google Review Widget Mockup */}
          <div className="bg-white rounded-xl max-w-md mx-auto p-8 shadow-2xl">
             <div className="flex justify-center mb-4">
               {/* Google Logo Mock */}
               <span className="font-bold text-2xl text-slate-600">Google</span>
             </div>
             
             <div className="flex justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                   <Star key={i} fill="#FBBF24" className="text-amber-400 w-8 h-8" />
                ))}
             </div>
             
             <p className="text-slate-600 font-medium mb-6">
                {BUSINESS_INFO.rating} rating from {BUSINESS_INFO.reviewCount} reviews
             </p>
             
             <Button variant="primary" className="w-full !text-sm">
                Leave a Review
             </Button>
          </div>
        </motion.div>

        {/* Individual Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          {REVIEWS.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-zinc-900 p-8 border border-zinc-800 hover:border-amber-900 transition-colors group"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-zinc-800 overflow-hidden">
                     <img src={review.avatar} alt={review.author} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-200 text-sm">{review.author}</h4>
                    <span className="text-xs text-zinc-500">Local Guide</span>
                  </div>
                </div>
                <div className="flex text-amber-500">
                  {[...Array(review.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
              </div>
              
              <p className="text-zinc-400 text-sm leading-relaxed group-hover:text-zinc-300 transition-colors">
                "{review.text}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;