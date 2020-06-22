import React from "react"

import Header from './Header'
import Footer from './Footer'

import styled from "@emotion/styled"
import '../styles/index.scss'
import { rhythm, scale } from '../utils/typography'

const Layout = (props) => {
    return (
        <React.Fragment>
            <EnclosingDiv>
                <GrowDiv>
                    <Header home={props.home}/>
                    {props.home ? 
                    <main>{props.children}</main> : 
                    <MainBody>{props.children}</MainBody>}
                </GrowDiv>
                <Footer/>
            </EnclosingDiv>
        </React.Fragment>
    )
}

Layout.defautProps = {
    home: false
}

const MainBody = styled.main`
    max-width: 800px;
    margin: auto;
    h1 {
        ${scale(1.45)};
        margin-top: ${rhythm(1/2)};
        margin-bottom: ${rhythm(1/2)};
        @media (min-width: 768px) {
            ${scale(1.8)};
        }
    }
    h2 {
        ${scale(0.9)};
        @media (min-width: 768px) {
            ${scale(1)};
        }
    }
`

const EnclosingDiv = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`

const GrowDiv = styled.div`
    flex-grow: 1;
`

export default Layout