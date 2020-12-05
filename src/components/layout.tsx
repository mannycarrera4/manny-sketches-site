/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { ChakraProvider } from "@chakra-ui/react"
import { motion } from "framer-motion"

import Header from "./header"
import "./layout.css"

export interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <ChakraProvider>
      <Header siteTitle={"Manny Sketches"} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 990,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <motion.div
          initial="pageInitial"
          animate="pageAnimate"
          variants={{
            pageInitial: {
              opacity: 0,
              y: -10,
            },
            pageAnimate: {
              opacity: 1,
              y: 0,
            },
          }}
        >
          <main style={{ marginTop: 110 }}>{children}</main>
        </motion.div>
        <footer
          style={{
            marginTop: `2rem`,
          }}
        ></footer>
      </div>
    </ChakraProvider>
  )
}

export default Layout
