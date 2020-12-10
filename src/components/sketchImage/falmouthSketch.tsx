import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import falmothImgSrc from "../../../static/falmouth.jpg"

const FalmouthSketch = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "falmouth.jpg" }) {
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

const falmouthSketch = {
  name: "Falmouth",
  img: () => <FalmouthSketch />,
  desc:
    "Not often do I get commission  work, but I did this one for my friend, Pete.",
  cat: "outdoors",
  src: falmothImgSrc,
}

export default falmouthSketch
