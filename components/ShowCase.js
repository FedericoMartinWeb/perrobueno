import React from 'react'

// Styles
import styles from '../styles/ShowCase.module.scss'

// Images
import images from '../constants/images'

const ShowCase = ({ showcase }) => {
    console.log(showcase);
    return (
        <section id={showcase.secId} className={`container ${styles.showcase}`}>
            <div className={`row ${styles.wrapper}`}>

                <div className={styles.content}>
                    <h2>{showcase.title}</h2>
                    <p>{showcase.description}</p>
                </div>

                <figure>
                    <img src={images[showcase.image].src} alt={showcase.altImage} />
                </figure>

            </div>
        </section>
    )
}

export default ShowCase;