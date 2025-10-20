import React from 'react'

// Splide
import { Splide, SplideSlide } from '@splidejs/react-splide';

// Icons
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Styles
import '@splidejs/splide/dist/css/splide.min.css';
import styles from '../styles/Services.module.scss'

// Components
import { HalfCircle } from '../components/'

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
        gap: '2rem',
        breakpoints: {
            768: {
            },
            1024: {
                perPage: 3
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
        <section id='servicios' className={`container ${styles.services} ${styles.hasBlueBg}`}>
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
                                {/* <img src={images[slide.image].src} alt={slide.alt} /> */}
                                <video
                                    className={styles.video}
                                    src={`/videos/${slide.image}.mp4`}
                                    poster={images[slide.poster].src}
                                    controls
                                />
                            </SplideSlide>
                        ))}
                    </Splide>
                </div>
            </div>
            <HalfCircle color='#4344C3' down />
        </section>
    )
}

export default Services;