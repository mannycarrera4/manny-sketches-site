import React from "react"
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  ModalHeader,
  Flex,
  Text,
  Button,
} from "@chakra-ui/react"
import Layout from "../components/layout"
import SketchCard from "../components/sketchCard"
import Filter from "../components/filter"
import { sketchesArr } from "../components/sketchImage"
import { motion } from "framer-motion"

const SketchesPage = (): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [sketch, setSketch] = React.useState(null)
  const [name, setName] = React.useState("")
  const [desc, setDesc] = React.useState("")
  const [filteredSketches, setFilteredSketches] = React.useState(sketchesArr)
  const [selected, setSelected] = React.useState("")
  const [paletteColors, setPaletteColors] = React.useState([])
  const [showPalette, setShowPalette] = React.useState(false)

  const handleShowPalette = () => {
    setShowPalette(!showPalette)
  }

  const onSelect = (id: string) => {
    setSelected(id)

    if (id === "all") {
      setFilteredSketches(sketchesArr)
    } else {
      setFilteredSketches(sketchesArr.filter(index => index.cat === id))
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getImage = (img: any, name: string, desc: string, palette: any) => {
    setPaletteColors(palette)
    onOpen()
    setSketch(img)
    setName(name)
    setDesc(desc)
  }

  return (
    <Layout>
      <Filter onSelect={onSelect} selected={selected} />
      <Flex flexWrap="wrap" justify="center">
        <SketchCard
          filteredSketches={filteredSketches}
          handleGetImage={getImage}
        />
        <Modal size="xl" isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{name}</ModalHeader>
            <ModalCloseButton />
            <ModalBody style={{ paddingLeft: 0, paddingRight: 0 }}>
              <div style={{ marginBottom: 30 }}>{sketch}</div>
              <Flex pl="1.5rem" pr="1.5rem" flexDirection="column">
                <Text mb="50px">{desc}</Text>
                <Button onClick={handleShowPalette}>Show Color Palette</Button>
                {showPalette && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {paletteColors.map(color => (
                      <div
                        style={{ display: "flex", flexDirection: "column" }}
                        key={color}
                      >
                        <div
                          style={{
                            height: 40,
                            width: 40,
                            backgroundColor: `${color}`,
                            borderRadius: "50%",
                            margin: "5px",
                            display: "inline-flex",
                          }}
                        ></div>
                        <span style={{ marginTop: "10px", color: `${color}` }}>
                          {color}
                        </span>
                      </div>
                    ))}
                  </motion.div>
                )}
              </Flex>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Flex>
    </Layout>
  )
}

export default SketchesPage
