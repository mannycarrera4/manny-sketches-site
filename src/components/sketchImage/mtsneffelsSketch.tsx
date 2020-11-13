import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const MtSneffelsSketch = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "mtsneffels.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
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

const mtsneffelsSketch = {
  name: "mtsneffels",
  img: () => <MtSneffelsSketch />,
  desc: "Drew this from a photo someone took and fell in love with the colors.",
}

export default mtsneffelsSketch
