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
  handleGetImage: (img: React.ReactNode, title: string, desc: string) => void
}

const SketchesLayout = ({ handleGetImage }: SketchesLayoutProps) => {
  return (
    <>
      {ImportedSketches.map(sketchKey => {
        // @ts-ignore
        const sketch = Sketches[sketchKey]
        console.warn(sketch)
        return (
          <motion.div whileHover={{ scale: 1.05 }}>
            <Card
              padding={"0px"}
              style={{
                display: "inline-flex",
                margin: "8px",
                width: 300,
                height: 200,
                justifyContent: "center",
                paddingTop: 0,
                cursor: "pointer",
              }}
              key={sketch.name}
              onClick={() =>
                handleGetImage(sketch.img(), sketch.name, sketch.desc)
              }
            >
              <StyledImageContainer>{sketch.img()}</StyledImageContainer>
            </Card>
          </motion.div>
        )
      })}
    </>
  )
}

export default SketchesLayout
