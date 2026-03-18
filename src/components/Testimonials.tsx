import React from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      name: "Priya Sharma",
      role: "Salon Client",
      text: "The best ladies-only salon in Chembur! The staff is so professional and the atmosphere is incredibly relaxing. My bridal makeup was exactly what I dreamed of.",
      rating: 5
    },
    {
      name: "Anjali Gupta",
      role: "Academy Student",
      text: "I completed my Professional Makeup Course here. The trainers are highly experienced and the practical training gave me the confidence to start my own freelance career.",
      rating: 5
    },
    {
      name: "Sneha Patil",
      role: "Salon Client",
      text: "Highly hygienic and friendly setup. Their hair spa is a must-try! I've been a regular customer for 2 years now and I wouldn't go anywhere else.",
      rating: 5
    },
    {
      name: "Meera Iyer",
      role: "Academy Student",
      text: "The Beauty Therapist course was very comprehensive. I learned everything from skin analysis to advanced facial techniques. Great value for money!",
      rating: 5
    }
  ];

  return (
    <section className="section-padding bg-blush">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-silk-dark font-semibold tracking-widest uppercase text-sm mb-4 block">Kind Words</span>
          <h2 className="text-4xl md:text-5xl text-gray-900">What Our Clients Say</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm relative"
            >
              <Quote className="absolute top-6 right-6 text-pink-100 w-12 h-12" />
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} className="text-gold text-lg">★</span>
                ))}
              </div>
              <p className="text-gray-600 italic mb-6 leading-relaxed relative z-10">
                "{review.text}"
              </p>
              <div>
                <h4 className="font-bold text-gray-900">{review.name}</h4>
                <span className="text-xs text-silk-dark font-medium uppercase tracking-wider">{review.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
