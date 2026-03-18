import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const Gallery = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Salon Work', 'Makeup Work', 'Student Training'];

  const images = [
    { url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=800', category: 'Makeup Work' },
    { url: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=800', category: 'Salon Work' },
    { url: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=800', category: 'Salon Work' },
    { url: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=800', category: 'Student Training' },
    { url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800', category: 'Makeup Work' },
    { url: 'https://images.unsplash.com/photo-1595476108010-b4d1f80d77d2?q=80&w=800', category: 'Student Training' },
  ];

  const filteredImages = filter === 'All' ? images : images.filter(img => img.category === filter);

  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-silk-dark font-semibold tracking-widest uppercase text-sm mb-4 block">Visual Journey</span>
          <h2 className="text-4xl md:text-5xl text-gray-900">Our Gallery</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                filter === cat ? 'bg-silk-dark text-white shadow-lg' : 'bg-pink-50 text-gray-600 hover:bg-pink-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode='popLayout'>
            {filteredImages.map((img, idx) => (
              <motion.div
                key={img.url}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer"
              >
                <img
                  src={img.url}
                  alt={img.category}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-silk-dark/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-serif italic text-xl">{img.category}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
