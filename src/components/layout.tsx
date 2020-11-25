/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { ChakraProvider } from "@chakra-ui/react"

import Header from "./header"
import "./layout.css"

export interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

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
        <main style={{ marginTop: 174 }}>{children}</main>
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
