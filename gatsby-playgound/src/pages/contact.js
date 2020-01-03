import React from "react"
import Layout from "../components/layout"

const ContactPage = () => {
  return (
    <Layout>
      <h1>Contact Us</h1>
      <p>we love hearing from you </p>
      <form style={{ dispaly: `flex`, flexDirection: `column` }}>
        <input placeholder="Name"></input>
        <input placeholder="Email"></input>
        <input placeholder="Phone number"></input>
        <textarea placeholder="Message"></textarea>
      </form>
    </Layout>
  )
}

export default ContactPage
