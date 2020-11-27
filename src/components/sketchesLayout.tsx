import React from "react"
import { Box } from "@chakra-ui/react"
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

        return (
          <motion.div key={sketch.name} whileHover={{ scale: 1.05 }}>
            <Box
              boxShadow="md"
              borderRadius={8}
              p={0}
              style={{
                display: "inline-flex",
                margin: "8px",
                width: 300,
                height: 200,
                justifyContent: "center",
                paddingTop: 0,
                cursor: "pointer",
              }}
              onClick={() =>
                handleGetImage(sketch.img(), sketch.name, sketch.desc)
              }
            >
              <StyledImageContainer>{sketch.img()}</StyledImageContainer>
            </Box>
          </motion.div>
        )
      })}
    </>
  )
}

export default SketchesLayout
