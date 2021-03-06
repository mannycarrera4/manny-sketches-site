import React from "react"
import { Box } from "@chakra-ui/react"
import styled from "@emotion/styled"
import { motion } from "framer-motion"

const StyledImageContainer = styled("div")({
  position: "relative",
  height: 200,
  width: 300,
  overflow: "hidden",
  borderRadius: "8px",
})

export interface SketchCardProps {
  handleGetImage: (
    img: React.ReactNode,
    title: string,
    desc: string,
    src: string
  ) => void
  filteredSketches: any
}

const SketchCard = ({ handleGetImage, filteredSketches }: SketchCardProps) => {
  return (
    <>
      {filteredSketches.map((sketchKey: any) => {
        // @ts-ignore
        const sketch = sketchKey
        return (
          <motion.div key={sketch.name} whileHover={{ scale: 1.05 }}>
            <Box
              boxShadow="md"
              borderRadius={8}
              p={0}
              margin="8px"
              width="300px"
              height="200px"
              justifyContent="center"
              paddingTop="0px"
              cursor="pointer"
              onClick={() => {
                handleGetImage(
                  sketch.img(),
                  sketch.name,
                  sketch.desc,
                  sketch.src
                )
              }}
            >
              <StyledImageContainer>{sketch.img()}</StyledImageContainer>
            </Box>
          </motion.div>
        )
      })}
    </>
  )
}

export default SketchCard
