import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">RONAK CHATURVEDI</h1>
            <h2 className="hero-subtitle">AI/ML ENGINEER & WEB DEVELOPER</h2>

            <p className="hero-description">
              Creating meaningful brand experiences and digital products that
              connect with audiences on both emotional and functional levels. I
              believe great design happens at the intersection of strategy,
              aesthetics, and human needs.
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
            <img src="neuron.png" alt="AI/ML Network Pattern" />
          </div>
        </div>
      </div>
    </section>
  );
}
