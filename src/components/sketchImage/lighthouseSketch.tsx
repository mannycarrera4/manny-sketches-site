import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const LighthouseSketch = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "lighthouse-ma.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (!data?.placeholderImage?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}

const lighthouseSketch = {
  name: "Light House in Falmouth",
  img: () => <LighthouseSketch />,
  desc:
    "Apparently, Falmout, MA is filled with light houses. This was another commission piece that I really enjoyed working on with all the different colors.",
}

export default lighthouseSketch
