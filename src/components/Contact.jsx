import { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // እዚህ ጋር የራስሽን ትክክለኛ ኢሜይል አስገብዪ
    const myEmail = 'fentatena6@gmail.com'
    
    const subject = `Message from ${formData.name} (${formData.email})`
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`
    
    // የኢሜይል አፕሊኬሽኑን በቀጥታ ይከፍታል
    window.location.href = `mailto:${myEmail}?subject=${encodeURIComponent(subject)}&body=${body}`
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
            <button type="submit">
              Send Email
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact