import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "@emotion/styled"

const LighthouseSketch = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "lighthouse.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (!data?.placeholderImage?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }

  return (
    <Img
      style={{ height: 200 }}
      fluid={data.placeholderImage.childImageSharp.fluid}
    />
  )
}

const lighthouseSketch = {
  name: "lighthouse",
  img: () => <LighthouseSketch />,
  desc:
    "A friend of mine wanted this piece of a really petty light house in Falmouth, MA",
}

export default lighthouseSketch
