import './Hero.css'
import profileImg from '../assets/profile.jpg' 

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        {/* ፎቶው በግራ በኩል */}
        <div className="hero-image-container">
          <img 
            src={profileImg} 
            alt="Tena Fenta" 
            className="profile-img" 
          />
        </div>

        {/* ጽሑፉ በቀኝ በኩል */}
        <div className="hero-text">
          {/* የሚንቀሳቀስ Marquee ስምህና ዲፓርትመንትህ */}
          <div className="title-marquee">
            <marquee behavior="scroll" direction="left">
              Hi, I'm <span className="highlight">Tena Fenta</span> and a Computer Science Student
            </marquee>
          </div>

          <h2>React Developer & UI Enthusiast</h2>
          
          <p className="description">
           I graduated in Computer Science and I developed QRoute: Smart ScanWay Platform.
          </p>

          {}
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Contact Me</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero