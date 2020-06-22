import React from "react"

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Form from '../components/SubscriptionForm'

import { css } from "@emotion/core"
import { rhythm } from '../utils/typography'

const SubscribePage = () => {
    return (
        <Layout>
            <SEO title="Subscribe" description="Subscribe to The Student Watch website." />

            <div css={css`padding: 0 ${rhythm(2/3)};`}>
                <h1 css={css`text-align: center;`}>Subscribe</h1>
                <p>
                    If you like the content on the website, and would like to be notified when new articles are posted, you can subscribe via RSS(link to RSS) or by email by submitting the form below:
                </p>
                <Form />
                <p>
                    If neither of those options tickles your fancy, you could simply drop in from time to time. Keep in mind that the website may be hard to find as it is new, so you might want to bookmark it.
                </p>
            </div>

        </Layout>
    )
}

export default SubscribePage