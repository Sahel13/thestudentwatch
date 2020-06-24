import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import { css } from "@emotion/core"

// Takes in variant (dark or light) as a property

const NavigationBar = () => {
    const data = useStaticQuery(graphql`
        query {
            file(relativePath: {eq: "components/logoBanner.png"}) {
                childImageSharp {
                    fixed(width: 200) {
                        ...GatsbyImageSharpFixed_withWebp
                    }
                }
            }
        }
    `)

    return (
        <Navbar variant="dark" expand="md" css={NavBarStyle}>
            <Navbar.Brand href="/">
                <Img css={NavBrandImage} fixed={data.file.childImageSharp.fixed} alt="The Student Watch logo">
                </Img>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Link to="/" css={NavLinkStyle}>Articles</Link>
                    <Link to="/about/" css={NavLinkStyle}>About</Link>
                    <Link to="/contribute/" css={NavLinkStyle}>Contribute</Link>
                    <Link to="/subscribe/" css={NavLinkStyle}>Subscribe</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

const NavBrandImage = css`
    vertical-align: middle;
`

const NavBarStyle = css`
    background-color: black;
`

const NavLinkStyle = css`
    font-size: 20px;
    margin-left: 15px;
    padding: 5px 8px 5px 8px;
    color: white;
    opacity: 0.7;
    &:hover {
        background-color: rgba(50, 50, 50, 0.8);
        text-decoration: none;
        color: white;
        opacity: 1;
    }
    &:active {
        color: white;
    }
`

export default NavigationBar