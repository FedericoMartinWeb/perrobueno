import React from 'react'

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

            <div className={styles.hero__content}>
                <h1>Bienvenido a PERROBUENO Madrid</h1>
                <h3>¡Tu perro al cole!</h3>
                <button className={styles.hero__chevron}>
                    <FaChevronDown />
                </button>
            </div>


            <span className='half_circle'></span>
        </header>
    )
}

export default Hero;