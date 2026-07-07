import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">RONAK CHATURVEDI</h1>
            <h2 className="hero-subtitle">AI/ML ENGINEER & DEVELOPER</h2>

            <p className="hero-description">
                 As an AI Developer, I fine-tune open-source LLMs with Hugging Face and
              LoRA and deploy them locally with Ollama to automate real
              business workflows — I built a pipeline that generates
              executive-style commentary for daily reporting, cutting
              drafting time by roughly 85%. I'm also actively building out
              retrieval-augmented generation and vector search to extend
              these systems with long-term memory and grounded, up-to-date
              answers. From chest X-ray detection with <strong>98.5% AUC</strong>
              to a five-domain fraud-detection platform, I close the gap
              between research and production.
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
