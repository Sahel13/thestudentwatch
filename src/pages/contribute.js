import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from '../components/Layout'
import SEO from '../components/SEO'

import { css } from "@emotion/core"
import { rhythm } from '../utils/typography'

const ContributePage = () => {

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          email
        }
      }
    }
  `)
  
  return (
    <Layout>
      <SEO title="Contribute" description="Contribute to The Student Watch website." />

      <div css={css`padding: 0 ${rhythm(2/3)};`}>
        <h1 css={css`text-align: center;`}>Contribute</h1>
        <p>
          If you feel that you satisfy the following criteria - 
        </p>
        <ul>
          <li>Find the purpose of this website meaningful and would like to contribute to it.</li>
          <li>Have ideas / opinions / experiences related to its themes.</li>
        </ul>
        <p>then I would love to publish an article crafted by you. You would be mentioned as a guest author, and the article can be edited / taken down at any point in the future according to your discretion. You can contact me at <a href={"mailto:" + data.site.siteMetadata.email} rel="noreferrer">{data.site.siteMetadata.email}</a>.
        </p>
      </div>

    </Layout>
  )
}

export default ContributePage