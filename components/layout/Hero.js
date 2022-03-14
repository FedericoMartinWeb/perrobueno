import React from 'react'

// Components
import { HalfCircle } from '../'

// Styles
import styles from '../../styles/Hero.module.scss'

// Icons
import { FaChevronDown } from "react-icons/fa";

// Images
import images from '../../constants/images'

const Hero = () => {
    return (
        <header className={styles.hero}>
            <figure className={styles.hero__img}>
                <img src={images.perrobuenofoto.src} alt="hero" />
            </figure>

            <div className={styles.content}>
                <h1>Bienvenido a PERROBUENO Madrid</h1>
                <h3>¡Tu perro al cole!</h3>
                <button className={styles.hero__chevron}>
                    <FaChevronDown />
                </button>
            </div>

            <HalfCircle color='rgba(255,252,244,1)' />
        </header>
    )
}

export default Hero;