import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import mtsneffelsImgSrc from "../../../static/mt-sneffels.jpeg"

const MtSneffelsSketch = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "mt-sneffels.jpeg" }) {
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

const mtsneffelsSketch = {
  name: "Mt Sneffels",
  img: () => <MtSneffelsSketch />,
  desc: "Drew this from a photo someone took and fell in love with the colors.",
  cat: "outdoors",
  src: mtsneffelsImgSrc,
}

export default mtsneffelsSketch
