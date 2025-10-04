import React from 'react'
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-serif font-bold text-gold mb-4">
              Smartfuture Salon
            </h3>
            <p className="text-gray-300 mb-4">
              Redefining Beauty, Empowering Women with Smartfuture. Your premier destination for luxury beauty experiences in Nairobi.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/services" className="text-gray-300 hover:text-gold transition-colors">Services</a></li>
              <li><a href="/booking" className="text-gray-300 hover:text-gold transition-colors">Book Appointment</a></li>
              <li><a href="/gallery" className="text-gray-300 hover:text-gold transition-colors">Gallery</a></li>
              <li><a href="/blog" className="text-gray-300 hover:text-gold transition-colors">Beauty Tips</a></li>
              <li><a href="/shop" className="text-gray-300 hover:text-gold transition-colors">Shop Products</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone size={16} className="mr-2 text-gold" />
                <span className="text-gray-300">0769642043</span>
              </div>
              <div className="flex items-center">
                <Mail size={16} className="mr-2 text-gold" />
                <span className="text-gray-300">smartfuture254@gmail.com</span>
              </div>
              <div className="flex items-center">
                <MapPin size={16} className="mr-2 text-gold" />
                <span className="text-gray-300">Nairobi, Kenya</span>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Opening Hours</h4>
            <div className="space-y-2 text-gray-300">
              <div className="flex justify-between">
                <span>Monday - Friday:</span>
                <span>8:00 AM - 8:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday:</span>
                <span>8:00 AM - 8:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday:</span>
                <span>10:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Smartfuture Salon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer