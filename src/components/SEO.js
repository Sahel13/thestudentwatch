import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ title, description, image, article }) => {
  const { pathname } = useLocation()

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteTitle: title
          siteDescription: description
          siteUrl
          twitter
        }
      }
      file(relativePath: {eq: "images/logo.png"}) {
        publicURL
      }
    }
  `)

  const {
    siteTitle,
    siteDescription,
    siteUrl,
    twitter,
    } = data.site.siteMetadata

  const siteLogo = data.file.publicURL

  const seo = {
      title: title || siteTitle,
      description: description || siteDescription,
      image: `${siteUrl}${image || siteLogo}`,
      url: `${siteUrl}${pathname}`,
  }

  let pageTitle
  if (title == null) {
    pageTitle = siteTitle
  } else {
      pageTitle = `${seo.title} | ${siteTitle}`
  }

  return (
      <Helmet title={pageTitle}>

          <link rel="canonical" href={seo.url} />
          <meta name="description" content={seo.description} />
          <meta name="image" content={seo.image} />

          <meta property="og:site_name" content={siteTitle} />
          <meta property="og:url" content={seo.url} />
          <meta property="og:type" content={article ? "article" : "website"} />
          <meta property="og:title" content={seo.title} />
          <meta property="og:description" content={seo.description} />
          <meta property="og:image" content={seo.image} />

          <meta name="twitter:card" content={article ? "summary_large_image" : "summary"} />
          <meta name="twitter:creator" content={twitter} />
          <meta name="twitter:title" content={seo.title} />
          <meta name="twitter:description" content={seo.description} />
          <meta name="twitter:image" content={seo.image} />

      </Helmet>
  )
}

export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
}

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  article: false,
}