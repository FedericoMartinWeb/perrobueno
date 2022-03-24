import React from 'react'
import Head from 'next/head'

// Data
import { homepage } from '../data/homepage'

// Components
import { Layout, Services, HomeVets, ShowCase, Holiday, Reviews, Teaming, Contact } from '../components'

export async function getStaticProps() {
    return {
        props: {
            homepage: homepage.data.attributes,
        }
    }
}

export default function Home({ homepage }) {

    return (
        <>
            <Head>
                <title>PerroBueno | Guarderia de dia</title>
            </Head>
            <Layout hero={homepage.hero}>
                <Services services={homepage.services} />
                <HomeVets homevets={homepage.homevets} />
                {homepage.showcase.map(item => (
                    <ShowCase key={item.id} showcase={item} />
                ))}
                <Holiday holiday={homepage.holiday} />
                <Reviews reviews={homepage.reviews} />
                <Teaming teaming={homepage.teaming} />
                <Contact />
            </Layout>
        </>
    )
}
