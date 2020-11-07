import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Navbar from "../components/Navbar/navbar"
import Experience from "../components/Experience/experience"
import Footer from "../components/Footer/footer"
import "../components/layout.css"

const AboutPage = () => (
  <Layout>
    <SEO title="Ivan Matas | About" />
    <div className="fullWidth">
      <Navbar active={true} />
      <Experience />
      <Footer />
    </div>
  </Layout>
)

export default AboutPage
