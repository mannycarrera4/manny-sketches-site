import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SketchesLayout from "../components/sketchesLayout"
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  ModalHeader,
} from "@chakra-ui/react"

const SketchesPage = () => {
  // const [isOpen, setOpen] = React.useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [sketch, setSketch] = React.useState(null)

  const getImage = (img: any) => {
    onOpen()
    setSketch(img)
  }

  return (
    <Layout>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <SketchesLayout handleGetImage={getImage} />
        {/* <Modal handleClose={c} open={isOpen} heading="">
          {sketch}
        </Modal> */}
        <Modal size="lg" isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Hello World</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <div>{sketch}</div>
            </ModalBody>
          </ModalContent>
        </Modal>
      </div>
    </Layout>
  )
}

export default SketchesPage
