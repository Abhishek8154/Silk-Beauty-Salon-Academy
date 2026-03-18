import React from 'react';
import { Shield, Users, Award, Sparkles, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Ladies Only Safe Environment",
      desc: "A comfortable and private space designed exclusively for women's comfort."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Experienced Trainers",
      desc: "Learn from industry veterans with years of professional experience."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Certified Courses",
      desc: "Get recognized certifications that help you build a successful career."
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Affordable Services",
      desc: "Premium beauty treatments at prices that won't break the bank."
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Hygienic Setup",
      desc: "We follow strict sterilization and hygiene protocols for all treatments."
    }
  ];

  return (
    <section className="section-padding bg-silk-dark text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-pink-300 font-semibold tracking-widest uppercase text-sm mb-4 block">Why Silk Beauty</span>
          <h2 className="text-4xl md:text-5xl">Excellence in Every Detail</h2>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center group"
            >
              <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-gold/20 group-hover:scale-110 transition-all">
                <div className="text-gold">{reason.icon}</div>
              </div>
              <h4 className="text-lg font-serif font-bold mb-3">{reason.title}</h4>
              <p className="text-pink-100 text-sm leading-relaxed opacity-80">
                {reason.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
