import React from 'react'
import { motion } from 'framer-motion'
import { Target, Eye, Users, Award, Heart } from 'lucide-react'

const About = () => {
  const team = [
    {
      name: 'Grace Wanjiku',
      role: 'Head Stylist & Owner',
      specialty: 'Hair & Makeup Specialist',
      experience: '8+ years'
    },
    {
      name: 'Sarah Mwende',
      role: 'Nails & Spa Specialist',
      specialty: 'Nail Art & Relaxation Therapy',
      experience: '5+ years'
    },
    {
      name: 'Joyce Atieno',
      role: 'Bridal Specialist',
      specialty: 'Bridal Makeup & Hairstyling',
      experience: '6+ years'
    }
  ]

  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Quality Excellence',
      description: 'We use only premium products and maintain the highest standards in all our services.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Client Empowerment',
      description: 'We believe in empowering women through beauty, helping them discover their confidence.'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Modern Trends',
      description: 'Stay updated with the latest beauty trends and techniques from around the world.'
    }
  ]

  return (
    <div className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-serif font-bold text-gray-800 mb-4">
            About Smartfuture Salon
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Where beauty meets empowerment, and every woman discovers her unique glow.
          </p>
        </motion.div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-serif font-bold text-gray-800 mb-6">
              Our Story
            </h2>
            <p className="text-gray-600 mb-4">
              Founded with a vision to redefine beauty standards in Nairobi, Smartfuture Salon 
              has been at the forefront of the beauty industry since our establishment. We believe 
              that beauty is not just about appearance, but about confidence, empowerment, and 
              self-expression.
            </p>
            <p className="text-gray-600 mb-4">
              Our journey began with a simple mission: to create a space where women can 
              experience premium beauty treatments while feeling valued, heard, and empowered. 
              Today, we continue to uphold this mission through our dedicated team of 
              professionals and our commitment to excellence.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div 
              className="w-full h-80 bg-cover bg-center rounded-lg"
              style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80")'
              }}
            ></div>
          </motion.div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <Target className="w-12 h-12 text-gold mb-4" />
            <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600">
              To provide exceptional beauty services that enhance natural beauty, boost confidence, 
              and empower women to embrace their unique selves through personalized care and 
              professional expertise.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <Eye className="w-12 h-12 text-gold mb-4" />
            <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-600">
              To be Nairobi's leading beauty destination, recognized for innovation, excellence, 
              and our commitment to empowering women through beauty and self-care experiences.
            </p>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-serif font-bold text-gray-800 text-center mb-12">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="text-center p-6"
              >
                <div className="text-gold mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-serif font-semibold text-gray-800 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-3xl font-serif font-bold text-gray-800 text-center mb-12">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={member.name}
                className="bg-white rounded-lg shadow-lg overflow-hidden text-center"
              >
                <div 
                  className="h-48 bg-cover bg-center"
                  style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80")'
                  }}
                ></div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-semibold text-gray-800 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-gold font-semibold mb-2">{member.role}</p>
                  <p className="text-gray-600 mb-2">{member.specialty}</p>
                  <p className="text-sm text-gray-500">Experience: {member.experience}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About