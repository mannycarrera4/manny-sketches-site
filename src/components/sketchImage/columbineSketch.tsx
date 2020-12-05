import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ColumbineSketch = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "colorado-columbine.jpg" }) {
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

const columbineSketch = {
  name: "Columbine Flower",
  img: () => <ColumbineSketch />,
  desc:
    "In the spring time in Colorado, these beautiful flowers bloom and cover the alpine.",
  cat: "outdoors",
}

export default columbineSketch
