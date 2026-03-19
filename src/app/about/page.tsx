import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  const skills = [
    {
      category: "Machine Learning",
      items: ["PyTorch", "Scikit-learn", "TensorFlow", "ONNX", "Grad-CAM", "ResNet / CNNs", "Gradient Boosting", "Label Smoothing"],
    },
    {
      category: "AI & Signal Processing",
      items: ["rPPG (remote photoplethysmography)", "Librosa (audio forensics)", "Keystroke & mouse biometrics", "NLP text-authenticity", "Graph fraud detection", "Test-time augmentation"],
    },
    {
      category: "Backend & Data",
      items: ["FastAPI", "PostgreSQL", "TimescaleDB", "Neo4j", "REST APIs", "Mixed-precision training (FP16)"],
    },
    {
      category: "Web & Blockchain",
      items: ["Next.js", "TypeScript", "Streamlit", "Circom / SnarkJS", "Polygon (ZK proofs)", "Vercel / Render"],
    },
  ];

  const projects = [
    {
      title: "CXR-Detect",
      tag: "Medical AI",
      summary:
        "ResNet-50 fine-tuned for pneumonia detection on chest X-rays. 98.5% AUC, 96% accuracy on 624 test images. FP16 training, cosine-annealing, Grad-CAM explainability, and 5-pass TTA.",
    },
    {
      title: "HumanEye",
      tag: "Fraud Detection",
      summary:
        "Five-domain human-verification platform: behavioral biometrics, liveness/deepfake CV, voice forensics, NLP authenticity, and graph-based financial fraud. ZK proofs on Polygon for privacy-preserving verification.",
    },
  ];

  return (
    <div className="about-page">
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 280px',
          gap: '80px',
          alignItems: 'flex-start',
        }}>

          {/* ── Left column ── */}
          <div>
            <h1 className="page-title">ABOUT ME</h1>

            <div className="about-text">
              <p className="lead">
                I'm an AI/ML engineer who builds systems that go from research
                notebook to production deployment.
              </p>

              <p>
                My current focus is applied deep learning and security AI. I
                recently shipped <strong>CXR-Detect</strong>, a clinical-grade
                chest X-ray pneumonia detector achieving 98.5% AUC, and{" "}
                <strong>HumanEye</strong>, a multi-domain fraud-detection platform
                that combines biometric signals, voice forensics, and zero-knowledge
                proofs to verify humanity without exposing raw user data.
              </p>

              <p>
                I care about the full stack — training pipelines, model
                explainability, API design, and the UI that wraps it all together.
                If a model can't be understood or deployed, it's not finished.
              </p>

              <p>
                Outside of building, I'm interested in medical imaging,
                privacy-preserving ML, and the intersection of cryptography and
                AI identity.
              </p>

              {/* Selected Work */}
              <div className="about-projects">
                <h3>Selected Work</h3>
                <div className="about-project-list">
                  {projects.map((p) => (
                    <div key={p.title} className="about-project-item">
                      <div className="about-project-header">
                        <span className="about-project-title">{p.title}</span>
                        <span className="about-project-tag">{p.tag}</span>
                      </div>
                      <p className="about-project-summary">{p.summary}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills */}
              <div className="skills-section">
                <h3>Skills &amp; Stack</h3>
                <div className="skills-grid">
                  {skills.map((s) => (
                    <div key={s.category} className="skill-category">
                      <h4>{s.category}</h4>
                      <ul>
                        {s.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div className="hero-actions" style={{ marginTop: '48px' }}>
                <Link href="/work" className="cta-button primary">See My Work</Link>
                <Link href="/contact" className="cta-button secondary">Get In Touch</Link>
              </div>
            </div>
          </div>

          {/* ── Right column: image → name → role → dot → stats ── */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '0',
            paddingTop: '8px',
          }}>
            {/* Profile image */}
            <Image
              src="/profile.png"
              alt="Ronak Chaturvedi"
              width={280}
              height={320}
              style={{
                width: '280px',
                height: '320px',
                objectFit: 'cover',
                borderRadius: '12px',
                display: 'block',
              }}
            />

            {/* Name + role block */}
            <div style={{
              width: '280px',
              padding: '16px 4px 8px',
              borderBottom: '1px solid #ebebeb',
              marginBottom: '0',
            }}>
              <p style={{
                fontSize: '20px',
                fontWeight: '800',
                color: '#1a1a1a',
                letterSpacing: '-0.4px',
                margin: '0 0 4px',
                lineHeight: '1.2',
              }}>
                Ronak Chaturvedi
              </p>
              <p style={{
                fontSize: '11px',
                fontWeight: '600',
                letterSpacing: '1.5px',
                color: '#7a8b6d',
                textTransform: 'uppercase',
                margin: '0',
              }}>
                AI / ML Engineer &amp; Web Developer
              </p>
            </div>

            {/* Currently building */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 4px',
              fontSize: '12px',
              color: '#555',
              fontWeight: '500',
              width: '280px',
              borderBottom: '1px solid #ebebeb',
            }}>
              <span style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#28ca42',
                flexShrink: 0,
                display: 'inline-block',
              }} />
              Currently building HumanEye
            </div>

            {/* Stats grid */}
            <div style={{
              width: '280px',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1px',
              background: '#ebebeb',
              border: '1px solid #ebebeb',
              borderTop: 'none',
              borderRadius: '0 0 12px 12px',
              overflow: 'hidden',
            }}>
              {[
                { value: '98.5%', label: 'Best AUC' },
                { value: '5',     label: 'AI Domains' },
                { value: '6+',    label: 'Projects' },
                { value: 'ZK',    label: 'Proofs Built' },
              ].map((s) => (
                <div key={s.label} style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  padding: '14px 8px',
                  background: '#fafafa',
                  gap: '3px',
                }}>
                  <span style={{
                    fontSize: '1.15rem',
                    fontWeight: '800',
                    color: '#1a1a1a',
                    letterSpacing: '-0.5px',
                    lineHeight: '1',
                  }}>
                    {s.value}
                  </span>
                  <span style={{
                    fontSize: '0.6rem',
                    color: '#aaa',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    textAlign: 'center',
                  }}>
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
            <div className="resume-place">
                <div className="resume-box">
                  <Link href="/resume-view" className="resume-btn">
                    Resume
                  </Link>
                </div>
              </div>
          </div>

        </div>
      </div>
    </div>
  );
}