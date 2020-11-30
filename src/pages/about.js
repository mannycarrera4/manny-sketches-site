import React from "react"
import Layout from "../components/layout"
import { Flex, Center, Heading } from "@chakra-ui/react"

const AboutPage = () => {
  return (
    <Layout>
      <Flex align="center" justify="center">
        <Center w="700px">
          <Heading size="2xl" textAlign="center">
            I suck at drawing, which is why I got into sketching.
          </Heading>
        </Center>
      </Flex>
    </Layout>
  )
}

export default AboutPage
