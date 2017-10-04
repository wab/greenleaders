module.exports = {
  siteMetadata: {
    title: `GreenLeaders`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-react-next`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590,
              // Remove the default behavior of adding a link to each
              // image.
              linkImagesToOriginal: false,
            },
          },
        ]
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `zn4n7b753qwt`,
        accessToken: `544541f0fd22c2613ea611e30af0feccef88e4e31e789dc21af005fd000b186c`,
      },
    },
  ],
}
