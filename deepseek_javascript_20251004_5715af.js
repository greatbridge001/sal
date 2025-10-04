export const sendWhatsAppMessage = async (message) => {
  const phoneNumber = '0769642043'
  const encodedMessage = encodeURIComponent(message)
  
  // For demo, we'll open WhatsApp web
  // In production, you might use WhatsApp Business API
  const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
  
  // Open in new tab for demo
  window.open(url, '_blank')
  
  return { success: true, message: 'WhatsApp message sent successfully' }
  
  /*
  // For actual integration with WhatsApp Business API:
  try {
    const response = await fetch('/api/send-whatsapp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        phone: phoneNumber,
        message: message
      })
    })
    
    if (!response.ok) {
      throw new Error('Failed to send WhatsApp message')
    }
    
    return await response.json()
  } catch (error) {
    console.error('WhatsApp message error:', error)
    throw error
  }
  */
}