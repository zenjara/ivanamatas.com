import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Navbar from "../components/Navbar/navbar"
import Introduction from "../components/Introduction/introduction"
import ImDivider from "../components/Shared/IMDivider/imDivider"
import LatestContent from "../components/LatestContent/latestContent"
import Contact from "../components/Contact/contact"
import Footer from "../components/Footer/footer"
import "../components/layout.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Ivan Matas | Home" />
    <div className="fullWidth">
      <Navbar />
      <Introduction />
    </div>
    <ImDivider />
    <div className="fullWidth">
      <LatestContent className='fullWidth' />
    </div>
    <ImDivider title='Contact' />
    <div className="fullWidth">
      <Contact className='fullWidth' />
      <Footer className='fullWidth' />
    </div>
  </Layout>
)

export default IndexPage
