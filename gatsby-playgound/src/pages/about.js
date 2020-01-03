import React from "react"
import { Link } from "gatsby"
import Footer from "../components/footer"

const AboutPage = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <h1>About Page</h1>
      <p>This is my bio page. Here is some stuff about me. </p>

      <p>
        Want to work with me? Reach out here..
        <Link to="/contact"> Contact</Link> me here.
      </p>
      <Footer />
    </div>
  )
}

export default AboutPage
