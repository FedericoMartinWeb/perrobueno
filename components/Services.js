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
    console.log(services);
    const splideOptions = {
        arrows: false,
        pagination: false,
        mediaQuery: 'min',
        perPage: 1,
        arrows: 2,
        perMove: 1,
        fixedHeight: '33.1rem',
        // arrowPath: 'M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z',
        breakpoints: {
            1024: {
                perPage: 2
            }
        }
    };

    const splideControls = () => (
        <div class="splide__arrows">
            <button className={`${styles.splide__arrow} splide__arrow--prev`} type="button" aria-controls="splide01-track" aria-label="Previous slide" disabled="">
                <FaChevronLeft />
            </button>
            <button class="splide__arrow splide__arrow--next" type="button" aria-controls="splide01-track" aria-label="Next slide">
                <FaChevronRight />
            </button>
        </div>
    );

    return (
        <section className={`container ${styles.services}`}>
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