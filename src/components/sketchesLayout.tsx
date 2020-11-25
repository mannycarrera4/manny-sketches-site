import React from "react"
import Card from "@workday/canvas-kit-react-card"
import * as Sketches from "./sketchImage"
import styled from "@emotion/styled"
import { motion } from "framer-motion"

const ImportedSketches = Object.keys(Sketches)

const StyledImageContainer = styled("div")({
  position: "relative",
  height: 200,
  width: 300,
  overflow: "hidden",
  borderRadius: "8px",
})

export interface SketchesLayoutProps {
  handleGetImage: (img: React.ReactNode) => void
}

const SketchesLayout = ({ handleGetImage }: SketchesLayoutProps) => {
  return (
    <>
      {ImportedSketches.map(sketchKey => {
        // @ts-ignore
        const sketch = Sketches[sketchKey]
        return (
          <motion.div
            key={sketch.name}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
          >
            <Card
              padding={"0px"}
              style={{
                display: "inline-flex",
                margin: "8px",
                width: 300,
                height: 200,
                justifyContent: "center",
                paddingTop: 0,
              }}
              onClick={() => handleGetImage(sketch.img())}
            >
              <StyledImageContainer>{sketch.img()}</StyledImageContainer>
              {/* {sketch.desc} */}
            </Card>
          </motion.div>
        )
      })}
    </>
  )
}

export default SketchesLayout
