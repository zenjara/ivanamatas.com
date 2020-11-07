import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Navbar from "../components/Navbar/navbar"
import Footer from "../components/Footer/footer"
import Jumbotron from "../components/Jumbotron/jumbotron"
import IMSoonPlaceholder from "../components/Shared/IMSoonPlaceholder/IMSoonPlaceholder"
import PodcastIllustration from "../images/podcast.svg"
import TimelineMilestone from "../components/TimelineMilestone/timelineMilestone"
import PodcastImage from "../images/chakula.jpeg"


const PodcastPage = () => (
  <Layout>
    <SEO title="Podcast" />
    <Navbar />
    <Jumbotron title='Podcast' illustration={<PodcastIllustration />} reverse={true} />
    <TimelineMilestone title='Jurica Šeparović - od rada u agenciji do freelanceanja
[Chakula Podcast Ep #01]' image={PodcastImage} podcast={true} />
    <IMSoonPlaceholder />
    <Footer />
  </Layout>
)

export default PodcastPage
