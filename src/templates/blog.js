import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { rhythm, scale } from "../utils/typography"

import { Container, Row, Col } from "react-bootstrap"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        author
        authorInfo
        excerpt
        description
        imageCredits
        image {
          publicURL
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      html
      fields {
        slug
      }
    }
  }
`

const Blog = props => {
  const baseUrl = "https://thestudentwatch.live"
  const blogPost = props.data.markdownRemark.frontmatter
  const twitterMessage =
    "Check out this new article at The Student Watch website."
  return (
    <Layout>
      <SEO
        title={blogPost.title}
        description={blogPost.description}
        image={blogPost.image.publicURL}
        article={true}
      />

      <article itemscope itemtype="http://schema.org/Article">
        <header
          css={css`
            padding: 0 ${rhythm(2 / 3)};
          `}
        >
          <h1 itemprop="name">{blogPost.title}</h1>
          <ArticleInfo itemprop="abstract">{blogPost.excerpt}</ArticleInfo>
          <hr />
          <Container
            fluid
            css={css`
              padding: 0;
            `}
          >
            <Row noGutters={true}>
              <Col>
                <ArticleInfo>
                  Published on{" "}
                  <span itemprop="datePublished">{blogPost.date}</span>
                </ArticleInfo>
              </Col>
            </Row>
            <Row noGutters={true}>
              <Col xs={9}>
                <ArticleInfo>
                  by <span itemprop="author">{blogPost.author}</span>
                </ArticleInfo>
              </Col>
              <Col xs={3}>
                <p
                  css={css`
                    text-align: right;
                  `}
                >
                  <a
                    href={
                      "https://twitter.com/share?url=" +
                      baseUrl +
                      "/" +
                      props.data.markdownRemark.fields.slug +
                      "/" +
                      "&text=" +
                      twitterMessage
                    }
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <FontAwesomeIcon
                      width="21"
                      css={socialIcons}
                      icon={faTwitter}
                    />
                  </a>
                  <a
                    href={
                      "https://www.facebook.com/sharer/sharer.php?u=" +
                      baseUrl +
                      "/" +
                      props.data.markdownRemark.fields.slug +
                      "/"
                    }
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <FontAwesomeIcon
                      width="21"
                      css={socialIcons}
                      icon={faFacebook}
                    />
                  </a>
                </p>
              </Col>
            </Row>
          </Container>
        </header>
        <Img
          css={css`
            margin-bottom: ${rhythm(1 / 4)};
          `}
          fluid={blogPost.image.childImageSharp.fluid}
          alt="Associated with the post."
        />
        <ImageRef>{blogPost.imageCredits}</ImageRef>
        <div
          css={css`
            padding: ${rhythm(2 / 3)};
            padding-bottom: 0;
          `}
          dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
        />
        <div
          css={css`
            padding: 0 ${rhythm(2 / 3)};
          `}
        >
          <hr />
          <AuthorInfo>{blogPost.authorInfo}</AuthorInfo>
        </div>
      </article>
    </Layout>
  )
}

const socialIcons = css`
  ${scale(1 / 3)};
  color: black;
  margin-left: 10px;
`
const ImageRef = styled.span`
  ${scale(-1 / 4)};
  color: rgba(0, 0, 0, 0.8);
  padding: 0 ${rhythm(2 / 3)};
`

const ArticleInfo = styled.p`
  margin-bottom: ${rhythm(1 / 2)};
`

const AuthorInfo = styled.p`
  ${scale(-0.2)};
  color: rgba(0, 0, 0, 0.7);
`

export default Blog
