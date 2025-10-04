import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, User, Scissors, CheckCircle } from 'lucide-react'
import { processMPesaPayment } from '../utils/mpesa'
import { sendWhatsAppMessage } from '../utils/whatsapp'

const Booking = () => {
  const [step, setStep] = useState(1)
  const [bookingData, setBookingData] = useState({
    service: '',
    stylist: '',
    date: '',
    time: '',
    customerName: '',
    phone: '',
    email: ''
  })

  const services = [
    { id: 'hair', name: 'Hair Styling', price: 1500 },
    { id: 'nails', name: 'Nails', price: 1200 },
    { id: 'makeup', name: 'Makeup', price: 2500 },
    { id: 'spa', name: 'Spa Treatment', price: 3000 },
    { id: 'bridal', name: 'Bridal Package', price: 15000 },
    { id: 'corporate', name: 'Corporate Look', price: 2000 }
  ]

  const stylists = [
    { id: '1', name: 'Grace Wanjiku', specialty: 'Hair & Makeup' },
    { id: '2', name: 'Sarah Mwende', specialty: 'Nails & Spa' },
    { id: '3', name: 'Joyce Atieno', specialty: 'Bridal Specialist' }
  ]

  const timeSlots = [
    '08:00', '09:00', '10:00', '11:00', '12:00', 
    '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'
  ]

  const handleServiceSelect = (service) => {
    setBookingData({ ...bookingData, service })
    setStep(2)
  }

  const handleStylistSelect = (stylist) => {
    setBookingData({ ...bookingData, stylist })
    setStep(3)
  }

  const handleDateTimeSelect = (date, time) => {
    setBookingData({ ...bookingData, date, time })
    setStep(4)
  }

  const handleCustomerInfo = (e) => {
    setBookingData({ ...bookingData, [e.target.name]: e.target.value })
  }

  const handlePayment = async () => {
    try {
      // Process M-Pesa payment
      await processMPesaPayment(bookingData.phone, 500) // 500 deposit
      
      // Send booking to WhatsApp
      const message = `
New Booking Received!
      
Service: ${bookingData.service}
Stylist: ${bookingData.stylist}
Date: ${bookingData.date}
Time: ${bookingData.time}
Customer: ${bookingData.customerName}
Phone: ${bookingData.phone}
Email: ${bookingData.email}
      `
      
      await sendWhatsAppMessage(message)
      
      setStep(5)
    } catch (error) {
      alert('Payment failed. Please try again.')
    }
  }

  return (
    <div className="section-padding bg-gray-50 min-h-screen">
      <div className="container-custom max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-serif font-bold text-gray-800 mb-4">
            Book Your Appointment
          </h1>
          <p className="text-xl text-gray-600">
            Experience luxury beauty services at Smartfuture Salon
          </p>
        </motion.div>

        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex items-center justify-between relative">
            {[1, 2, 3, 4, 5].map((stepNum) => (
              <div key={stepNum} className="flex flex-col items-center z-10">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    step >= stepNum ? 'bg-gold text-white' : 'bg-gray-300 text-gray-600'
                  }`}
                >
                  {stepNum}
                </div>
                <span className="text-sm mt-2 text-gray-600">
                  {['Service', 'Stylist', 'Date/Time', 'Details', 'Confirm'][stepNum - 1]}
                </span>
              </div>
            ))}
            <div className="absolute top-5 left-0 right-0 h-1 bg-gray-300 -z-10">
              <div 
                className="h-full bg-gold transition-all duration-300"
                style={{ width: `${((step - 1) / 4) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Step 1: Service Selection */}
        {step === 1 && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <h2 className="text-2xl font-serif font-semibold mb-6 flex items-center">
              <Scissors className="mr-3 text-gold" />
              Select Service
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => handleServiceSelect(service.name)}
                  className="p-6 border-2 border-gray-200 rounded-lg hover:border-gold hover:bg-gold/5 transition-all duration-300 text-left"
                >
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {service.name}
                  </h3>
                  <p className="text-gold font-semibold">
                    From KES {service.price}
                  </p>
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Step 2: Stylist Selection */}
        {step === 2 && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <h2 className="text-2xl font-serif font-semibold mb-6 flex items-center">
              <User className="mr-3 text-gold" />
              Choose Your Stylist
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {stylists.map((stylist) => (
                <button
                  key={stylist.id}
                  onClick={() => handleStylistSelect(stylist.name)}
                  className="text-center p-6 border-2 border-gray-200 rounded-lg hover:border-gold hover:bg-gold/5 transition-all duration-300"
                >
                  <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <User size={32} className="text-gray-400" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-1">
                    {stylist.name}
                  </h3>
                  <p className="text-sm text-gray-600">{stylist.specialty}</p>
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Step 3: Date & Time Selection */}
        {step === 3 && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <h2 className="text-2xl font-serif font-semibold mb-6 flex items-center">
              <Calendar className="mr-3 text-gold" />
              Select Date & Time
            </h2>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Date
              </label>
              <input
                type="date"
                min={new Date().toISOString().split('T')[0]}
                onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
              />
            </div>

            {bookingData.date && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Available Time Slots
                </label>
                <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      onClick={() => handleDateTimeSelect(bookingData.date, time)}
                      className="p-3 border border-gray-300 rounded-lg hover:border-gold hover:bg-gold/5 transition-all duration-300"
                    >
                      <Clock size={16} className="inline mr-1" />
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        )}

        {/* Step 4: Customer Details */}
        {step === 4 && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <h2 className="text-2xl font-serif font-semibold mb-6">
              Your Information
            </h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="customerName"
                  value={bookingData.customerName}
                  onChange={handleCustomerInfo}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number (for M-Pesa)
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={bookingData.phone}
                  onChange={handleCustomerInfo}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={bookingData.email}
                  onChange={handleCustomerInfo}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                  required
                />
              </div>
            </div>

            <button
              onClick={handlePayment}
              className="w-full mt-8 btn-primary"
            >
              Pay KES 500 Deposit & Confirm Booking
            </button>
          </motion.div>
        )}

        {/* Step 5: Confirmation */}
        {step === 5 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-lg shadow-lg p-8 text-center"
          >
            <CheckCircle size={64} className="text-green-500 mx-auto mb-6" />
            <h2 className="text-3xl font-serif font-semibold text-gray-800 mb-4">
              Booking Confirmed!
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              Thank you, {bookingData.customerName}! Your appointment has been booked successfully.
            </p>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-6 text-left">
              <h3 className="font-semibold mb-4">Appointment Details:</h3>
              <p><strong>Service:</strong> {bookingData.service}</p>
              <p><strong>Stylist:</strong> {bookingData.stylist}</p>
              <p><strong>Date:</strong> {bookingData.date}</p>
              <p><strong>Time:</strong> {bookingData.time}</p>
              <p><strong>Deposit Paid:</strong> KES 500 via M-Pesa</p>
            </div>
            
            <p className="text-gray-600 mb-6">
              We've sent a confirmation to your phone and email. 
              See you at Smartfuture Salon!
            </p>
            
            <a href="/" className="btn-primary">
              Back to Home
            </a>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default Booking