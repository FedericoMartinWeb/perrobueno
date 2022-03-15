import React from 'react'

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
        <Layout>
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
    )
}
