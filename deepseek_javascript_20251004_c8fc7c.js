import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Scissors, Sparkles, Heart, Star } from 'lucide-react'

const Home = () => {
  const services = [
    {
      icon: <Scissors className="w-8 h-8" />,
      title: 'Hair Styling',
      description: 'Modern cuts, coloring, and treatments for all hair types'
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Nails & Makeup',
      description: 'Professional manicures, pedicures, and stunning makeup'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Spa & Skincare',
      description: 'Relaxing treatments and personalized skincare routines'
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-r from-pink-50 to-gold/10">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80")'
          }}
        ></div>
        
        <div className="relative z-20 container-custom h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-2xl"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6">
              Redefining <span className="text-gold">Beauty</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Empowering Women with Smartfuture
            </p>
            <p className="text-lg mb-8 text-gray-300">
              Experience luxury beauty treatments in the heart of Nairobi. 
              Where modern trends meet exceptional service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/booking" className="btn-primary inline-flex items-center justify-center">
                Book Now <ArrowRight className="ml-2" size={20} />
              </a>
              <a href="/services" className="btn-secondary inline-flex items-center justify-center">
                Our Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Highlights */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif font-bold text-gray-800 mb-4">
              Premium Beauty Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive range of beauty treatments designed to enhance your natural beauty and boost your confidence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center p-8 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-gold mb-4 flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-serif font-semibold mb-4 text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-gold to-pink-500">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <h2 className="text-4xl font-serif font-bold mb-6">
              Ready to Transform Your Look?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Book your appointment today and experience the Smartfuture difference. 
              Your journey to enhanced beauty starts here.
            </p>
            <a href="/booking" className="btn-primary bg-white text-gold hover:bg-gray-100">
              Book Your Appointment
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home