import Link from 'next/link'

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              SOPHIA CHEN
            </h1>
            <h2 className="hero-subtitle">
              VISUAL DESIGNER & CREATIVE DIRECTOR
            </h2>
            
            <p className="hero-description">
              Creating meaningful brand experiences and digital products that connect 
              with audiences on both emotional and functional levels. I believe great 
              design happens at the intersection of strategy, aesthetics, and human needs.
            </p>
            
            <div className="hero-actions">
              <Link href="/work" className="cta-button primary">
                View Work
              </Link>
              <Link href="/contact" className="cta-button secondary">
                Get In Touch
              </Link>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="design-showcase">
              <div className="design-piece large-piece">
                <div className="piece-content olive-green">
                  <div className="geometric-shape circle"></div>
                  <div className="piece-text">Brand Identity</div>
                </div>
              </div>
              
              <div className="design-piece medium-piece">
                <div className="piece-content cream">
                  <div className="geometric-shape triangle orange"></div>
                  <div className="piece-text">Visual Design</div>
                </div>
              </div>
              
              <div className="design-piece small-piece">
                <div className="piece-content dark-green">
                  <div className="geometric-shape semi-circle"></div>
                  <div className="piece-text">Creative Direction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}