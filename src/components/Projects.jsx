import './Projects.css'

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: 'Weather Dashboard',
      description: 'Real-time weather application with API integration',
      icon: '☀️',
      tags: ['React', 'API', 'CSS'],
      liveUrl: 'https://weather-dashboard.vercel.app', // የዌብሳይቱ የቀጥታ ሊንክ
      githubUrl: 'https://github.com/TenaFenta/weather-dashboard' // የ GitHub ኮድሽ ሊንክ
    },
    {
      id: 2,
      title: 'Portfolio Website',
      description: 'Modern portfolio built with React and Vite',
      icon: '🎨',
      tags: ['React', 'Vite', 'CSS3'],
      liveUrl: 'https://tenafenta.github.io', // የፖርትፎሊዮሽ የቀጥታ ሊንክ
      githubUrl: 'https://github.com/fentatena6-cmyk' // የ GitHub ኮድሽ ሊንክ
    }
  ]

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-grid">
        {projectsData.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-icon">{project.icon}</div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            
            <div className="project-tags">
              {project.tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
              ))}
            </div>

            {/* ሁለቱም ቁልፎች አብረው ተቀምጠዋል */}
            <div className="project-buttons">
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="view-btn live-btn"
              >
                Live Demo
              </a>
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="view-btn github-btn"
              >
                GitHub Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects