import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const BlackCatSketch = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "mcdonaldsdog.jpg" }) {
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

const blackCatSketch = {
  name: "McDonalds Dog",
  img: () => <BlackCatSketch />,
  desc:
    "I got commissioned to draw this happy looking dog. I loved that he was next to a McDonalds box.",
  cat: "animals",
}

export default blackCatSketch
