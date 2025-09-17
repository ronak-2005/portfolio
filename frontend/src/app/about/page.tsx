export default function AboutPage() {
  return (
    <div className="about-page">
      <div className="container">
        <div className="about-grid">
          <div className="about-content">
            <h1 className="page-title">About</h1>
            
            <div className="about-text">
              <p className="lead">
                I'm a visual designer and creative director based in San Francisco, 
                passionate about creating meaningful experiences through thoughtful design.
              </p>
              
              <p>
                With over 8 years in the industry, I've had the privilege of working 
                with diverse clients from tech startups to cultural institutions, 
                always focusing on the intersection of aesthetic beauty and functional purpose.
              </p>
              
              <p>
                My approach combines strategic thinking with visual storytelling, 
                ensuring every project not only looks beautiful but also serves its 
                intended purpose effectively.
              </p>
            </div>

            <div className="experience-section">
              <h3>Experience</h3>
              <div className="experience-list">
                <div className="experience-item">
                  <div className="experience-details">
                    <h4>Creative Director</h4>
                    <p className="company">Studio XYZ</p>
                    <p className="duration">2022 - Present</p>
                  </div>
                </div>
                
                <div className="experience-item">
                  <div className="experience-details">
                    <h4>Senior Visual Designer</h4>
                    <p className="company">Tech Innovations Inc.</p>
                    <p className="duration">2020 - 2022</p>
                  </div>
                </div>
                
                <div className="experience-item">
                  <div className="experience-details">
                    <h4>Visual Designer</h4>
                    <p className="company">Creative Agency Co.</p>
                    <p className="duration">2018 - 2020</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="skills-section">
              <h3>Skills & Expertise</h3>
              <div className="skills-grid">
                <div className="skill-category">
                  <h4>Design</h4>
                  <ul>
                    <li>Brand Identity</li>
                    <li>Visual Systems</li>
                    <li>Typography</li>
                    <li>Print Design</li>
                  </ul>
                </div>
                
                <div className="skill-category">
                  <h4>Digital</h4>
                  <ul>
                    <li>UI/UX Design</li>
                    <li>Web Design</li>
                    <li>Mobile Design</li>
                    <li>Prototyping</li>
                  </ul>
                </div>
                
                <div className="skill-category">
                  <h4>Strategy</h4>
                  <ul>
                    <li>Creative Direction</li>
                    <li>Brand Strategy</li>
                    <li>Design Systems</li>
                    <li>Team Leadership</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="about-visual">
            <div className="profile-image">
              <div className="profile-placeholder"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
