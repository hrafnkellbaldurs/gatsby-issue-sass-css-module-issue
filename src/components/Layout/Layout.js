import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../Header'

const Layout = ({ children }) => (
    <>
        <Helmet
            title="HrafnkellBaldurs"
            meta={[
                { name: 'description', content: 'meta description' },
                { name: 'author', content: 'Hrafnkell Baldursson' },
                { name: 'keywords', content: 'meta keywords' },
            ]}
        >
            <html lang="en"/>
        </Helmet>
        <Header/>
        <>
            { children }
        </>
    </>
)

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout