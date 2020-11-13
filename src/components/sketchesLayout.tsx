import React from "react"
import Card from "@workday/canvas-kit-react-card"
import * as Sketches from "./sketchImage"
import styled from "@emotion/styled"
import { motion } from "framer-motion"

const ImportedSketches = Object.keys(Sketches)

const StyledImageContainer = styled("div")({
  position: "relative",
  img: {
    borderTopLeftRadius: "8px",
    borderTopRightRadius: "8px",
  },
})

const SketchesLayout = () => {
  return (
    <>
      {ImportedSketches.map(sketchKey => {
        // @ts-ignore
        const sketch = Sketches[sketchKey]
        return (
          <motion.div whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.05 }}>
            <Card
              padding={"0px"}
              style={{
                display: "inline-flex",
                margin: "8px",
                width: 300,
                height: 282,
                justifyContent: "center",
                paddingTop: 0,
              }}
              key={sketch.name}
            >
              <div>
                <StyledImageContainer>{sketch.img()}</StyledImageContainer>
                <div style={{ padding: "20px" }}>{sketch.desc}</div>
              </div>
            </Card>
          </motion.div>
        )
      })}
    </>
  )
}

export default SketchesLayout
