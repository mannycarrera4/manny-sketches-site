import React from "react"
import { navigate } from "gatsby"
import { Button } from "@chakra-ui/react"

import Layout from "../components/layout"
import ImageHome from "../components/imageHome"
import SEO from "../components/seo"

const IndexPage = () => {
  const handleViewSketches = () => {
    navigate("/sketches")
  }
  return (
    <Layout>
      <SEO title="Home" />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "calc(100vh - 200px)",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            maxWidth: "100%",
            flexDirection: "column",
          }}
        >
          <h1 style={{ fontSize: 64, marginBottom: 16 }}>Bievenidos</h1>
          <p style={{ marginBottom: "20px" }}>
            I'm Manny and I'd like to share with you some of my sketches.
          </p>
          <div style={{ display: "flex" }}>
            <Button
              onClick={handleViewSketches}
              css={{ width: "150px" }}
              variant="solid"
              size="md"
              colorScheme="blue"
            >
              View Sketches
            </Button>
          </div>
        </div>
        <div style={{ display: "inline-block", width: "100%" }}>
          <ImageHome />
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
