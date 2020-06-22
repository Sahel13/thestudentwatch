import React from "react"

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Form from '../components/UnsubscriptionForm'

import { css } from "@emotion/core"
import { rhythm } from '../utils/typography'

const SubscribePage = () => {
    return (
        <Layout>
            <SEO title="Unsubscribe" description="Unsubsribe from The Student Watch website newsletter." />

            <div css={css`padding: 0 ${rhythm(2/3)};`}>
                <h1 css={css`text-align: center;`}>Unsubscribe</h1>
                <p>
                    If you no longer want to be notified when new articles are posted, please enter your email address in the form below and click Unsubscribe.
                </p>
                <Form />
            </div>

        </Layout>
    )
}

export default SubscribePage