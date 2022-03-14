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
        arrows: false,
        pagination: true,
        mediaQuery: 'min',
        perPage: 1,
        arrows: 2,
        perMove: 1,
        fixedHeight: '33.1rem',
        breakpoints: {
            1024: {
                perPage: 2
            }
        }
    };

    return (
        <section className={`container ${styles.reviews}`}>
            <div className={`row ${styles.wrapper}`}>

                <article className={styles.content}>
                    <figure>
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