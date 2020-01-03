import React from "react"
import { Link } from "gatsby"

const Nav = () => {
  return (
    <navbar style={{ display: `flex`, justifyContent: `space-around` }}>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <nav>
        <Link to="/blog">Blog</Link>
      </nav>
      <nav>
        <Link to="/about">About</Link>
      </nav>
      <nav>
        <Link to="/contact">Contact </Link>
      </nav>
    </navbar>
  )
}

export default Nav
