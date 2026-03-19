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
              I build intelligent systems that work in the real world — from a
              ResNet-50 chest X-ray detector with <strong>98.5% AUC</strong> to
              a five-domain fraud-detection platform powered by ZK proofs on
              Polygon. I close the gap between research and production.
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
                  <Image alt='neuron' src="/neuron.png" width={350} height={450} className="w-full h-full object-cover" ></Image>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
