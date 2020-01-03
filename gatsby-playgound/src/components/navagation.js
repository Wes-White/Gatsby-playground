import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

//import "./navagation.module.scss"
import NavStyles from "./navagation.module.scss"

const Nav = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <header className={NavStyles.header}>
      <h1>
        <Link
          className={NavStyles.title}
          activeClassName={NavStyles.activeClassName}
          to="/"
        >
          {data.site.siteMetadata.title}
        </Link>
      </h1>
      <nav>
        <ul className={NavStyles.navList}>
          <li>
            <Link
              className={NavStyles.navItem}
              activeClassName={NavStyles.activeClassName}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={NavStyles.navItem}
              activeClassName={NavStyles.activeClassName}
              to="/blog"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              className={NavStyles.navItem}
              activeClassName={NavStyles.activeClassName}
              to="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className={NavStyles.navItem}
              activeClassName={NavStyles.activeClassName}
              to="/contact"
            >
              Contact{" "}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Nav
