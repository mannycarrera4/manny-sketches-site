import { Link } from "gatsby"
import React from "react"
import Logo from "../components/logo"
import styled from "@emotion/styled"

export interface HeaderProps {
  siteTitle: string
}

const StyledLink = styled("div")({
  display: "inline-flex",
  flexDirection: "column",
  fontFamily: "sans-serif",
  margin: "2px 6px",
  a: {
    textDecoration: "none",
    color: "#3182ce",
  },
  ".hover-underline": {
    height: "3px",
    backgroundColor: "#2b6cb0",
    width: 0,
    transition: "width 150ms ease-out",
  },
  "&:hover": {
    a: {
      color: "#2b6cb0",
    },
    ".hover-underline": {
      width: "100%",
    },
  },
})

const Header = ({ siteTitle }: HeaderProps) => (
  <header
    style={{
      background: `white`,
      marginBottom: `1.45rem`,
      position: "fixed",
      top: 0,
      width: "100%",
      zIndex: 1,
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
          <StyledLink>
            <Link to="/">About</Link>
            <div className="hover-underline"></div>
          </StyledLink>
          {/* <StyledLink>
            <Link to="/">Contact</Link>
            <div className="hover-underline"></div>
          </StyledLink> */}
          <StyledLink>
            <Link to="/sketches">Sketches</Link>
            <div className="hover-underline"></div>
          </StyledLink>
        </div>
      </div>
    </div>
  </header>
)

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
