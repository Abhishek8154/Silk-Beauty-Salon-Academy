import React from 'react';
import { Phone, MapPin, Mail, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Info & Map */}
          <div>
            <span className="text-silk-dark font-semibold tracking-widest uppercase text-sm mb-4 block">Get In Touch</span>
            <h2 className="text-4xl md:text-5xl text-gray-900 mb-8">Visit Our Salon</h2>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blush rounded-full flex items-center justify-center text-silk-dark flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Address</h4>
                  <p className="text-gray-600">
                    Shop No. T119 1A T 119 B, Gandhi Market, next to Mohan Tailor, Chembur Camp, Chembur, Mumbai, Maharashtra 400074
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blush rounded-full flex items-center justify-center text-silk-dark flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Phone</h4>
                  <a href="tel:+917304622855" className="text-gray-600 hover:text-silk-dark transition-colors">
                    +91 7304622855
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blush rounded-full flex items-center justify-center text-silk-dark flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Email</h4>
                  <p className="text-gray-600">info@silkbeauty.com</p>
                </div>
              </div>
            </div>

            {/* Embedded Map */}
            <div className="rounded-2xl overflow-hidden h-64 shadow-inner border border-pink-50">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.123456789!2d72.89!3d19.05!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8b!2sChembur%20Camp!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Forms */}
          <div className="space-y-12">
            {/* Appointment Form */}
            <div id="book" className="bg-blush p-8 md:p-10 rounded-3xl border border-pink-100">
              <h3 className="text-2xl font-serif font-bold mb-6 text-silk-dark">Book Appointment</h3>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-xl border border-pink-200 focus:outline-none focus:ring-2 focus:ring-silk-dark/20" required />
                  <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-xl border border-pink-200 focus:outline-none focus:ring-2 focus:ring-silk-dark/20" required />
                </div>
                <select className="w-full px-4 py-3 rounded-xl border border-pink-200 focus:outline-none focus:ring-2 focus:ring-silk-dark/20 bg-white">
                  <option>Select Service</option>
                  <option>Haircut & Styling</option>
                  <option>Facial & Skin Care</option>
                  <option>Bridal Makeup</option>
                  <option>Manicure & Pedicure</option>
                </select>
                <div className="grid md:grid-cols-2 gap-4">
                  <input type="date" className="w-full px-4 py-3 rounded-xl border border-pink-200 focus:outline-none focus:ring-2 focus:ring-silk-dark/20" />
                  <input type="time" className="w-full px-4 py-3 rounded-xl border border-pink-200 focus:outline-none focus:ring-2 focus:ring-silk-dark/20" />
                </div>
                <button type="submit" className="btn-primary w-full">Confirm Booking</button>
              </form>
            </div>

            {/* Academy Form */}
            <div id="enroll" className="bg-beige/30 p-8 md:p-10 rounded-3xl border border-gold/10">
              <h3 className="text-2xl font-serif font-bold mb-6 text-gray-900">Course Enrollment</h3>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-xl border border-gold/20 focus:outline-none focus:ring-2 focus:ring-gold/20" required />
                  <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-xl border border-gold/20 focus:outline-none focus:ring-2 focus:ring-gold/20" required />
                </div>
                <select className="w-full px-4 py-3 rounded-xl border border-gold/20 focus:outline-none focus:ring-2 focus:ring-gold/20 bg-white">
                  <option>Course Interested In</option>
                  <option>Professional Makeup Course</option>
                  <option>Bridal Makeup Course</option>
                  <option>Beauty Therapist Course</option>
                  <option>Hair Styling Course</option>
                </select>
                <textarea placeholder="Your Message (Optional)" rows={3} className="w-full px-4 py-3 rounded-xl border border-gold/20 focus:outline-none focus:ring-2 focus:ring-gold/20"></textarea>
                <button type="submit" className="btn-outline w-full !border-gold !text-gold hover:!bg-gold hover:!text-white">Enroll Now</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
