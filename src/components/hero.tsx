import Image from "next/image";
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
              I’m a machine learning engineer who loves building smart systems
              that solve real problems. Alongside that, I also work as a web
              developer, turning ideas into products people can actually use.
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
                  <Image alt='neuron' src="neuron.png"></Image>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
