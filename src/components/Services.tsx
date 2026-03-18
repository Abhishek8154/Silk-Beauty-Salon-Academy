import React from 'react';
import { motion } from 'motion/react';
import { Scissors, Sparkles, UserCheck, Heart } from 'lucide-react';

const Services = () => {
  const serviceCategories = [
    {
      title: "Hair Services",
      icon: <Scissors className="w-6 h-6" />,
      services: [
        { name: "Haircut & Styling", desc: "Professional cuts tailored to your face shape and style." },
        { name: "Hair Spa & Treatments", desc: "Deep conditioning and nourishing treatments for healthy hair." }
      ]
    },
    {
      title: "Skin & Beauty",
      icon: <Sparkles className="w-6 h-6" />,
      services: [
        { name: "Facial & Skin Care", desc: "Rejuvenating facials for a glowing and healthy complexion." },
        { name: "Waxing & Threading", desc: "Gentle and precise hair removal for smooth skin." }
      ]
    },
    {
      title: "Nail & Body",
      icon: <Heart className="w-6 h-6" />,
      services: [
        { name: "Manicure & Pedicure", desc: "Complete nail care and relaxing hand/foot massages." },
        { name: "Body Polishing", desc: "Exfoliating treatments for soft and radiant body skin." }
      ]
    },
    {
      title: "Special Occasions",
      icon: <UserCheck className="w-6 h-6" />,
      services: [
        { name: "Bridal Makeup", desc: "Stunning bridal looks for your most special day." },
        { name: "Party Makeup", desc: "Elegant makeup for weddings, parties, and events." }
      ]
    }
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-silk-dark font-semibold tracking-widest uppercase text-sm mb-4 block">What We Offer</span>
          <h2 className="text-4xl md:text-5xl text-gray-900">Our Salon Services</h2>
          <div className="w-24 h-1 bg-gold mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-blush p-8 rounded-2xl border border-pink-50 hover:shadow-xl transition-all group"
            >
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-silk-dark mb-6 group-hover:bg-silk-dark group-hover:text-white transition-colors">
                {category.icon}
              </div>
              <h3 className="text-xl font-serif font-bold mb-6 text-gray-900">{category.title}</h3>
              <ul className="space-y-6">
                {category.services.map((service, sIdx) => (
                  <li key={sIdx}>
                    <h4 className="font-semibold text-silk-dark mb-1">{service.name}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{service.desc}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
