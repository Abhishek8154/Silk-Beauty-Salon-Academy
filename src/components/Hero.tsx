import React from 'react';
import { motion } from 'motion/react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1920&auto=format&fit=crop"
          alt="Silk Beauty Salon Interior"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block text-pink-200 uppercase tracking-[0.3em] font-semibold text-sm mb-4">
            Ladies Only • Chembur, Mumbai
          </span>
          <h1 className="text-5xl md:text-7xl text-white font-serif mb-6 leading-tight">
            Enhance Your Beauty <br />
            <span className="italic text-silk-pink">with Expert Care</span>
          </h1>
          <p className="text-lg md:text-xl text-pink-50 mb-10 max-w-2xl mx-auto font-light">
            Experience the finest ladies-only beauty treatments and professional beauty training programs at Silk Beauty Salon & Academy.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#book"
              className="btn-primary w-full sm:w-auto"
            >
              Book Appointment
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#academy"
              className="btn-outline !border-white !text-white hover:!bg-white hover:!text-silk-dark w-full sm:w-auto"
            >
              Join Beauty Courses
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white opacity-60"
      >
        <div className="w-[1px] h-12 bg-white mx-auto"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
