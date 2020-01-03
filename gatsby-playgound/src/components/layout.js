import React from "react"
import Nav from "../components/navagation"
import Footer from "../components/footer"
import layoutStyles from "./layout.module.scss"
const Layout = props => {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <Nav />
        {props.children}
      </div>

      <Footer />
    </div>
  )
}

export default Layout
