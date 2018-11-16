import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Header from '../Header'

const Layout = ({ children }) => (
    <StaticQuery
        query={ graphql`
            query SiteMetaDataQuery {
                site {
                    siteMetadata {
                        title
                        description
                        author
                    }
                }
            }
        `}
        render={ data => (
            <>
                <Helmet
                    title={ data.site.siteMetadata.title }
                    meta={[
                        { name: 'description', content: data.site.siteMetadata.description },
                        { name: 'author', content: data.site.siteMetadata.author },
                        { name: 'keywords', content: 'sample, something' }
                    ]}
                >
                    <html lang="en"/>
                </Helmet>
                <Header/>
                <>
                    { children }
                </>
            </>
        ) }
    />

    
)

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout