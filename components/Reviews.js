import React from 'react'

// Components
import ReviewCard from './ReviewCard';

// Splide
import { Splide, SplideSlide } from '@splidejs/react-splide';

// Styles
import '@splidejs/splide/dist/css/splide.min.css';
import styles from '../styles/Reviews.module.scss';

// Images
import images from '../constants/images';

const Reviews = ({ reviews }) => {
    console.log(reviews);

    const splideOptionsReviews = {
        type: 'loop',
        autoplay: true,
        interval: 2000,
        pauseOnHover: true,
        arrows: false,
        pagination: true,
        mediaQuery: 'min',
        perPage: 1,
        arrows: 2,
        perMove: 1,
        height: '45rem',
        gap: '13px',
        breakpoints: {
            768: {
                perPage: 2
            },
            1024: {
                height: '40rem',
                padding: { right: '20%', left: '8px' },
                gap: '17px',
                perPage: 2
            },
            1440: {
                height: '42rem',
                padding: { right: '10%', left: '8px' },
                gap: '20px',
                perPage: 3
            },
            1920: {
                padding: { right: '8%', left: '8px' },
                gap: '23px',
                perPage: 4
            }
        }
    };

    return (
        <section className={`container ${styles.reviews}`}>
            <div className={`row ${styles.wrapper}`}>

                <article className={styles.content}>
                    <figure className={styles.google__img}>
                        <img src={images.google.src} alt="google" />
                    </figure>

                    <h2>PerroBueno</h2>

                    <div className={styles.stars}>
                        <span className={styles.score}>4.9</span>

                        <figure className={styles.star}>
                            <img src={images.star.src} alt="star" />
                            <img src={images.star.src} alt="star" />
                            <img src={images.star.src} alt="star" />
                            <img src={images.star.src} alt="star" />
                            <img src={images.star.src} alt="star" />
                        </figure>
                    </div>
                </article>

                <div className={styles.cards}>
                    <Splide className={styles.splide} onArrowsMounted={(splide, prev, next) => { prev.style.display = 'none', next.style.display = 'none' }} options={splideOptionsReviews}>

                        {reviews.map(slide => (
                            <SplideSlide key={slide.id}>
                                <ReviewCard card={slide} />
                            </SplideSlide>
                        ))}
                    </Splide>
                </div>

            </div>
        </section >
    )
}

export default Reviews