import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const RedrocksSketch = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "redrocks-vegas.jpeg" }) {
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

const redrocksSketch = {
  name: "Red Rocks, Las Vegas",
  img: () => <RedrocksSketch />,
  desc:
    "This was one of my favorite climbing Trips I've taken. I got to stay in Vegas, and then go to Red Rocks for some climbing.",
  cat: "outdoors",
}

export default redrocksSketch
