import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

const About = () => {
  const highlights = [
    "Ladies-only comfortable environment",
    "Experienced beauty professionals",
    "Certified beauty training programs",
    "Quality beauty products",
    "Friendly and hygienic atmosphere"
  ];

  return (
    <section id="about" className="section-padding bg-blush">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1000&auto=format&fit=crop"
              alt="Beauty Professional at Work"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Decorative element */}
          <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-gold/10 rounded-full -z-10 blur-2xl"></div>
          <div className="absolute -top-8 -left-8 w-32 h-32 bg-pink-200/30 rounded-full -z-10 blur-xl"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-silk-dark font-semibold tracking-widest uppercase text-sm mb-4 block">Our Story</span>
          <h2 className="text-4xl md:text-5xl mb-6 text-gray-900">Welcome to Silk Beauty Salon & Academy</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Located in the heart of Chembur, Silk Beauty Salon & Academy is a sanctuary dedicated exclusively to women. We believe that every woman deserves to feel beautiful and confident. Our salon offers a wide range of premium beauty services, while our academy empowers aspiring beauty professionals with industry-leading training.
          </p>

          <div className="space-y-4">
            {highlights.map((item, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle2 className="text-gold w-5 h-5 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <a href="#contact" className="btn-primary">
              Learn More
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
