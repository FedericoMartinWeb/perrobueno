import React from 'react'

// Data
import { homepage } from '../data/homepage'

// Components
import { Layout, Services } from '../components'

export async function getStaticProps() {
    return {
        props: {
            homepage: homepage.data.attributes,
        }
    }
}

export default function Home({ homepage }) {
    console.log(homepage);

    return (
        <Layout>
            <Services services={homepage.services} />
        </Layout>
    )
}
