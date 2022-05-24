import React from 'react'
import Head from 'next/dist/shared/lib/head'

// Data
import { tarifas } from '../../data/tarifas'

// Styles
import styles from '../../styles/Tarifas.module.scss'

// Components
import { Layout, TarifasCard } from '../../components'

export async function getStaticProps() {
    return {
        props: {
            tarifas: tarifas.data.attributes,
        }
    }
}

export default function Tarifas({ tarifas }) {

    return (
        <>
            <Head>
                <title>Tarifas | PerroBueno</title>
                <meta name="keywords" content="Guarderia de día, Adiestramiento profesional, Estancias diarias diurnas, Educación, Peluqueria" />
                <meta name="description" content="PerroBueno fue creado por amantes de los animales, para darles un servicio personalizado. En nuestras instalaciones no verás a tu perro encerrado, es un lugar especial para que disfruten mientras tu realizas tus obligaciones, trabajo, recados o te vas a las vacaciones deseadas y no puedes llevarle contigo." />
            </Head>
            <Layout hero={tarifas.hero}>
                <section id='tarifas' className={`container ${styles.tarifas}`}>
                    <div className={`row ${styles.wrapper}`}>
                        {tarifas.tarifaItem.map(item => (
                            <TarifasCard key={item.id} tarifa={item} />
                        ))}
                    </div>
                </section>
            </Layout>
        </>
    )
}
