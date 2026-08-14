import './Contact.css'

const Contact = () => {
  const myEmail = 'fentatena6@gmail.com'

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info" style={{ width: '100%', textAlign: 'center' }}>
            <h3>Let's Connect</h3>
            <p>I'm always interested in hearing about new opportunities and exciting projects.</p>
            
            <div className="contact-details" style={{ justifyContent: 'center', marginBottom: '20px' }}>
              <div className="contact-item">
                <span>📱</span>
                <p>+251 970037055</p>
              </div>

              <div className="contact-item">
                <span>📍</span>
                <p>Ethiopia</p>
              </div>
            </div>

            {/* Social & Email Buttons */}
            <div className="social-buttons" style={{ justifyContent: 'center' }}>
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

              <a 
                href={`mailto:${myEmail}`}
                className="social-btn email-btn"
                style={{
                  backgroundColor: '#ea4335',
                  color: 'white',
                  padding: '10px 20px',
                  borderRadius: '5px',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItem: 'center',
                  gap: '8px',
                  fontWeight: 'bold'
                }}
              >
                <span>✉️</span> Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact