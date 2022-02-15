module.exports = {
  siteMetadata: {
    title: "Developers! podcast",
  },

  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: "G-MEBM6DHT9G",
          cookieName: "acceptCookies",
          anonymize: true,
        },
        environments: ["production"],
      },
    },
  ],
};
