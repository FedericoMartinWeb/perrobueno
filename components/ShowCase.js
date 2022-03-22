import React from 'react'

// Styles
import styles from '../styles/ShowCase.module.scss'

// Images
import images from '../constants/images'

const ShowCase = ({ showcase }) => {
    const secClassName = showcase.id % 2 === 0 ? `${styles.showcase} ${styles.reverse}` : `${styles.showcase}`

    return (
        <section id={showcase.secId} className={`container ${secClassName}`}>
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