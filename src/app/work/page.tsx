'use client'

import Image from "next/image"
import { useState } from "react"

export default function WorkPage() {
  const [showMore, setShowMore] = useState(false)

  const featuredProjects = [
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

  const olderProjects = [
    {
      id: 1,
      title: 'House Price Prediction',
      category: 'ML Engineering',
      year: '2025',
      description:
        'Built a regression model using Scikit-learn to predict house prices based on features such as location, size, and amenities. Includes data preprocessing, feature engineering, and model evaluation.',
      image: '/house.png',
      url: 'https://house-price-6vo8.onrender.com',
      github: 'https://github.com/ronak-2005/house_price',
    },
    {
      id: 2,
      title: 'Loan Accept Prediction',
      category: 'ML Engineering',
      year: '2025',
      description:
        'Developed a classification model to predict whether loan applications should be approved based on applicant financial and demographic data. Focused on feature selection and accuracy optimization.',
      image: '/loan.png',
      url: 'https://loan-acef.onrender.com',
      github: 'https://github.com/ronak-2005/Loan',
    },
    {
      id: 3,
      title: 'Titanic Survival Prediction',
      category: 'ML Engineering',
      year: '2025',
      description:
        'Implemented a classic machine learning project predicting passenger survival on the Titanic dataset using Scikit-learn. Applied data cleaning, exploratory data analysis, and multiple ML algorithms.',
      image: '/titanic.png',
      url: 'https://titanic-survival-ujpg.onrender.com',
      github: 'https://github.com/ronak-2005/Titanic_Survival',
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
        <div className="work-grid">
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
                    src={project.image!}
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
                  {project.metrics.map((m) => (
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
