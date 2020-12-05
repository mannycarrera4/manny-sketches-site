import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const HawaiiSketch = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "hawaii.jpg" }) {
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

const hawaiiSketch = {
  name: "Hawaii Vegetation",
  img: () => <HawaiiSketch />,
  desc:
    "I never thought I'd get the chance to go to Hawaii. Luckily, I was able to experience the beauty of it with someone special",
  cat: "outdoors",
}

export default hawaiiSketch
