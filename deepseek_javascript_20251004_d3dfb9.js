import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, User, Clock, ArrowRight } from 'lucide-react'

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Top 5 Hair Care Tips for African Hair',
      excerpt: 'Discover essential tips to maintain healthy, beautiful natural hair in Nairobi climate.',
      category: 'Hair Care',
      readTime: '5 min read',
      date: '2024-03-15',
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80'
    },
    {
      id: 2,
      title: 'The Ultimate Skincare Routine for Busy Women',
      excerpt: 'Learn how to maintain glowing skin with a simple yet effective daily routine.',
      category: 'Skincare',
      readTime: '4 min read',
      date: '2024-03-10',
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    },
    {
      id: 3,
      title: 'Bridal Beauty: Preparing for Your Big Day',
      excerpt: 'Your complete guide to bridal beauty preparation starting 6 months before the wedding.',
      category: 'Bridal',
      readTime: '8 min read',
      date: '2024-03-05',
      image: 'https://images.unsplash.com/photo-1512496015859-e910535c0f4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80'
    },
    {
      id: 4,
      title: 'Nail Trends 2024: What\'s Hot in Nairobi',
      excerpt: 'Explore the latest nail art designs and colors trending this season.',
      category: 'Nails',
      readTime: '3 min read',
      date: '2024-03-01',
      image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80'
    },
    {
      id: 5,
      title: 'Empowerment Through Beauty: Our Philosophy',
      excerpt: 'How Smartfuture Salon is redefining beauty standards and empowering women in Kenya.',
      category: 'Empowerment',
      readTime: '6 min read',
      date: '2024-02-25',
      image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80'
    },
    {
      id: 6,
      title: 'Seasonal Skincare: Adapting to Nairobi Weather',
      excerpt: 'Adjust your skincare routine for the changing seasons in Nairobi.',
      category: 'Skincare',
      readTime: '4 min read',
      date: '2024-02-20',
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    }
  ]

  const categories = ['All', 'Hair Care', 'Skincare', 'Bridal', 'Nails', 'Empowerment', 'Makeup']

  return (
    <div className="section-padding bg-gray-50 min-h-screen">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-serif font-bold text-gray-800 mb-4">
            Beauty Blog & Tips
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest beauty trends, tips, and empowerment stories from Smartfuture Salon.
          </p>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-3 rounded-full bg-white text-gray-700 font-medium hover:bg-gold hover:text-white transition-all duration-300 shadow-sm"
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span className="bg-gold text-white px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                  <div className="flex items-center ml-4">
                    <Calendar size={14} className="mr-1" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center ml-4">
                    <Clock size={14} className="mr-1" />
                    {post.readTime}
                  </div>
                </div>
                
                <h2 className="text-xl font-serif font-semibold text-gray-800 mb-3 line-clamp-2">
                  {post.title}
                </h2>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <User size={14} className="mr-1" />
                    <span>Smartfuture Team</span>
                  </div>
                  <button className="text-gold hover:text-yellow-600 font-semibold flex items-center transition-colors">
                    Read More
                    <ArrowRight size={16} className="ml-1" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-gradient-to-r from-gold to-pink-500 rounded-lg p-8 text-center text-white"
        >
          <h2 className="text-3xl font-serif font-bold mb-4">
            Stay Updated with Beauty Tips
          </h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest beauty trends and tips delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="btn-primary bg-white text-gold hover:bg-gray-100 whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Blog