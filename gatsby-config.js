module.exports = {
  siteMetadata: {
      title: "The Student Watch",
      author: "Sahel Mohammad Iqbal",
      email: "thestudentwatch@gmail.com",
      description: "The Student Watch is a website for the younger generation to engage in political discourse.",
      siteUrl: "https://thestudentwatch.netlify.app",
      image: "static/logo.png",
      twitter: "@SahelMIqbal",
  },
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