import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import canyonLandsImgSrc from "../../../static/canyon-lands.jpeg"

const CanyonLandsSketch = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "canyon-lands.jpeg" }) {
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

const canyonLandsSketch = {
  name: "Canyon Lands",
  img: () => <CanyonLandsSketch />,
  desc:
    "My buddy Bryan Tan planned a trip to Utah and took me to Canyon Lands. It's like a mini Grand Canyon. I feel in love with the different colors and layers of the canyon.",
  cat: "outdoors",
  src: canyonLandsImgSrc,
}

export default canyonLandsSketch
