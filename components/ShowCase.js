import React, { useState } from 'react'

// Splide
import { Splide, SplideSlide } from '@splidejs/react-splide';

// Styles
import '@splidejs/splide/dist/css/splide.min.css';
import styles from '../styles/ShowCase.module.scss'

// Images
import images from '../constants/images'

// Icons
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ShowCase = ({ showcase }) => {
    
    // Hooks
    const [isMore, setIsMore] = useState(false);
    const handleRead = () => setIsMore(!isMore);

    const secClassName = showcase.id % 2 === 0 ? `${styles.showcase} ${styles.reverse}` : `${styles.showcase}`
    const readClass = isMore ? `${styles.show}` : `${styles.hide}`;

    // Splide

    const splideOptions = {
        type: 'loop',
        autoplay: true,
        interval: 3000,
        pauseOnHover: true,
        arrows: false,
        pagination: false,
        mediaQuery: 'min',
        perPage: 1,
        arrows: 2,
        perMove: 1,
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

    const renderImage = (arr) => {
        if(arr.length === 1){
            return  <figure className={showcase.id === 3 ? `${styles.top}` : ''}>
                        <img src={images[showcase.image[0]].src} alt={showcase.altImage[0]} />
                    </figure>
        } else {
            return  <Splide className={styles.splide} options={splideOptions} renderControls={splideControls}>
                        {showcase.image.map((slide, i) => (
                            <SplideSlide key={slide[i]}>
                                <img src={images[slide].src} alt={slide} />
                            </SplideSlide>
                        ))}
                    </Splide>
        }
    }

    return (
        <section id={showcase.secId} className={`container ${secClassName}`}>
            <div className={`row ${styles.wrapper}`}>

                <div className={`${readClass} ${styles.content}`}>
                    <h2>{showcase.title}</h2>
                    <div dangerouslySetInnerHTML={{ __html: showcase.description}}></div>
                    <div className={styles.description__hide} dangerouslySetInnerHTML={{ __html: showcase.descriptionHide}}></div>
                    {showcase.descriptionHide && <a className={styles.readmore} onClick={handleRead}>{!isMore ? 'Ver Más' : 'Ver Menos'}</a>}
                </div>

                {renderImage(showcase.image)}
            </div>
        </section>
    )
}

export default ShowCase;