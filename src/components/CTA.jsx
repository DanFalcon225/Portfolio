import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <section className="cta">
        <p className="cta-text">Do you have a project in mind?<br className="sm:block hidden"/>
        Let's collaborate and bring it to life!</p>
        <Link to="/contact" className="btn">Contact</Link>
    </section>
  )
}

export default CTA