import React from 'react';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';
import Button from './ui/Button';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 bg-black text-white border-t border-zinc-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          <div>
            <div className="mb-6">
               <span className="text-amber-500 font-bold uppercase tracking-widest text-sm">Get In Touch</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">Visit Us</h2>
            <p className="text-zinc-400 mb-12 text-lg">
              Stop by for a fresh cut or just to say hello. Walk-ins are welcome, but appointments are recommended.
            </p>

            <div className="space-y-10">
              <div className="flex items-start gap-6">
                <div className="text-amber-500 mt-1">
                  <MapPin size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 font-serif">Address</h3>
                  <p className="text-zinc-400">{BUSINESS_INFO.address}</p>
                  <p className="text-zinc-400">{BUSINESS_INFO.cityStateZip}</p>
                  <a 
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS_INFO.address + ' ' + BUSINESS_INFO.cityStateZip)}`} 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-amber-500 hover:text-amber-400 text-sm mt-3 inline-flex items-center gap-1 font-bold tracking-wider uppercase"
                  >
                    Get Directions
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="text-amber-500 mt-1">
                  <Phone size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 font-serif">Phone</h3>
                  <p className="text-zinc-400 mb-4">{BUSINESS_INFO.phone}</p>
                  <Button 
                    variant="white" 
                    className="!py-2 !px-6 !text-xs"
                    onClick={() => window.location.href = `tel:${BUSINESS_INFO.phone.replace(/\D/g, '')}`}
                  >
                    Call Now
                  </Button>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="text-amber-500 mt-1">
                  <Clock size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 font-serif">Opening Hours</h3>
                  <ul className="space-y-2 text-zinc-400">
                    {BUSINESS_INFO.hours.map((h, i) => (
                      <li key={i} className="flex justify-between w-full min-w-[240px] border-b border-zinc-900 pb-2 last:border-0">
                        <span className="font-medium text-zinc-500">{h.day}</span>
                        <span className="text-zinc-300">{h.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[500px] bg-zinc-900 relative border border-zinc-800 grayscale invert hover:filter-none transition-all duration-500">
             {/* Simulating a Google Map Embed */}
            <img 
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1748&auto=format&fit=crop" 
              alt="Map Location" 
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                 <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mb-6 shadow-xl text-black">
                    <MapPin size={32} />
                 </div>
                 <h3 className="text-3xl font-serif font-bold mb-2 text-white">{BUSINESS_INFO.name}</h3>
                 <p className="text-zinc-400 mb-8">{BUSINESS_INFO.address}</p>
                 <Button variant="primary" onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS_INFO.address + ' ' + BUSINESS_INFO.cityStateZip)}`, '_blank')}>
                    Open in Google Maps
                 </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;