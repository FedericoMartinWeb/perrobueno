import React from 'react'

// Styles
import '@splidejs/splide/dist/css/splide.min.css';
import styles from '../styles/Services.module.scss'

// Images 
import images from '../constants/images'

const ServicesVideo = ({ services }) => {

    return (
        <section id='servicios' className={`container ${styles.services}`}>
            <div className={`row ${styles.wrapper}`}>

                <article className={styles.content}>
                    <h2>{services.title}</h2>
                    <p>{services.descriptionFirst}</p>
                    <p>{services.descriptionSecond}</p>
                </article>

                <video
                    className={styles.video}
                    src="/videos/video-promocional.mp4"
                    poster={images[services.image].src}
                    autoPlay
                    controls
                    loop
                    muted
                    playsInline
                />
            </div>
        </section>
    )
}

export default ServicesVideo;