import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'


const IndexPage = ({ data }) => (
    <Layout>
        <h1>IndexPage</h1>
    </Layout>
)

export const query = graphql`
    query IndexPage {
        allAboutMeJson {
            edges {
                node {
                    id,
                    dataId,
                    title,
                    description,
                    urls {
                        profilePic,
                        portfolioPdf
                    },
                    contactDetails {
                        label,
                        name,
                        address,
                        zip,
                        city,
                        country,
                        phone,
                        email
                    },
                    downloadResumeLabel
                }
            }
        },
        allExperienceJson {
            edges {
                node {
                    id,
                    dataId,
                    type,
                    iconSrc,
                    title,
                    subtitle,
                    startDate,
                    endDate,
                    description
                }
            }
        }
    }
`

export default IndexPage