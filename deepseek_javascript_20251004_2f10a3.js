import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send } from 'lucide-react'

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')

  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We offer hair styling, nails, makeup, spa treatments, bridal packages, and corporate looks. Visit our Services page for details!"
    },
    {
      question: "How do I book an appointment?",
      answer: "You can book through our website, WhatsApp (0769642043), or by calling us directly."
    },
    {
      question: "What are your opening hours?",
      answer: "We're open Mon-Sat 8AM-8PM and Sun 10AM-6PM."
    },
    {
      question: "Do you accept M-Pesa payments?",
      answer: "Yes! We accept M-Pesa payments for all services and products."
    }
  ]

  const handleSend = () => {
    if (!input.trim()) return

    const userMessage = { type: 'user', text: input }
    setMessages(prev => [...prev, userMessage])

    // Simulate AI response
    setTimeout(() => {
      const matchedFAQ = faqs.find(faq => 
        input.toLowerCase().includes(faq.question.toLowerCase().split(' ')[0])
      )
      
      const botResponse = {
        type: 'bot',
        text: matchedFAQ ? matchedFAQ.answer : "Thank you for your message! For specific inquiries, please contact us at 0769642043 or visit our website for more information."
      }
      
      setMessages(prev => [...prev, botResponse])
    }, 1000)

    setInput('')
  }

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 bg-pink-500 hover:bg-pink-600 text-white p-4 rounded-full shadow-lg z-40 transition-all duration-300 transform hover:scale-110"
        aria-label="Chat with us"
      >
        <MessageCircle size={24} />
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed bottom-20 left-6 w-80 h-96 bg-white rounded-lg shadow-xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="bg-gold text-white p-4 rounded-t-lg flex justify-between items-center">
              <h3 className="font-semibold">Smartfuture Assistant</h3>
              <button onClick={() => setIsOpen(false)}>
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto">
              {messages.length === 0 ? (
                <div className="text-center text-gray-500">
                  <p>Hello! I'm here to help with your beauty needs. Ask me about services, booking, or pricing!</p>
                </div>
              ) : (
                messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`mb-4 ${msg.type === 'user' ? 'text-right' : 'text-left'}`}
                  >
                    <div
                      className={`inline-block p-3 rounded-lg ${
                        msg.type === 'user'
                          ? 'bg-gold text-white'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Type your message..."
                  className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gold"
                />
                <button
                  onClick={handleSend}
                  className="bg-gold text-white p-2 rounded-lg hover:bg-yellow-600 transition-colors"
                >
                  <Send size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default ChatBot