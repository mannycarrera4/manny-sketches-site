import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import arturo from "../../../static/arturo.jpg"

const ArturoSketch = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "arturo.jpg" }) {
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

const arturoSketch = {
  name: "Arturo",
  img: () => <ArturoSketch />,
  desc:
    "This is my nephew, Arturo. He's a little monster. I usually never draw people but I made an exception for this little booger.",
  cat: "all",
  src: arturo,
}

export default arturoSketch
