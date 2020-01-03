import React from "react"
import Nav from "../components/navagation"
import Footer from "../components/footer"

const Layout = props => {
  return (
    <div>
      <Nav />
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout
