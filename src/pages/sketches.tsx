import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SketchesLayout from "../components/sketchesLayout"

const SketchesPage = () => (
  <Layout>
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      <SketchesLayout />
    </div>
  </Layout>
)
export default SketchesPage
