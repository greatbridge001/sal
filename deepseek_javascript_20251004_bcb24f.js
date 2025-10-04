import React from 'react'
import { motion } from 'framer-motion'
import { Scissors, Sparkles, Heart, Crown, Briefcase, Star } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: <Scissors className="w-12 h-12" />,
      title: 'Hair Styling',
      description: 'Modern cuts, coloring, treatments for all hair types',
      price: 'Starting from KES 1,500',
      features: ['Hair Cutting', 'Coloring & Highlights', 'Treatments', 'Braiding', 'Extensions']
    },
    {
      icon: <Sparkles className="w-12 h-12" />,
      title: 'Nails & Makeup',
      description: 'Professional manicures, pedicures, and stunning makeup',
      price: 'Starting from KES 1,200',
      features: ['Manicure', 'Pedicure', 'Nail Art', 'Makeup Application', 'Bridal Makeup']
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: 'Spa & Skincare',
      description: 'Relaxing treatments and personalized skincare routines',
      price: 'Starting from KES 3,000',
      features: ['Facials', 'Body Massage', 'Waxing', 'Skincare Consultation', 'Treatment Packages']
    },
    {
      icon: <Crown className="w-12 h-12" />,
      title: 'Bridal Packages',
      description: 'Complete bridal beauty packages for your special day',
      price: 'Starting from KES 15,000',
      features: ['Bridal Makeup', 'Hairstyling', 'Nail Services', 'Pre-wedding Care', 'Bridal Party Packages']
    },
    {
      icon: <Briefcase className="w-12 h-12" />,
      title: 'Corporate Looks',
      description: 'Professional styling for business and corporate events',
      price: 'Starting from KES 2,000',
      features: ['Professional Makeup', 'Business Hair Styling', 'Quick Services', 'Group Packages', 'Office Visits']
    }
  ]

  return (
    <div className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-serif font-bold text-gray-800 mb-4">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of premium beauty services designed 
            to enhance your natural beauty and boost your confidence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-8">
                <div className="text-gold mb-4">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <p className="text-gold font-semibold text-lg mb-6">
                  {service.price}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-600">
                      <Star size={16} className="text-gold mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <a 
                  href="/booking" 
                  className="btn-primary w-full text-center block"
                >
                  Book Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-gradient-to-r from-gold to-pink-500 rounded-lg p-8 text-center text-white"
        >
          <h2 className="text-3xl font-serif font-bold mb-4">
            Ready to Experience Premium Beauty Care?
          </h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            Book your appointment today and let our expert stylists help you 
            discover your best look yet.
          </p>
          <a href="/booking" className="btn-primary bg-white text-gold hover:bg-gray-100">
            Book Your Appointment
          </a>
        </motion.div>
      </div>
    </div>
  )
}

export default Services