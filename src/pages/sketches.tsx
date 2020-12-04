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
} from "@chakra-ui/react"
import Layout from "../components/layout"
import SketchCard from "../components/sketchCard"
import Filter from "../components/filter"
import { sketchesArr } from "../components/sketchImage"

const SketchesPage = (): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const [sketch, setSketch] = React.useState(null)
  const [name, setName] = React.useState("")
  const [desc, setDesc] = React.useState("")
  const [fileteredSketches, setFilteredSketches] = React.useState(sketchesArr)

  const [selected, setSelected] = React.useState("")
  const onSelect = (id: string) => {
    setSelected(id)
    if (id === "all") {
      setFilteredSketches(sketchesArr)
    } else {
      setFilteredSketches(sketchesArr.filter(index => index.cat === id))
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getImage = (img: any, name: string, desc: string) => {
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
          filteredSketches={fileteredSketches}
          handleGetImage={getImage}
        />
        <Modal size="xl" isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{name}</ModalHeader>
            <ModalCloseButton />
            <ModalBody style={{ paddingLeft: 0, paddingRight: 0 }}>
              <div style={{ marginBottom: 30 }}>{sketch}</div>
              <Text pl="1.5rem" pr="1.5rem" mb="50px">
                {desc}
              </Text>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Flex>
    </Layout>
  )
}

export default SketchesPage
