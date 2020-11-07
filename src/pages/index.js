import React from "react"
import { Link } from "gatsby"
import { Button, ButtonVariant } from "@workday/canvas-kit-react-button"

import Layout from "../components/layout"
import ImageHome from "../components/imageHome"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div
      style={{
        maxWidth: `960px`,
        marginBottom: `1.45rem`,
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <ImageHome />

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          css={{ width: "150px" }}
          variant={ButtonVariant.Primary}
          size="medium"
        >
          View Sketches
        </Button>
      </div>
    </div>
  </Layout>
)

export default IndexPage
