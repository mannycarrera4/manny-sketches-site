import React from "react"
import Layout from "../components/layout"
import { Flex, Center, Heading, Text } from "@chakra-ui/react"
import ImageAbout from "../components/imageAbout"

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
        <div style={{ width: "80%", marginBottom: "30px" }}>
          <ImageAbout />
        </div>
        <div style={{ maxWidth: "750px" }}>
          <Text fontSize="22px" mb="30px">
            I was born in the Dominican Republic, but made my way to Colorado.
            When I was younger, I got into drawing when one of my friends taught
            me how to draw Goku from Dragon Ball Z.{" "}
          </Text>
          <Text fontSize="22px" mb="30px">
            I had no idea what sketching was until I got to highschool and had
            an amazing art teacher that showed me the freedom of sketching. My
            medium of choice was originally pencil, but later explored how messy
            and perfectly un perfect water colors were.
          </Text>
          <Text fontSize="22px" mb="30px">
            Later in college, I had the chance to participate in an Urban
            Sketchers Symposium. This was the first time I experienced such a
            supportive and diverse community of artists and I fell in love with
            it.
          </Text>
          <Text fontSize="22px" mb="30px">
            The art you see on here are a mix of on site sketches, commissions,
            experiences, and a little of what makes me happy. I hope you enjoy!
          </Text>
        </div>
      </Flex>
    </Layout>
  )
}

export default AboutPage
