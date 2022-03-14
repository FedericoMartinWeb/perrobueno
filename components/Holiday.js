import React from 'react'

// Components
import { HalfCircle } from '../components/'

// Styles
import styles from '../styles/Holiday.module.scss'

// Images 
import images from '../constants/images'

const Holiday = ({ holiday }) => {
    return (
        <section className={`container ${styles.holiday}`}>
            <HalfCircle color='#fafafa' top down />

            <div className={`row ${styles.wrapper}`}>
                <figure>
                    <img src={images[holiday.logoName].src} alt={holiday.logoName} />
                </figure>

                <h2>{holiday.title}</h2>

                <p>{holiday.description}</p>
            </div>

            <HalfCircle color='#fafafa' />
        </section>
    )
}

export default Holiday