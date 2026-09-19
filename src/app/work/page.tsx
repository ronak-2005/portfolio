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

  // Flagship work shipped at GreenPoint Global
  const featuredProjects: Project[] = [
    {
      id: 1,
      title: 'AI Financial Commentary Engine',
      category: 'GreenPoint Global · Generative AI',
      year: '2026',
      badge: 'FEATURED',
      description:
        "An end-to-end Python pipeline that converts credit union board report PDFs (Power BI exports) into executive-level, LLM-generated CEO commentary across 9 report sections plus a synthesized CEO Summary and Recommendations — live in daily production. A deterministic pdfplumber/PyMuPDF extraction layer replaces unreliable image-only LLM parsing with code-verified figures, backed by a multi-layer validation and guardrails system that catches segment-sum mismatches and cross-source conflicts before data ever reaches the LLM. A modular, section-specific prompt architecture and anti-hallucination safeguards (n-gram overlap detection, JSON salvage/repair) keep every commentary section grounded, with a LoRA fine-tuned Ollama model and SQL Server persistence layer feeding results back into Power BI.",
      stack: ['Python', 'Ollama', 'LoRA', 'pdfplumber', 'PyMuPDF', 'SQL Server', 'JSON-Schema'],
      metrics: [
        { label: 'Report Sections', value: '9+' },
        { label: 'PDFs / Run', value: '~50' },
        { label: 'Turnaround', value: '~7 hrs' },
        { label: 'Manual Drafting', value: '0' },
      ],
      image: '/financial-commentary-engine.png',
      wip: false,
      url: null,
      github: null,
    },
    {
      id: 2,
      title: 'Automated Math Education Video Pipeline',
      category: 'GreenPoint Global · LLM-to-Code',
      year: '2026',
      badge: 'FEATURED',
      description:
        "A local, LLM-assisted video generation pipeline (Python + Manim + Ollama) that converts plain-text lesson scripts into fully rendered educational videos with no manual scene-by-scene authoring. A content-based routing rule sends narration scenes through an LLM-generated Manim function while any scene with real formulas or calculations goes through a hand-written, deterministic template — guaranteeing math renders verbatim, never paraphrased or shrunk to fit. A two-layer safety net (AST-based static validation before caching, plus a runtime fallback to templates) lets bad LLM output degrade gracefully instead of crashing a render, and content-hashed caching skips redundant LLM calls on re-render.",
      stack: ['Python', 'Manim', 'Ollama', 'AST Validation', 'Regex Parsing'],
      metrics: [
        { label: 'Render Time', value: '<10 min' },
        { label: 'Videos Shipped', value: '10+' },
        { label: 'Video Length', value: '~3 min' },
        { label: 'Owned', value: 'Solo' },
      ],
      image: '/math-video-pipeline.png',
      wip: false,
      url: null,
      github: null,
    },
    {
      id: 3,
      title: 'Local RAG Platform for PDF Document Intelligence',
      category: 'GreenPoint Global · Retrieval-Augmented Generation',
      year: '2026',
      badge: 'FEATURED',
      description:
        "A full-stack, self-hosted Retrieval-Augmented Generation application (FastAPI backend, Next.js/React frontend, PostgreSQL + pgvector) for querying PDF documents with grounded, page-level citations — architected as a real client handoff, not a prototype. Hybrid retrieval combines keyword (full-text) and semantic (embedding) search with a cross-encoder reranking stage to filter out topically-similar-but-irrelevant results before generation. A containerized, self-hosted Ollama model handles answer generation under strict grounding rules — every cited source is independently verified against retrieved chunks — with a page-level citation viewer that renders the exact source PDF page on demand. Every external dependency sits behind a swappable provider interface, and the full 5-service stack ships via Docker Compose with a complete client handoff package.",
      stack: ['FastAPI', 'Next.js', 'React', 'PostgreSQL', 'pgvector', 'Ollama', 'Docker Compose', 'sentence-transformers'],
      metrics: [
        { label: 'Services', value: '5' },
        { label: 'Retrieval', value: 'Hybrid' },
        { label: 'Citations', value: 'Page-level' },
        { label: 'Deployment', value: 'Docker' },
      ],
      image: '/local-rag-platform.png',
      wip: false,
      url: null,
      github: null,
    },
  ]

  const olderProjects: Project[] = [
    {
      id: 4,
      title: 'CXR-Detect',
      category: 'Deep Learning · Medical AI',
      year: '2024',
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
      github: 'https://github.com/ronak-2005/CXR-Detect',
    },
    {
      id: 5,
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
