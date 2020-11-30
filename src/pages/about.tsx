import React from "react"
import Layout from "../components/layout"
import { Flex, Center, Heading } from "@chakra-ui/react"
import ImageAbout from "../components/imageAbout"
import { motion } from "framer-motion"

const AboutPage = () => {
  return (
    <Layout>
      <Flex align="center" justify="center" flexDirection="column">
        <Center style={{ maxWidth: "700px", width: "100%" }}>
          <Heading size="2xl" textAlign="center" mb="60px">
            I'm a <span style={{ color: "#0079ff" }}>caribbean</span> that fell
            in love with the <span style={{ color: "#02c85e" }}>mountains</span>
          </Heading>
        </Center>
        <div style={{ width: "80%" }}>
          <ImageAbout />
        </div>
      </Flex>
    </Layout>
  )
}

export default AboutPage
