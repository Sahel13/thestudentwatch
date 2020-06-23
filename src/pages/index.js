import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from '../components/Layout'
import SEO from '../components/SEO'

import HomePageStyles from '../styles/HomePage.module.scss'
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { rhythm, scale } from '../utils/typography'

import { Container, Row, Col } from 'react-bootstrap'

const HomePage = () => {
  
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            frontmatter {
              title
              date(formatString: "MMMM DD, YYYY")
              excerpt
              author
              image {
                childImageSharp {
                  fluid(maxWidth: 540) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <Layout home={true}>
      
      <SEO />
      <LatestArticlesHeading>Latest Articles</LatestArticlesHeading>

      <Container>
        <Row className="justify-content-center">
          {data.allMarkdownRemark.edges.map((edge) => {
            return (
              <Col as='article' className={HomePageStyles.article} md={6} xl={4} itemscope itemtype="http://schema.org/Article">
                <Link to={`/${edge.node.fields.slug}`}>
                  <Img
                  fluid={edge.node.frontmatter.image.childImageSharp.fluid}
                  alt="Associated with the post."
                  />
                  <div css={css`padding: ${rhythm(2/3)};`}>
                    <h2 css={css`${scale(1.3)}`} itemprop="name">{edge.node.frontmatter.title}</h2>
                    <Paragraph itemprop="abstract">{edge.node.frontmatter.excerpt}</Paragraph>
                    <Paragraph>Published on <span itemprop="datePublished">{edge.node.frontmatter.date}</span></Paragraph>
                    <Paragraph>by <span itemprop="author">{edge.node.frontmatter.author}</span></Paragraph>
                  </div>
                </Link>
              </Col>
            )
          })}
        </Row>
      </Container>
      
    </Layout>
  )
}

const LatestArticlesHeading = styled.h1`
  margin: 0;
  ${scale(1.6)}
  padding: ${rhythm(1)} 0;
  text-align: center;
`

const Paragraph = styled.p`
  margin-bottom: ${rhythm(1/2)};
`

export default HomePage