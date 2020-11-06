import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import ImageHome from "../components/imageHome"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ maxWidth: `960px`, marginBottom: `1.45rem` }}>
      <ImageHome />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
