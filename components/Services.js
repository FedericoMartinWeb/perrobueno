import React from 'react'

// Splide
import { Splide, SplideSlide } from '@splidejs/react-splide';

// Icons
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Styles
import '@splidejs/splide/dist/css/splide.min.css';
import styles from '../styles/Services.module.scss'

// Images
import images from '../constants/images'

const Services = ({ services }) => {

    const splideOptions = {
        arrows: false,
        pagination: false,
        mediaQuery: 'min',
        perPage: 1,
        arrows: 2,
        perMove: 1,
        fixedHeight: '33.1rem',
        breakpoints: {
            768: {
                fixedHeight: '49rem'
            },
            1024: {
                fixedHeight: '49rem',
                perPage: 2,
                perMove: 2
            }
        }
    };

    const splideControls = () => (
        <div className="splide__arrows">
            <button className={`${styles.splide__arrow} splide__arrow--prev`} type="button" aria-controls="splide01-track" aria-label="Previous slide" disabled="">
                <FaChevronLeft />
            </button>
            <button className={`${styles.splide__arrow} ${styles.splide__arrow__dnext} splide__arrow--next`} type="button" aria-controls="splide01-track" aria-label="Next slide">
                <FaChevronRight />
            </button>
        </div>
    );

    return (
        <section id='servicios' className={`container ${styles.services}`}>
            <div className={`row ${styles.wrapper}`}>

                <article className={styles.content}>
                    <h2>{services.title}</h2>
                    <p>{services.descriptionFirst}</p>
                    <p>{services.descriptionSecond}</p>
                </article>

                <div className={styles.slide}>
                    <Splide className={styles.splide} options={splideOptions} renderControls={splideControls}>

                        {services.slider.map(slide => (
                            <SplideSlide key={slide.id}>
                                <img src={images[slide.image].src} alt={slide.alt} />
                            </SplideSlide>
                        ))}
                    </Splide>
                </div>
            </div>
        </section>
    )
}

export default Services;