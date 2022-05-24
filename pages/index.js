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
                <meta name="keywords" content="Guarderia de día, Adiestramiento profesional, Estancias diarias diurnas, Educación, Peluqueria" />
                <meta name="description" content="PerroBueno fue creado por amantes de los animales, para darles un servicio personalizado. En nuestras instalaciones no verás a tu perro encerrado, es un lugar especial para que disfruten mientras tu realizas tus obligaciones, trabajo, recados o te vas a las vacaciones deseadas y no puedes llevarle contigo." />
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
                <Contact contact={homepage.contact}/>
            </Layout>
        </>
    )
}
