import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "@emotion/styled"
import { CSSObject } from "@emotion/core"
import { Tooltip } from "@workday/canvas-kit-react-tooltip"

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
})

// const baseColorBlockStyle: CSSObject = {
//   position: "absolute",
//   height: 30,
//   width: 30,
//   zIndex: 1,
// }

// const Color1 = styled("div")({
//   ...baseColorBlockStyle,
//   left: 412,
//   top: 127,
// })

// const Color2 = styled("div")({
//   ...baseColorBlockStyle,
//   left: 412,
//   top: 174,
// })

// const Color3 = styled("div")({
//   ...baseColorBlockStyle,
//   left: 412,
//   top: 223,
// })
// const Color4 = styled("div")({
//   ...baseColorBlockStyle,
//   left: 412,
//   top: 273,
// })
// const Color5 = styled("div")({
//   ...baseColorBlockStyle,
//   left: 412,
//   top: 326,
// })
// const Color6 = styled("div")({
//   ...baseColorBlockStyle,
//   left: 412,
//   top: 374,
// })

const ImageHome = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "sketch-kit-1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 960) {
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
      {/* <Tooltip placement={"left"} title="Cobalt Blue Violet">
        <Color1></Color1>
      </Tooltip>
      <Tooltip placement={"left"} title="Moonglow">
        <Color2></Color2>
      </Tooltip>
      <Tooltip placement={"left"} title="Burnt Umber">
        <Color3></Color3>
      </Tooltip>
      <Tooltip placement={"left"} title="Sepia">
        <Color4></Color4>
      </Tooltip>
      <Tooltip placement={"left"} title="French Ultramarine">
        <Color5></Color5>
      </Tooltip>
      <Tooltip placement={"left"} title="Bloodstone Genuine">
        <Color6></Color6>
      </Tooltip> */}
      <Img fluid={data.placeholderImage.childImageSharp.fluid} />
    </StyledSketchContainer>
  )
}

export default ImageHome
