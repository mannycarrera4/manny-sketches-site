import { Link } from "gatsby"
import React from "react"
import Logo from "../components/logo"
import styled from "@emotion/styled"

export interface HeaderProps {
  siteTitle: string
}

const Header = ({ siteTitle }: HeaderProps) => (
  <header
    style={{
      background: `white`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link
          to="/"
          style={{
            color: `blue`,
            textDecoration: `none`,
            display: "inline-flex",
          }}
        >
          <Logo />
        </Link>
        <div>
          <Link to="/">About</Link>
          <Link
            style={{
              color: "#252c71",
              fontFamily: "sans-serif",
              padding: "2px 8px",
            }}
            to="/"
          >
            Contact
          </Link>
          <Link
            style={{
              color: "#252c71",
              fontFamily: "sans-serif",
              padding: "2px 8px",
            }}
            to="/"
          >
            Sketches
          </Link>
        </div>
      </div>
    </div>
  </header>
)

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
