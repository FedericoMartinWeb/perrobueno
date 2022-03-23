import React from 'react'

// Components
import { HalfCircle } from '../'
import { Link as LinksScroll } from 'react-scroll'

// Styles
import styles from '../../styles/Hero.module.scss'

// Icons
import { FaChevronDown } from "react-icons/fa";

// Images
import images from '../../constants/images'

const Hero = ({ hero }) => {

    return (
        <header id='hero' className={styles.hero}>
            <figure className={styles.hero__img}>
                <img src={images[hero.image].src} alt="hero" />
            </figure>

            <div className={styles.content}>
                <h1>{hero.title}</h1>
                {hero.subtitle && <h3>{hero.subtitle}</h3>}
                <button className={styles.hero__chevron}>
                    <FaChevronDown />
                </button>
            </div>

            <LinksScroll smooth={true} duration={500} to='servicios' className={styles.hero__chevron__desktop}>
                <FaChevronDown />
            </LinksScroll>

            <HalfCircle color='#fafafa' />
        </header >
    )
}

export default Hero;