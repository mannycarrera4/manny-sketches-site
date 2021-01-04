import { Link } from "gatsby"
import React, { useState, useEffect } from "react"
import Logo from "../components/logo"
import styled from "@emotion/styled"

const StyledLink = styled("div")({
  display: "inline-flex",
  flexDirection: "column",
  fontFamily: "sans-serif",
  margin: "2px 6px",
  a: {
    textDecoration: "none",
    color: "#3182ce",
    borderBottom: "3px solid transparent",
    transition: "border 150ms ease-out",
  },
  "&:hover": {
    a: {
      color: "#2b6cb0",
      borderBottom: "3px solid #2b6cb0",
    },
  },
})

const activeLinkStyle = {
  borderBottom: "3px solid #2b6cb0",
}

const Header = () => {
  const [scrollY, setScrollY] = useState(0)

  const logit = () => {
    setScrollY(window.pageYOffset)
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit)
    }
    watchScroll()
    return () => {
      window.removeEventListener("scroll", logit)
    }
  })

  return (
    <header
      style={{
        background: `white`,
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 1,
        boxShadow:
          scrollY > 40 ? "rgba(0, 0, 0, 0.08) 0px 2px 2px 0px" : undefined,
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
              <Link to="/about" activeStyle={activeLinkStyle}>
                About
              </Link>
            </StyledLink>
            <StyledLink>
              <Link activeStyle={activeLinkStyle} to="/sketches">
                Sketches
              </Link>
            </StyledLink>
          </div>
        </div>
      </div>
    </header>
  )
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
