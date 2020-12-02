/* eslint-disable react/no-unescaped-entities */
import React from "react"
import { navigate } from "gatsby"

import Layout from "../components/layout"
import ImageHome from "../components/imageHome"
import { Text, Heading, Flex, Button } from "@chakra-ui/react"

const IndexPage = () => {
  const handleViewSketches = () => {
    navigate("/sketches")
  }
  return (
    <Layout>
      <Flex
        alignItems="center"
        justifyContent="center"
        height="calc(100vh - 200px)"
        flexDirection={{ base: "column", md: "row" }}
      >
        <div
          style={{
            display: "inline-flex",
            maxWidth: "100%",
            flexDirection: "column",
          }}
        >
          <Heading as="h1" mb={"16px"} size="2xl">
            Bienvenidos!
          </Heading>
          <Text mb={"24px"}>
            I'm Manny and I'd like to share with you some of my sketches.
          </Text>

          <Button
            onClick={handleViewSketches}
            variant="solid"
            size="md"
            colorScheme="blue"
          >
            View Sketches
          </Button>
        </div>
        <div style={{ display: "inline-block", width: "100%" }}>
          <ImageHome />
        </div>
      </Flex>
    </Layout>
  )
}

export default IndexPage
