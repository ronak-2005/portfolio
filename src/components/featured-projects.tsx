import Link from 'next/link'

export default function FeaturedProjects() {
  const projects = [
    { id: 1, type: 'mobile', title: 'Mobile App UI', category: 'UI/UX' },
    { id: 2, type: 'web', title: 'Website Design', category: 'Web' },
    { id: 3, type: 'print', title: 'Brand Materials', category: 'Print' },
    { id: 4, type: 'logo', title: 'Logo Design', category: 'Branding' },
    { id: 5, type: 'brand', title: 'Brand Identity', category: 'Branding' }
  ]

  return (
    <section className="featured-projects">
      <div className="container">
        <div className="section-header">
          <h3 className="section-title">Featured Projects</h3>
          <Link href="/work" className="section-link">
            View All Work →
          </Link>
        </div>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className={`project-card ${project.type}`}>
              <div className="project-preview">
                <div className="project-overlay">
                  <span className="project-category">{project.category}</span>
                  <h4 className="project-title">{project.title}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}