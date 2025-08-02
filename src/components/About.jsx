import React from 'react'
import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>About Me.</h2>
            <p className="subtitle">FRONT END DEVELOPER</p>
            
            <p className="description">
              I am <strong>Mohamed Hazem</strong> I am a passionate
       Front-End Developer with a strong foundation in HTML, CSS, JavaScript, and React.
        I also have hands-on experience using Bootstrap for building responsive layouts and Git for version control and collaboration. I enjoy transforming ideas into real, user-friendly websites with clean and modern designs.
 I’m always looking to improve my skills and explore new technologies. My goal is to build web experiences that are both functional and visually appealing.

            </p>

            <div className="skills">
              <div className="skill">
                <div className="skill-info">
                  <span>Web Design</span>
                  <span>95%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{width: '95%'}}></div>
                </div>
              </div>

              <div className="skill">
                <div className="skill-info">
                  <span>Branding</span>
                  <span>80%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{width: '80%'}}></div>
                </div>
              </div>

              <div className="skill">
                <div className="skill-info">
                  <span>Development</span>
                  <span>90%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{width: '90%'}}></div>
                </div>
              </div>
            </div>

            <div className="buttons">
<a href="/Mohamed_Hazem_CV.pdf" download className="btn btn-primary">
  Download C.V
</a>
              <button className="btn btn-secondary">Contact Me</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About