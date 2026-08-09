import { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: '831ae67d-5e1a-4c92-8202-dec616a72009',
          name: formData.name,
          email: formData.email,
          message: formData.message
        })
      })

      const result = await response.json()

      if (result.success) {
        alert('Thank you for your message! I will get back to you soon.')
        setFormData({ name: '', email: '', message: '' })
        setStatus('')
      } else {
        alert('Oops! Something went wrong. Please try again.')
        setStatus('')
      }
    } catch (error) {
      console.error(error)
      alert('Oops! Something went wrong. Please try again.')
      setStatus('')
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>I'm always interested in hearing about new opportunities and exciting projects.</p>
            
            <div className="contact-details">
              <div className="contact-item">
                <span>📱</span>
                <p>+251 970037055</p>
              </div>

              <div className="contact-item">
                <span>📍</span>
                <p>Ethiopia</p>
              </div>
            </div>

            {/* Social Buttons */}
            <div className="social-buttons">
              <a 
                href="https://github.com/fentatena6-cmyk" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-btn github-btn"
              >
                <span>💻</span> GitHub
              </a>
              
              <a 
                href="https://t.me/tenaf21" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-btn telegram-btn"
              >
                <span>✈️</span> Telegram
              </a>
            </div>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" disabled={status === 'Sending...'}>
              {status === 'Sending...' ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact