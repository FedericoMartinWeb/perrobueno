import React from 'react'
import Link from 'next/link'

// Styles
import styles from '../styles/Teaming.module.scss'

// Images
import images from '../constants/images'

const Teaming = ({ teaming }) => {

    return (
        <section className={`container ${styles.teaming}`}>
            <div className={`row ${styles.wrapper}`}>

                <figure className={styles.logo}>
                    <a target='_blank' href='https://www.teaming.net/esterilizacionaperrosppprescatados'>
                        <img src={images[teaming.logoName].src} alt='teaming' />
                    </a>
                </figure>

                <h2><a target='_blank' href='https://www.teaming.net/esterilizacionaperrosppprescatados'>{teaming.title}</a></h2>

                <p>{teaming.description}</p>

            </div>
        </section>
    )
}

export default Teaming