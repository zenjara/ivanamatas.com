import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Navbar from "../components/Navbar/navbar"
import Footer from "../components/Footer/footer"
import Jumbotron from "../components/Jumbotron/jumbotron"
import IMSoonPlaceholder from "../components/Shared/IMSoonPlaceholder/IMSoonPlaceholder"
import TimelineMilestone from "../components/TimelineMilestone/timelineMilestone"

const BlogPage = () => (
  <Layout>
    <SEO title="Blog" />
    <Navbar />
    <Jumbotron />
    <TimelineMilestone />
    <IMSoonPlaceholder />
    <Footer />
  </Layout>
)

export default BlogPage
