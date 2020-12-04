import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const BildmoreCastleSketch = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "biltmore-castle.jpeg" }) {
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

const bildmoreCastleSketch = {
  name: "Biltmore Mansion",
  img: () => <BildmoreCastleSketch />,
  desc: "Had the chance to go to North Carolina and visit a big ass mansion.",
  cat: "outdoors",
}

export default bildmoreCastleSketch
