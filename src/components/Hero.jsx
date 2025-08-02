import React, { useState, useEffect } from 'react'
import './Hero.css'

const Hero = () => {
  const [currentText, setCurrentText] = useState(0)
  const texts = ['Developer', 'Designer']

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [texts.length])

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1>Hello</h1>
        <h2>I Am <span className="animated-text">{texts[currentText]}</span></h2>
        
        <div className="social-links">
          <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
          <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
          <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
          <a href="#" aria-label="Behance"><i className="fab fa-behance"></i></a>
          <a href="#" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
        </div>
      </div>
    </section>
  )
}

export default Hero