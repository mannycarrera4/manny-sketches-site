import React from "react"
import Card from "@workday/canvas-kit-react-card"
import * as Sketches from "./sketchImage"

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

const ImportedSketches = Object.keys(Sketches)

const SketchesLayout = () => {
  return (
    <>
      {ImportedSketches.map(sketchKey => {
        // @ts-ignore
        const sketch = Sketches[sketchKey]
        return (
          <Card
            style={{
              display: "inline-flex",
              margin: "8px",
              width: 300,
              justifyContent: "center",
              paddingTop: 0,
            }}
            key={sketch.name}
          >
            <div>
              {sketch.img()}
              <div style={{ padding: "20px" }}>{sketch.desc}</div>
            </div>
          </Card>
        )
      })}
    </>
  )
}

export default SketchesLayout
