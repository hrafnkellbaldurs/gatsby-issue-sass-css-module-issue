const {
    name,
    repository: { url: repoUrl },
    description,
    author,
    keywords
} = require('./package.json')
const repoName = (urlParts => urlParts[urlParts.length - 1])(repoUrl.split('/'))

module.exports = {
    pathPrefix: `/${repoName}`,
    siteMetadata: {
        title: name,
        description,
        author,
        keywords: keywords.join(', ')
    },
    plugins: [
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: name,
                short_name: name,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                // Relative to the root of the site.
                icon: `src/assets/images/favicon.png`
            },
        },
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sass`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `data`,
                path: `${ __dirname }/src/data`
            }
        },
        {
            resolve: `gatsby-transformer-json`,
            options: {}
        },
        {
            resolve: `gatsby-plugin-svgr`,
            options: {
                icon: true,
                svgProps: {
                    className: `svgr`
                }
                // see https://github.com/smooth-code/svgr for a list of all options
            }
        }
    ]
}
