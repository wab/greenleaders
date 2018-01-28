module.exports = {
  siteMetadata: {
    title: `GreenLeaders`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-react-next`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-remark-images`,
      options: {
        // It's important to specify the maxWidth (in pixels) of
        // the content container as this plugin uses this as the
        // base for generating different widths of each image.
        maxWidth: 590,
        // Remove the default behavior of adding a link to each
        // image.
        linkImagesToOriginal: false
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `7yrilk3o6kx9`,
        accessToken: `4dcced53197c7a3c59a33f4208bc155ea68d573ec9772648d4abead5e20fab21`
      }
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`
      }
    }
  ]
};
