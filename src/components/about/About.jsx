import React from 'react'
import { FaAward } from 'react-icons/fa'
import { VscFolderLibrary } from 'react-icons/vsc'
import ME from '../../assets/img1.JPG'
import './about.css';

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Education</h5>
              <small>Pursuing B-Tech in Computer Science with specialization in Cyber-Security</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects and Internships</h5>
              <small>3+ Completed Projects, 2 Publications and interned as AI and ML Trainee at Celebal Tech</small>
            </article>
          </div>
          <p>Grounded and solution-oriented Computer Science Enthusiast with a wide variety of technical skills. Adept at motivating self and others. Passionate about Android App Development. An enthusiastic self-starter engineer with strong leadership and communication skills, proven academic achievements and possesses the right technical and soft skills required to propel the organization to achieve its goals and objectives and make a difference.</p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About