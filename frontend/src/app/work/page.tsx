export default function WorkPage() {
  const projects = [
    {
      id: 1,
      title: 'Brand Identity System',
      category: 'Branding',
      year: '2024',
      description: 'Complete visual identity for sustainable fashion brand.',
      image: '/projects/brand-identity.jpg'
    },
    {
      id: 2,
      title: 'Mobile Banking App',
      category: 'UI/UX Design',
      year: '2024',
      description: 'User-centered design for financial technology platform.',
      image: '/projects/banking-app.jpg'
    },
    {
      id: 3,
      title: 'Art Museum Campaign',
      category: 'Print Design',
      year: '2023',
      description: 'Exhibition promotional materials and wayfinding system.',
      image: '/projects/museum-campaign.jpg'
    },
    {
      id: 4,
      title: 'E-commerce Platform',
      category: 'Web Design',
      year: '2024',
      description: 'Modern shopping experience for lifestyle brand.',
      image: '/projects/ecommerce.jpg'
    }
  ]

  return (
    <div className="work-page">
      <div className="container">
        <h1 className="page-title">Selected Work</h1>
        <p className="page-description">
          A collection of recent projects spanning branding, digital design, and creative direction.
        </p>
        
        <div className="work-grid">
          {projects.map((project) => (
            <div key={project.id} className="work-item">
              <div className="work-preview">
                <div className="work-placeholder">
                  {/* Replace with actual images */}
                  <div className="placeholder-content">
                    <span className="project-number">0{project.id}</span>
                  </div>
                </div>
              </div>
              <div className="work-details">
                <h3>{project.title}</h3>
                <p className="work-category">{project.category} • {project.year}</p>
                <p className="work-description">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}