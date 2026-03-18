import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Clock, Award, BookOpen } from 'lucide-react';

const Academy = () => {
  const courses = [
    {
      title: "Professional Makeup Course",
      duration: "3 Months",
      desc: "Master the art of professional makeup from basics to advanced techniques.",
      features: ["Practical Training", "Product Knowledge", "Certification"]
    },
    {
      title: "Bridal Makeup Course",
      duration: "1 Month",
      desc: "Specialized training in traditional and modern bridal makeup looks.",
      features: ["Hairstyling Basics", "Draping Techniques", "Portfolio Building"]
    },
    {
      title: "Beauty Therapist Course",
      duration: "4 Months",
      desc: "Comprehensive skin care, facials, and body treatment training.",
      features: ["Skin Analysis", "Equipment Usage", "Client Consultation"]
    },
    {
      title: "Hair Styling Course",
      duration: "2 Months",
      desc: "Learn creative hair styling, cuts, and chemical treatments.",
      features: ["Chemical Theory", "Modern Cuts", "Styling Tools"]
    }
  ];

  return (
    <section id="academy" className="section-padding bg-beige/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="mb-8 md:mb-0">
            <span className="text-silk-dark font-semibold tracking-widest uppercase text-sm mb-4 block">Build Your Career</span>
            <h2 className="text-4xl md:text-5xl text-gray-900">Beauty Academy Courses</h2>
          </div>
          <div className="flex items-center space-x-4 text-silk-dark font-medium">
            <Award className="w-6 h-6" />
            <span>ISO Certified Training Center</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {courses.map((course, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-pink-50 flex flex-col md:flex-row gap-8 hover:shadow-md transition-shadow"
            >
              <div className="md:w-1/3 aspect-square bg-blush rounded-2xl flex items-center justify-center">
                <GraduationCap className="w-16 h-16 text-silk-dark opacity-20" />
              </div>
              <div className="md:w-2/3">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-2xl font-serif font-bold text-gray-900">{course.title}</h3>
                </div>
                <div className="flex items-center text-gold text-sm font-medium mb-4">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{course.duration}</span>
                </div>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  {course.desc}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {course.features.map((f, fIdx) => (
                    <span key={fIdx} className="bg-pink-50 text-silk-dark text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full">
                      {f}
                    </span>
                  ))}
                </div>
                <a href="#enroll" className="text-silk-dark font-bold text-sm uppercase tracking-widest flex items-center hover:translate-x-2 transition-transform">
                  Enroll Now <BookOpen className="ml-2 w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Academy;
