import React, { useEffect } from "react"
import useImageColor from "use-image-color"
import { Grid } from "@chakra-ui/react"

export interface ColorPaletteProps
  extends React.HTMLAttributes<HTMLDivElement> {
  src: string
}

const ColorPalette = ({ src, ...elemProps }: ColorPaletteProps) => {
  const [imgSrc, setImgSrc] = React.useState("")
  useEffect(() => {
    setImgSrc(src)
  }, [src])
  const { colors } = useImageColor(imgSrc, { cors: true, colors: 12 })

  console.warn("colors arr", colors)
  return (
    <Grid
      mt="20px"
      mb="40px"
      templateColumns="repeat(4, 1fr)"
      gap={2}
      {...elemProps}
    >
      {colors
        ? colors.map((color: any) => (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                borderRadius: "4px",
                border: "1px solid lightgray",
                width: "140px",
              }}
              key={color}
            >
              <div
                style={{
                  height: 30,
                  width: 30,
                  backgroundColor: `${color}`,
                  borderRadius: "4px",
                  margin: "5px",
                  display: "inline-flex",
                  boxShadow: "inset 0px 0px 0px 1px rgba(0, 0, 0, 0.25)",
                }}
              ></div>
              <span
                style={{
                  marginRight: "15px",
                  marginLeft: "5px",
                  color: `${color}`,
                }}
              >
                {color}
              </span>
            </div>
          ))
        : null}
    </Grid>
  )
}

export default ColorPalette
