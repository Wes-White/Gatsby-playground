import React from "react"
import { Link } from "gatsby"

const AboutPage = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <h1>About Page</h1>
      <p>This is my bio page. Here is some stuff about me. </p>

      <p>
        If you would like to reach out feel free to{" "}
        <Link to="/contact">Contact</Link> me here.
      </p>
    </div>
  )
}

export default AboutPage
