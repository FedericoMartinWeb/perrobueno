import React from 'react'

// Styles
import styles from '../styles/ReviewCard.module.scss'

// Images
import images from '../constants/images'

const ReviewCard = ({ card }) => {
    return (
        <article className={styles.card}>
            <p>{card.review}</p>

            <div className={styles.content}>
                <span className={`half_circle ${styles.card__circle}`}></span>

                <figure className={styles.reviewimg}>
                    <img src={images[card.image].src} alt={card.imageName} />
                </figure>

                <div className={styles.name}>
                    <h4>{card.name}</h4>
                    <figure className={styles.star}>
                        <img src={images.star.src} alt="star" />
                        <img src={images.star.src} alt="star" />
                        <img src={images.star.src} alt="star" />
                        <img src={images.star.src} alt="star" />
                        <img src={images.star.src} alt="star" />
                    </figure>
                </div>
            </div>
        </article>
    )
}

export default ReviewCard