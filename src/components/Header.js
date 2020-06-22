import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { scale } from '../utils/typography'

import NavigationBar from './NavigationBar'

// Input parameter 'home' = true or false

const Header = (props) => {
    const data = useStaticQuery(graphql`
        query {
            file(relativePath: {eq: "components/homeImage.jpg"}) {
                childImageSharp {
                  fluid(maxWidth: 2000) {
                    ...GatsbyImageSharpFluid
                  }
                }
            }
        }
    `)

    const isHomePage = props.home

    if (isHomePage) {
        return (
            <header>
                <BackgroundImage css={BackgroundImageStyle} fluid={data.file.childImageSharp.fluid} alt="A protestor holding a placard that reads 'I can't breathe'.">
                    <NavigationBar/>
                    <HeaderText>
                        Commentary on social, political and humanitarian issues by students.
                    </HeaderText>
                </BackgroundImage>
            </header>
        )
    }
    else {
        return (
            <header>
                <NavigationBar/>
            </header>
        )
    }
}

const HeaderText = styled.p`
    ${scale(1/3)};
    color: white;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    text-align: center;
    padding: 1rem;
`

const BackgroundImageStyle = css`
    width: 100%;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`

export default Header