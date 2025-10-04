import React from 'react'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      service: 'Bridal Package',
      rating: 5,
      comment: 'The team at Smartfuture made me feel like a princess on my wedding day! Their attention to detail and professionalism was outstanding.',
      before: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80',
      after: 'https://images.unsplash.com/photo-1512496015859-e910535c0f4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80'
    },
    {
      id: 2,
      name: 'Grace Mwende',
      service: 'Hair & Makeup',
      rating: 5,
      comment: 'I\'ve never felt more beautiful! The stylists truly understand African hair and skin tones. Highly recommended!',
      before: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1976&q=80',
      after: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80'
    },
    {
      id: 3,
      name: 'Linda Kamau',
      service: 'Spa Treatment',
      rating: 5,
      comment: 'The most relaxing experience ever! The spa treatments are heavenly and the staff is incredibly professional.',
      before: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      after: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    }
  ]

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={20}
        className={i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
      />
    ))
  }

  return (
    <div className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-serif font-bold text-gray-800 mb-4">
            Client Testimonials
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover what our clients are saying about their experiences at Smartfuture Salon.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg p-6 relative"
            >
              <Quote className="absolute top-4 right-4 text-gold opacity-20 w-12 h-12" />
              
              <div className="flex items-center mb-4">
                <div className="flex mr-4">
                  {renderStars(testimonial.rating)}
                </div>
                <span className="text-sm text-gray-500">{testimonial.service}</span>
              </div>
              
              <p className="text-gray-600 mb-4 italic">
                "{testimonial.comment}"
              </p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Before & After Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-serif font-bold text-gray-800 text-center mb-12">
            Transformations
          </h2>
          
          <div className="space-y-12">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-serif font-semibold text-gray-800 mb-4">
                    {testimonial.name} - {testimonial.service}
                  </h3>
                  <p className="text-gray-600 mb-6 italic">"{testimonial.comment}"</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="text-center">
                      <h4 className="text-lg font-semibold text-gray-800 mb-3">Before</h4>
                      <div className="aspect-square overflow-hidden rounded-lg bg-gray-200">
                        <img
                          src={testimonial.before}
                          alt={`Before - ${testimonial.name}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <h4 className="text-lg font-semibold text-gray-800 mb-3">After</h4>
                      <div className="aspect-square overflow-hidden rounded-lg bg-gray-200">
                        <img
                          src={testimonial.after}
                          alt={`After - ${testimonial.name}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-gold to-pink-500 rounded-lg p-8 text-center text-white"
        >
          <h2 className="text-3xl font-serif font-bold mb-4">
            Ready for Your Transformation?
          </h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            Join our satisfied clients and experience the Smartfuture difference today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/booking" className="btn-primary bg-white text-gold hover:bg-gray-100">
              Book Appointment
            </a>
            <a href="/gallery" className="btn-secondary border-2 border-white">
              View Gallery
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Testimonials