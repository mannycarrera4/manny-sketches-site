import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import flatironsImgSrc from "../../../static/flatirons.jpg"

const FlatironsSketch = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "flatirons.jpg" }) {
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

const flatironsSketch = {
  name: "Flatirons",
  img: () => <FlatironsSketch />,
  desc:
    "I remember the first time I saw the flatirons, my jaw dropped. I'm glad I can call this place home.",
  cat: "outdoors",
  src: flatironsImgSrc,
}

export default flatironsSketch
