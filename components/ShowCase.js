import React, { useState } from 'react'

// Styles
import styles from '../styles/ShowCase.module.scss'

// Images
import images from '../constants/images'

const ShowCase = ({ showcase }) => {
    // Hooks
    const [isMore, setIsMore] = useState(false);

    const secClassName = showcase.id % 2 === 0 ? `${styles.showcase} ${styles.reverse}` : `${styles.showcase}`

    const handleRead = () => setIsMore(!isMore);
    const readClass = isMore ? `${styles.show}` : `${styles.hide}`;

    return (
        <section id={showcase.secId} className={`container ${secClassName}`}>
            <div className={`row ${styles.wrapper}`}>

                <div className={`${readClass} ${styles.content}`}>
                    <h2>{showcase.title}</h2>
                    <div dangerouslySetInnerHTML={{ __html: showcase.description}}></div>
                    <div className={styles.description__hide} dangerouslySetInnerHTML={{ __html: showcase.descriptionHide}}></div>
                    {showcase.descriptionHide && <a className={styles.readmore} onClick={handleRead}>{!isMore ? 'Ver Más' : 'Ver Menos'}</a>}
                </div>

                <figure>
                    <img src={images[showcase.image].src} alt={showcase.altImage} />
                </figure>

            </div>
        </section>
    )
}

export default ShowCase;