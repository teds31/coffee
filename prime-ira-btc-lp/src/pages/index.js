import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"

import Layout from "../components/layout"
import SEO from "../components/seo"
import IntroText from "../components/IntroText"
import SavingsSection from "../components/SavingsSection"
import FeaturesSection from "../components/FeaturesSection"
import SuccessfulRaises from "../components/SuccessfulRaises"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <IntroText />
    <SavingsSection />
    <FeaturesSection />
    <SuccessfulRaises />
  </Layout>
)

export default IndexPage
