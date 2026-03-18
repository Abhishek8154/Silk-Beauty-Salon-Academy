import React from 'react';
import { Instagram, Facebook, Phone, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-silk-dark text-white pt-20 pb-10 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex flex-col mb-6">
              <span className="text-2xl font-serif font-bold tracking-tight">Silk Beauty</span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-pink-300">Salon & Academy</span>
            </div>
            <p className="text-pink-100 text-sm leading-relaxed mb-8">
              Empowering women through beauty and professional training. Your sanctuary for expert care and career growth in Chembur.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-pink-100 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Salon Services</a></li>
              <li><a href="#academy" className="hover:text-white transition-colors">Academy Courses</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Gallery</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-6">Our Services</h4>
            <ul className="space-y-4 text-pink-100 text-sm">
              <li>Bridal Makeup</li>
              <li>Hair Styling & Spa</li>
              <li>Skin Care Facials</li>
              <li>Manicure & Pedicure</li>
              <li>Professional Courses</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-pink-100 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 flex-shrink-0 text-pink-300" />
                <span>Chembur Camp, Chembur, Mumbai - 400074</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 flex-shrink-0 text-pink-300" />
                <span>+91 7304622855</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center text-pink-200 text-xs gap-4">
          <p>© 2026 Silk Beauty Salon & Academy. All Rights Reserved.</p>
          <p className="flex items-center">
            Made with <Heart className="w-3 h-3 mx-1 text-pink-400 fill-pink-400" /> for Women in Chembur
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
