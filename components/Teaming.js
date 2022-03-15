import React from 'react'

// Styles
import styles from '../styles/Teaming.module.scss'

// Images
import images from '../constants/images'

const Teaming = ({ teaming }) => {
    console.log(teaming);
    return (
        <section className={`container ${styles.teaming}`}>
            <div className={`row ${styles.wrapper}`}>

                <figure className={styles.logo}>
                    <img src={images[teaming.logoName].src} alt="teaming" />
                </figure>

                <h2>{teaming.title}</h2>

                <p>{teaming.description}</p>

            </div>
        </section>
    )
}

export default Teaming