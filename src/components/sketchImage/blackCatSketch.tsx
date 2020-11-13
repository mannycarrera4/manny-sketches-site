import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const BlackCatSketch = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "blackcat.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
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
      style={{ maxHeight: 200, width: 300 }}
      fluid={data.placeholderImage.childImageSharp.fluid}
    />
  )
}

const blackCatSketch = {
  name: "blackcat",
  img: () => <BlackCatSketch />,
  desc: "A friends black cat with a little flare",
}

export default blackCatSketch
