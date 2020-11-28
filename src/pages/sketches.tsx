import React from "react"
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  ModalHeader,
} from "@chakra-ui/react"
import Layout from "../components/layout"
import SketchesLayout from "../components/sketchesLayout"

const SketchesPage = (): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const [sketch, setSketch] = React.useState(null)
  const [name, setName] = React.useState("")
  const [desc, setDesc] = React.useState("")

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getImage = (img: any, name: string, desc: string) => {
    onOpen()
    setSketch(img)
    setName(name)
    setDesc(desc)
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
        <Modal size="lg" isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{name}</ModalHeader>
            <ModalCloseButton />
            <ModalBody style={{ paddingLeft: 0, paddingRight: 0 }}>
              <div style={{ marginBottom: 30 }}>{sketch}</div>
              <p
                style={{
                  paddingLeft: "1.5rem",
                  paddingRight: "1.5rem",
                  marginBottom: "50px",
                }}
              >
                {desc}
              </p>
            </ModalBody>
          </ModalContent>
        </Modal>
      </div>
    </Layout>
  )
}

export default SketchesPage
