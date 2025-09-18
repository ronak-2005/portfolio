"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  });
  const form = useRef<HTMLFormElement>(null);
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          setFormData({ name: "", email: "", project: "", message: "" });
        },
        (error) => {
          console.error(error);
          alert("❌ Failed to send message. Try again later.");
        }
      );
    console.log("Form submitted:", formData);
  };

  return (
    <div className="contact-page">
      <div className="container">
        <h1 className="page-title">Let's Work Together</h1>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-text">
              <p className="lead">
                I’m always open to collaborating on exciting projects and
                learning opportunities in{" "}
                <strong>Machine Learning, MLOps, and Web Development</strong>.
              </p>

              <p>
                Whether you’re working on an ML project, need help with
                deploying models, or want to collaborate on a full-stack web
                app, I’d love to hear from you.
              </p>
            </div>

            <div className="contact-details">
              <div className="contact-item">
                <h4>Email</h4>
                <a href="chaturvedironak02@gmail.com">
                  chaturvedironak02@gmail.com
                </a>
              </div>

              <div className="contact-item">
                <h4>Phone</h4>
                <a href="91+ 9511713215">+91 9511713215</a>
              </div>

              <div className="contact-item">
                <h4>Location</h4>
                <p>MUMBAI, IN</p>
              </div>

              <div className="contact-item">
                <h4>Social</h4>
                <div className="social-links">
                  <a
                    href="https://www.linkedin.com/in/ronak-chaturvedi-796524384/"
                    target="_blank"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://www.instagram.com/_.ronak2005/"
                    target="_blank"
                  >
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <form ref={form} onSubmit={handleSubmit}>
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
                  <option value="ml-model">Machine Learning Model</option>
                  <option value="mlops">MLOps / Deployment</option>
                  <option value="web-dev">Web Development</option>
                  <option value="ui-ux">UI/UX Design</option>
                  <option value="collaboration">
                    Collaboration / Research
                  </option>
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
  );
}
