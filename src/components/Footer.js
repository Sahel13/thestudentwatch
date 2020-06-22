import React from "react"
import { Link } from "gatsby"

import styled from "@emotion/styled"
import { rhythm, scale } from '../utils/typography'

const Footer = () => {
    return (
        <SiteFooter>
            <p>Consider <Link to="/contribute">contributing</Link> to The Student Watch.</p>
            <p>If you have a suggestion for improving the website, consider openeing a <a href="https://github.com/Sahel13/Sahel13.github.io" target="_blank" rel="noreferrer noopener">Github</a> issue.</p>
            <p>This website is licensed under a <a target="_blank" rel="license noreferrer noopener" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>.</p>
        </SiteFooter>
    )
}

const SiteFooter = styled.footer`
    background-color: black;
    color: rgba(255, 255, 255, 0.8);
    p {
        ${scale(-1/3)};
        text-align: center;
        padding: 0 ${rhythm(1/3)};
        margin: ${rhythm(1/8)} 0;
    }
    a {
        color: white;
    }
`

export default Footer