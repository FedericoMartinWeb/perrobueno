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
