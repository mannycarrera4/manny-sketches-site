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
import ColorPalette from "../components/colorPalette"
import { motion } from "framer-motion"

const SketchesPage = (): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [sketch, setSketch] = React.useState(null)
  const [name, setName] = React.useState("")
  const [desc, setDesc] = React.useState("")
  const [filteredSketches, setFilteredSketches] = React.useState(sketchesArr)
  const [selected, setSelected] = React.useState("")
  const [imgSrc, setImgSrc] = React.useState("")
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
  const getImage = (img: any, name: string, desc: string, src: string) => {
    onOpen()
    setSketch(img)
    setName(name)
    setDesc(desc)
    setImgSrc(src)
  }

  const handleModalClose = () => {
    onClose()
    setShowPalette(false)
  }

  return (
    <Layout>
      <Filter onSelect={onSelect} selected={selected} />
      <Flex flexWrap="wrap" justify="center">
        <SketchCard
          filteredSketches={filteredSketches}
          handleGetImage={getImage}
        />
        <Modal size="xl" isOpen={isOpen} onClose={handleModalClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{name}</ModalHeader>
            <ModalCloseButton />
            <ModalBody paddingLeft={0} paddingRight={0}>
              <div style={{ marginBottom: 30 }}>{sketch}</div>
              <Flex mb="30px" pl="1.5rem" pr="1.5rem" flexDirection="column">
                <Text mb="20px">{desc}</Text>
                <Button onClick={handleShowPalette}>
                  {showPalette ? "Hide Color Palette" : "Show Color Palette"}
                </Button>
                {showPalette && (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                      hidden: {
                        opacity: 0,
                        height: 0,
                      },
                      visible: {
                        opacity: 1,
                        height: "100%",
                      },
                    }}
                  >
                    <ColorPalette src={imgSrc} />
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
