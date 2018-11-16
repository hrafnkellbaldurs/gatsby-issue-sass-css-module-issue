const {
    name,
    repository: { url: repoUrl },
    description,
    author,
    keywords
} = require('./package.json')
const repoName = repoUrl.split('/')[repoUrl.length - 1]

module.exports = {
    pathPrefix: `/${repoName}`,
    siteMetadata: {
        title: name,
        description,
        author,
        keywords: keywords.join(', ')
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sass`
    ]
}
