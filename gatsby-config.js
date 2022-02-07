module.exports = {
  siteMetadata: {
    title: `portfolio`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-material-ui",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          pages: require.resolve("./src/components/layout.js"),
          default: require.resolve("./src/components/layout.js"),
        },
      },
    },
  ],
};
