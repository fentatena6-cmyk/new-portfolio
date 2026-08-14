import './Contact.css'

const Contact = () => {
  const myEmail = 'fentatena6@gmail.com'

  // በኮምፒዩተር እና በስልክ በአግባቡ እንዲሰራ የሚያደርግ ፋንክሽን
  const handleEmailClick = (e) => {
    e.preventDefault();
    
    // ስልክ መሆኑን ወይም አለመሆኑን ለማረጋገጥ
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      // ስልክ ከሆነ በቀጥታ mailto ይጠቀማል (አፕሊኬሽኑን ለመክፈት)
      window.location.href = `mailto:${myEmail}`;
    } else {
      // ኮምፒዩተር ከሆነ በብራውዘር ውስጥ የጂሜይል ዌብ ገጽ አዲስ ታብ ከፍቶ ያሳያል
      const gmailWebUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${myEmail}`;
      window.open(gmailWebUrl, '_blank', 'noopener,noreferrer');
    }
  };

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

              {/* Universal Email Button using onClick function */}
              <a 
                href={`mailto:${myEmail}`}
                onClick={handleEmailClick}
                className="social-btn email-btn"
                style={{
                  backgroundColor: '#ea4335',
                  color: 'white',
                  padding: '10px 20px',
                  borderRadius: '5px',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontWeight: 'bold',
                  cursor: 'pointer'
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