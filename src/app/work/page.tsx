'use client'

import Image from "next/image"

export default function WorkPage() {
  const projects = [
    {
      id: 1,
      title: 'House Price Prediction',
      category: 'ML Engineering',
      year: '2025',
      description:
        'Built a regression model using Scikit-learn to predict house prices based on features such as location, size, and amenities. Includes data preprocessing, feature engineering, and model evaluation.',
      image: 'house.png',
      url: 'https://house-price-6vo8.onrender.com',
      github: 'https://github.com/ronak-2005/house_price'
    },
    {
      id: 2,
      title: 'CARRIER AI',
      category: 'Web Design',
      year: 'CURRENT',
      description:
        'An AI-powered career guidance platform that helps students and professionals discover suitable career paths. Includes interactive UI, recommendation engine, and personalized dashboards.',
      image: 'carrier.png',
      url: 'https://my-appex.vercel.app/',
      github: 'https://github.com/ronak-2005/my-appex'
    },
    {
      id: 3,
      title: 'Loan Accept Prediction',
      category: 'ML Engineering',
      year: '2025',
      description:
        'Developed a classification model to predict whether loan applications should be approved based on applicant financial and demographic data. Focused on feature selection and accuracy optimization.',
      image: 'loan.png',
      url: 'https://loan-acef.onrender.com',
      github: 'https://github.com/ronak-2005/Loan'
    },
    {
      id: 4,
      title: 'Titanic Survival Prediction',
      category: 'ML Engineering',
      year: '2025',
      description:
        'Implemented a classic machine learning project predicting passenger survival on the Titanic dataset using Scikit-learn. Applied data cleaning, exploratory data analysis, and multiple ML algorithms.',
      image: 'titanic.png',
      url: 'https://titanic-survival-ujpg.onrender.com',
      github: 'https://github.com/ronak-2005/Titanic_Survival'
    }
  
  ]

  return (
    <div className="work-page">
      <div className="container">
        <h1 className="page-title">WORK DONE </h1>
        <p className="page-description">
          A collection of projects showcasing machine learning applications and AI-powered web solutions.
        </p>

        <div className="work-grid">
          {projects.map((project) => (
            <div key={project.id} className="work-item">
              <div className="work-preview">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-lg"
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
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-button primary"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-button secondary"
                    >
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
  )
}
