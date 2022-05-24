import React from 'react'

// Styles
import styles from '../styles/HomeVets.module.scss'

// Components
import { HalfCircle } from '../components'

// Images
import images from '../constants/images'

const HomeVets = ({ homevets }) => {

    return (
        <section className={`container ${styles.homevets}`}>
            <HalfCircle color='#fafafa' top down />

            <div className={`row ${styles.wrapper}`}>
                <figure>
                    <a target="_blank" rel="noreferrer" href="http://www.bigvete.es/"><img src={images[homevets.logoname].src} alt="bigvete.es" /></a>
                </figure>

                <p>{homevets.description}</p>

                <div className={styles.video}>
                    <iframe src={homevets.videoUrl} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                </div>
            </div>

            <HalfCircle color='#4344C3' down />
        </section>
    )
}

export default HomeVets;