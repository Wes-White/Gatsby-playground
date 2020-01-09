import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const AboutPage = () => {
  return (
    <Layout>
      <h1>About Page</h1>
      <p>This is my bio page. Here is some stuff about me. </p>

      <p>
        Want to work with me? Reach out here..
        <Link to="/contact"> Contact</Link> me here.
      </p>
    </Layout>
  )
}

export default AboutPage
