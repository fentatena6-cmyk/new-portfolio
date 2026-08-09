import './Hero.css'
import profileImg from '../assets/profile.jpg' 

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          {/* የሚንቀሳቀስ Marquee ስምህና ዲፓርትመንትህ */}
          <div className="title-marquee">
            <marquee behavior="scroll" direction="left">
              Hi, I'm <span className="highlight">Tena Fenta</span> and a Computer Science Student
            </marquee>
          </div>

          <h2>React Developer & UI Enthusiast</h2>
          
          <p className="description">
           I graduated in Computer Science and I developed a Weather Dashboard website using React.
          </p>

          {/* በሚያምር ዲዛይን የተሰሩ ቁልፎች */}
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Contact Me</a>
          </div>
        </div>

        <div className="hero-image-container">
          <img 
            src={profileImg} 
            alt="Tena Fenta" 
            className="profile-img" 
          />
        </div>
      </div>
    </section>
  )
}

export default Hero