import React from "react"
import { Link } from "gatsby"

const ContactPage = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <h1>Contact Us</h1>
      <p>we love hearing from you </p>
      <form style={{ dispaly: `flex`, flexDirection: `column` }}>
        <input placeholder="Name"></input>
        <input placeholder="Email"></input>
        <input placeholder="Phone number"></input>
        <textarea placeholder="Message"></textarea>
      </form>
    </div>
  )
}

export default ContactPage
