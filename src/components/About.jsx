import './About.css'

const About = () => {
  const skillsData = [
    { name: 'React', level: 60 },
    { name: 'JavaScript', level: 80 },
    { name: 'HTML/CSS', level: 90 },
    { name: 'PHP', level: 70 },
    { name: 'MySQL', level: 75 },
    { name: 'Git', level: 50 },
    { name: 'Vite', level: 60 },
  ]

  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate Front-End Developer and Computer Science graduate. 
              I love turning complex problems into beautiful and intuitive digital experiences.
            </p>
            <p>
              My journey in software development involves continuous learning, 
              building exciting projects, and solving real-world challenges through code. 
              My university journey has given me a strong foundation in Computer Science. 
              Alongside my studies, I have focused on modern web technologies and practical project development.
            </p>
            
            <div className="skills">
              <h3>Skills</h3>
              <div className="skills-container">
                {skillsData.map((skill, index) => (
                  <div key={index} className="skill-card">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="progress-bar-bg">
                      <div 
                        className="progress-bar-fill" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default About