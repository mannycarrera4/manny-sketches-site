import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import farmImgSrc from "../../../static/farm.jpg"

const FarmSketch = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "farm.jpg" }) {
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

const farmSketch = {
  name: "Farm",
  img: () => <FarmSketch />,
  desc:
    "An old rusty sugar cane trailer at our farm back home in the Dominican Republic.",
  cat: "outdoors",
  src: farmImgSrc,
}

export default farmSketch
