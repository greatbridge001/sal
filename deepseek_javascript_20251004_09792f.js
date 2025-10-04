import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ShoppingCart, Plus, Minus, Star } from 'lucide-react'
import { processMPesaPayment } from '../utils/mpesa'

const Shop = () => {
  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)

  const products = [
    {
      id: 1,
      name: 'Professional Hair Oil',
      category: 'Hair Care',
      price: 1200,
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1595341888016-a392ef81b7de?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80',
      description: 'Natural hair oil for growth and shine'
    },
    {
      id: 2,
      name: 'Luxury Wig Collection',
      category: 'Wigs',
      price: 4500,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1522338147997-18c66d0bfb0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80',
      description: 'Premium quality human hair wigs'
    },
    {
      id: 3,
      name: 'Skincare Cream',
      category: 'Skincare',
      price: 1800,
      rating: 4.3,
      image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80',
      description: 'Moisturizing cream for all skin types'
    },
    {
      id: 4,
      name: 'Nail Polish Set',
      category: 'Nails',
      price: 800,
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80',
      description: '6-piece premium nail polish collection'
    },
    {
      id: 5,
      name: 'Makeup Brush Set',
      category: 'Makeup',
      price: 2500,
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1512496015859-e910535c0f4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80',
      description: 'Professional makeup brush collection'
    },
    {
      id: 6,
      name: 'Spa Gift Set',
      category: 'Spa',
      price: 3200,
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      description: 'Complete spa experience at home'
    }
  ]

  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id)
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prevCart, { ...product, quantity: 1 }]
    })
  }

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId))
  }

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    )
  }

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0)
  }

  const handleCheckout = async () => {
    if (cart.length === 0) return

    try {
      // Process M-Pesa payment
      await processMPesaPayment('0769642043', getTotalPrice())
      
      // Clear cart and show success message
      setCart([])
      setShowCart(false)
      alert('Order placed successfully! You will receive an M-Pesa prompt.')
    } catch (error) {
      alert('Payment failed. Please try again.')
    }
  }

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}
      />
    ))
  }

  return (
    <div className="section-padding bg-gray-50 min-h-screen">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-serif font-bold text-gray-800 mb-4">
            Beauty Shop
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our premium beauty products and accessories for your home care routine.
          </p>
        </motion.div>

        {/* Cart Button */}
        <div className="flex justify-end mb-8">
          <button
            onClick={() => setShowCart(true)}
            className="btn-primary flex items-center relative"
          >
            <ShoppingCart size={20} className="mr-2" />
            Cart
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-pink-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
                {cart.reduce((total, item) => total + item.quantity, 0)}
              </span>
            )}
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gold font-semibold">{product.category}</span>
                  <div className="flex items-center">
                    {renderStars(product.rating)}
                    <span className="text-sm text-gray-500 ml-1">({product.rating})</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-serif font-semibold text-gray-800 mb-2">
                  {product.name}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4">
                  {product.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gold">KES {product.price}</span>
                  <button
                    onClick={() => addToCart(product)}
                    className="btn-primary text-sm py-2 px-4"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Cart Sidebar */}
        {showCart && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-50 overflow-hidden"
          >
            <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setShowCart(false)}></div>
            <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
              <div className="p-6 h-full flex flex-col">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-serif font-semibold">Shopping Cart</h2>
                  <button onClick={() => setShowCart(false)} className="text-gray-500 hover:text-gray-700">
                    ✕
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto">
                  {cart.length === 0 ? (
                    <p className="text-gray-500 text-center">Your cart is empty</p>
                  ) : (
                    cart.map((item) => (
                      <div key={item.id} className="flex items-center space-x-4 mb-4 pb-4 border-b">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded"
                        />
                        <div className="flex-1">
                          <h4 className="font-semibold">{item.name}</h4>
                          <p className="text-gold font-bold">KES {item.price}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 rounded-full hover:bg-gray-200"
                          >
                            <Minus size={16} />
                          </button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 rounded-full hover:bg-gray-200"
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          Remove
                        </button>
                      </div>
                    ))
                  )}
                </div>

                {cart.length > 0 && (
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-lg font-semibold">Total:</span>
                      <span className="text-2xl font-bold text-gold">KES {getTotalPrice()}</span>
                    </div>
                    <button
                      onClick={handleCheckout}
                      className="w-full btn-primary"
                    >
                      Checkout with M-Pesa
                    </button>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default Shop