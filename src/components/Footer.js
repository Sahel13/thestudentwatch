import React from "react"
import { Link } from "gatsby"

import styled from "@emotion/styled"
import { rhythm, scale } from '../utils/typography'

const Footer = () => {
    return (
        <SiteFooter>
            <p>Consider <Link to="/contribute">contributing to The Student Watch.</Link></p>
            <p>If you have a suggestion for improving the website, please <a href="https://github.com/Sahel13/TheStudentWatch/issues" target="_blank" rel="noreferrer noopener">open a Github issue.</a></p>
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
        line-height: ${rhythm(3/4)};
        margin: ${rhythm(4/8)} 0;
    }
    a {
        color: white;
    }
`

export default Footer