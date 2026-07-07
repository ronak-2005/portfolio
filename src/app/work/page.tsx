
'use client'

import Image from "next/image"
import { useState } from "react"

type Metric = { label: string; value: string }

type Project = {
  id: number
  title: string
  category: string
  year: string
  description: string
  image: string
  stack: string[]
  badge?: string
  wip?: boolean
  metrics?: Metric[]
  url?: string | null
  github?: string | null
}

export default function WorkPage() {
  const [showMore, setShowMore] = useState(false)

  const olderProjects: Project[] = [
    {
      id: 5,
      title: 'CXR-Detect',
      category: 'Deep Learning · Medical AI',
      year: '2026',
      badge: 'FEATURED',
      description:
        'A clinical-grade chest X-ray pneumonia detection system fine-tuned on ResNet-50, achieving 98.5% AUC and 96% accuracy across 624 held-out test images. The pipeline features class-balanced training via WeightedRandomSampler, mixed-precision (FP16) training, and cosine-annealing LR scheduling. Grad-CAM heatmaps provide radiologist-friendly visual explanations, while 5-pass test-time augmentation sharpens inference confidence. Label smoothing and early stopping guard against overfitting.',
      stack: ['Python', 'PyTorch', 'torchvision', 'Scikit-learn', 'Streamlit', 'Grad-CAM'],
      metrics: [
        { label: 'AUC', value: '98.5%' },
        { label: 'Accuracy', value: '96%' },
        { label: 'Test Images', value: '624' },
        { label: 'TTA Passes', value: '5×' },
      ],
      image: '/cxr-detect.png',
      wip: false,
      url: 'https://cxr-detect.streamlit.app/',
      github:'https://github.com/ronak-2005/CXR-Detect',
    },
    {
      id: 6,
      title: 'HumanEye',
      category: 'AI · Fraud Detection · Security',
      year: 'CURRENT',
      badge: 'FEATURED',
      description:
        'A multi-domain AI fraud-detection and human-verification platform spanning five detection domains: behavioral biometrics (keystroke & mouse dynamics via PyTorch + ONNX), liveness & deepfake detection using rPPG and skin-physics models (~95% accuracy), voice forensics (jitter/shimmer analysis with Librosa), NLP text-authenticity scoring (gradient boosting), and financial bust-out & graph fraud prediction via Neo4j. A TypeScript browser SDK captures signals in real-time, and zero-knowledge proofs (Circom / SnarkJS on Polygon) let users prove humanity without revealing raw biometrics.',
      stack: ['FastAPI', 'PyTorch', 'ONNX', 'PostgreSQL', 'TimescaleDB', 'Neo4j', 'Librosa', 'Circom', 'SnarkJS', 'Polygon', 'TypeScript'],
      metrics: [
        { label: 'Domains', value: '5' },
        { label: 'Liveness Acc.', value: '~95%' },
        { label: 'ZK Chain', value: 'Polygon' },
        { label: 'SDK', value: 'TS Browser' },
      ],
      image: '/humaneye.png',
      wip: false,
      url: null,
      github: 'https://github.com/ronak-2005/Human-Eye',
    },
  ]

  const featuredProjects: Project[] = [
    {
      id: 1,
      title: 'AI Developer Intern',
      category: 'GreenPoint Global',
      year: '2026',
      description:
        "As an AI Developer intern at GreenPoint Global, I built a local-LLM automation pipeline using Ollama to auto-generate executive-style commentary for daily business reporting — cutting manual drafting time from about an hour to under 10 minutes per report. I fine-tuned open-source models with Hugging Face and LoRA to match the required tone and style, and used prompt engineering to keep outputs consistent and production-ready. It's given me hands-on experience taking an LLM from a raw model to a reliable part of a real workflow.",
      image: '/greenpoint.jpeg',
      stack: ['Python', 'PyTorch', 'LLM', 'Ollama', 'HuggingFace', 'LoRAM','RAG Pipeline'],
    }
  ]

  return (
    <div className="work-page">
      <div className="container">
        <h1 className="page-title">WORK DONE</h1>
        <p className="page-description">
          A collection of projects showcasing machine learning applications and AI-powered web solutions.
        </p>

        {/* Featured Projects */}
        <div className="work-grid-featured">
          {featuredProjects.map((project) => (
            <div key={project.id} className="work-item work-item-featured">
              <span className="work-badge">{project.badge}</span>

              <div className="work-preview">
                {project.wip ? (
                  /* Yellow triangle WIP placeholder */
                  <div className="work-wip-placeholder">
                    <div className="wip-triangle" />
                    <span className="wip-label">In Progress</span>
                  </div>
                  ) : (
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={450}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              <div className="work-details">
                <h3>{project.title}</h3>
                <p className="work-category">
                  {project.category} • {project.year}
                </p>
                <p className="work-description">{project.description}</p>

                <div className="work-metrics">
                  {project.metrics?.map((m: Metric) => (
                    <div key={m.label} className="metric-pill">
                      <span className="metric-value">{m.value}</span>
                      <span className="metric-label">{m.label}</span>
                    </div>
                  ))}
                </div>

                <div className="work-stack">
                  {project.stack.map((tag) => (
                    <span key={tag} className="stack-tag">{tag}</span>
                  ))}
                </div>

                <div className="button-work flex gap-3 mt-4">
                  {project.url && (
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="cta-button primary">
                      Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="cta-button secondary">
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* View More toggle */}
        <div className="view-more-wrapper">
          <button
            className="view-more-btn"
            onClick={() => setShowMore((prev) => !prev)}
            aria-expanded={showMore}
          >
            <span>{showMore ? 'Hide Projects' : `View More Projects (${olderProjects.length})`}</span>
            <svg
              className={`view-more-icon${showMore ? ' rotated' : ''}`}
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
        </div>

        {/* Older Projects */}
        <div className={`older-projects-wrapper${showMore ? ' expanded' : ''}`}>
          <div className="work-grid">
            {olderProjects.map((project) => (
              <div key={project.id} className="work-item">
                <div className="work-preview">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={450}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="work-details">
                  <h3>{project.title}</h3>
                  <p className="work-category">
                    {project.category} • {project.year}
                  </p>
                  <p className="work-description">{project.description}</p>

                  <div className="button-work flex gap-3 mt-4">
                    {project.url && (
                      <a href={project.url} target="_blank" rel="noopener noreferrer" className="cta-button primary">
                        Live Demo
                      </a>
                    )}
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="cta-button secondary">
                        Source Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
