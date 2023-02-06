require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: 'http://localhost:1337',
        accessToken: process.env.STRAPI_TOKEN,
        collectionTypes: ['User', "quiz"],
        singleTypes: [],
      },
    }

  ],
}
