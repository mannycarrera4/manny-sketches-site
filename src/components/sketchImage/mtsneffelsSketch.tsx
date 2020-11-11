import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "@emotion/styled"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.com/docs/use-static-query/
 */

const StyledSketchContainer = styled("div")({
  position: "relative",
  width: 300,
  img: {
    borderTopLeftRadius: "8px",
    borderTopRightRadius: "8px",
  },
})

const MtSneffelsSketch = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "mtsneffels.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
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
    <StyledSketchContainer>
      <Img
        style={{ height: 200 }}
        fluid={data.placeholderImage.childImageSharp.fluid}
      />
    </StyledSketchContainer>
  )
}

const mtsneffelsSketch = {
  name: "mtsneffels",
  img: () => <MtSneffelsSketch />,
  desc: "a sketch of a beautiful waterfall in hawaii",
}

export default mtsneffelsSketch
