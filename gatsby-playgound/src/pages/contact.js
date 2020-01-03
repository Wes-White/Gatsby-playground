import React from "react"
import Nav from "../components/navagation"
import Footer from "../components/footer"

const ContactPage = () => {
  return (
    <div>
      <Nav />
      <h1>Contact Us</h1>
      <p>we love hearing from you </p>
      <form style={{ dispaly: `flex`, flexDirection: `column` }}>
        <input placeholder="Name"></input>
        <input placeholder="Email"></input>
        <input placeholder="Phone number"></input>
        <textarea placeholder="Message"></textarea>
      </form>
      <Footer />
    </div>
  )
}

export default ContactPage
