import React from "react"

import Layout from '../components/Layout'
import SEO from '../components/SEO'

import { css } from "@emotion/core"
import { rhythm } from '../utils/typography'

const NotFound = () => {
    return (
        <Layout>
            <SEO title="404" />
            
            <div css={css`padding: 0 ${rhythm(2/3)};`}>
                <h1>Page not found.</h1>
                <p>This page does not exist.</p>
            </div>

        </Layout>
    )
}

export default NotFound