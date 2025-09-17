'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  return (
    <div className="contact-page">
      <div className="container">
        <h1 className="page-title">Let's Work Together</h1>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-text">
              <p className="lead">
                I'm always excited to take on new challenges and collaborate 
                on projects that make a meaningful impact.
              </p>
              
              <p>
                Whether you're looking to rebrand your company, design a new 
                digital product, or need creative direction for your next campaign, 
                I'd love to hear from you.
              </p>
            </div>
            
            <div className="contact-details">
              <div className="contact-item">
                <h4>Email</h4>
                <a href="mailto:hello@sophiachen.design">hello@sophiachen.design</a>
              </div>
              
              <div className="contact-item">
                <h4>Phone</h4>
                <a href="tel:+15551234567">+1 (555) 123-4567</a>
              </div>
              
              <div className="contact-item">
                <h4>Location</h4>
                <p>San Francisco, CA</p>
              </div>
              
              <div className="contact-item">
                <h4>Social</h4>
                <div className="social-links">
                  <a href="#" target="_blank">LinkedIn</a>
                  <a href="#" target="_blank">Instagram</a>
                  <a href="#" target="_blank">Behance</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="project">Project Type</label>
                <select 
                  id="project" 
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                >
                  <option value="">Select a project type</option>
                  <option value="branding">Branding & Identity</option>
                  <option value="web">Web Design</option>
                  <option value="ui-ux">UI/UX Design</option>
                  <option value="print">Print Design</option>
                  <option value="consultation">Design Consultation</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Tell me about your project *</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Share some details about your project, timeline, and goals..."
                  required 
                />
              </div>
              
              <button type="submit" className="submit-button">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}