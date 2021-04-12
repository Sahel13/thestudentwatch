module.exports = {
  siteMetadata: {
      title: "The Student Watch",
      author: "Sahel Mohammad Iqbal",
      email: "sahel13miqbal@protonmail.ch",
      description: "The Student Watch is a website for the younger generation to engage in political discourse. The Student Watch contains opinion pieces by students on social, political and humanitarian issues.",
      siteUrl: "https://sahel13.github.io/thestudentwatch",
      image: "static/logo.png",
  },
  pathPrefix: "/thestudentwatch",
  plugins: [
      'gatsby-plugin-react-helmet',
      `gatsby-plugin-sitemap`,
      `gatsby-plugin-emotion`,
      'gatsby-plugin-sass',
      'gatsby-plugin-catch-links',
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: `The Student Watch`,
          short_name: `The Student Watch`,
          start_url: `/`,
          background_color: `black`,
          theme_color: `black`,
          display: `standalone`,
          icon: `static/logo.png`,
        },
      },
      `gatsby-plugin-offline`,
      {
        resolve: 'gatsby-source-filesystem',
        options: {
            name: 'src',
            path: `${__dirname}/src/`
        }
      },
      'gatsby-plugin-sharp',
      'gatsby-transformer-sharp',
      {
        resolve: 'gatsby-transformer-remark',
        options: {
            plugins: [
                'gatsby-remark-relative-images',
                {
                    resolve: 'gatsby-remark-images',
                    options: {
                        linkImagesToOriginal: false
                    }
                }
            ]
        }
      },
      {
        resolve: `gatsby-plugin-typography`,
        options: {
          pathToConfigModule: `src/utils/typography`,
        },
      },
  ]
}
