import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <h1>Hello</h1>
      <h2>
        I'm' Wesley, a full stack developer living on the beautiful Big Island
        of Hawaii.
      </h2>
      <p>
        Follow me on Twitter
        <a href="https://twitter.com" target="_blank">
          My Twitter.
        </a>
      </p>
      <p>
        Need a developer?<Link to="/contact">Contact me.</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
