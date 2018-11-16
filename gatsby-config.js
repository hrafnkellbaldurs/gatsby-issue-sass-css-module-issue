const { name: repoName } = require('./package.json')

module.exports = {
    pathPrefix: `/${repoName}`,
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sass`,
    ]
}
