import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="about-page">
      <div className="container">
        <div className="about-grid">
          <div className="about-content">
            <h1 className="page-title">About Me</h1>

            <div className="about-text">
              <p className="lead">
                I&apos;m an aspiring <strong>Machine Learning Engineer</strong>{" "}
                with a background in
                <strong> web development (React, Node.js, UI/UX)</strong>. I
                enjoy building applications that combine functionality with
                user-friendly design.
              </p>

              <p>
                Recently, I gained hands-on experience in{" "}
                <strong>machine learning</strong>
                through projects using <strong>Scikit-learn</strong>, where I
                built and deployed predictive models. This sparked my interest
                in the full ML lifecycle, from data preparation to deployment.
              </p>

              <p>
                My current focus is on learning more about{" "}
                <strong>MLOps</strong> and
                <strong>AI/ML engineering</strong>, with the goal of developing
                scalable machine learning systems. I&apos;m always curious to
                explore new tools, frameworks, and ideas that push me to grow as
                an engineer.
              </p>
            </div>

            <div className="experience-section">
              <h3>Experience</h3>
              <div className="experience-list">
                <div className="experience-item">
                  <div className="experience-details">
                    <h4>Web Development Projects</h4>
                    <p className="company">React, Node.js, UI/UX</p>
                    <p className="duration">2021 - 2022</p>
                  </div>
                </div>

                <div className="experience-item">
                  <div className="experience-details">
                    <h4>Machine Learning Project</h4>
                    <p className="company">
                      Scikit-learn (Predictive Modeling)
                    </p>
                    <p className="duration">2022 - Present</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="skills-section">
              <h3>Skills & Expertise</h3>
              <div className="skills-grid">
                <div className="skill-category">
                  <h4>Machine Learning</h4>
                  <ul>
                    <li>Scikit-learn</li>
                    <li>Model Training & Deployment</li>
                    <li>Data Preprocessing</li>
                    <li>Exploratory Data Analysis</li>
                  </ul>
                </div>

                <div className="skill-category">
                  <h4>Web Development</h4>
                  <ul>
                    <li>React</li>
                    <li>Node.js</li>
                    <li>UI/UX Principles</li>
                    <li>API Integration</li>
                  </ul>
                </div>

                <div className="skill-category">
                  <h4>Areas of Interest</h4>
                  <ul>
                    <li>MLOps</li>
                    <li>AI/ML Engineering</li>
                    <li>System Design</li>
                    <li>Continuous Learning</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="hobbies-section">
              <h3>Hobbies & Interests</h3>
              <p>
                Outside of tech, I&apos;m passionate about staying active and
                curious. I enjoy <strong>fitness</strong>, love exploring new
                places through <strong>travel</strong>, and have a strong
                interest in <strong>sports</strong>. These hobbies help me stay
                balanced, motivated, and inspired both in life and in my
                professional journey.
              </p>
            </div>
          </div>

          <div className="about-visual">
            <div className="profile-image">
              <div className="profile-placeholder">
                <Image
                  width={200}
                  height={200}
                  alt="profile"
                  src="/profile.png"
                  className="profile-img"
                ></Image>
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
    </div>
  );
}
