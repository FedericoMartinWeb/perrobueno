import React from 'react'

// Styles
import styles from '../styles/TarifaCard.module.scss'

const TarifasCard = ({ tarifa }) => {

    return (
        <article className={styles.card}>
            <aside className={styles.header}>
                <h2>{tarifa.title}</h2>
                <span className={`half_circle ${styles.card__circle}`}></span>
            </aside>

            <div className={styles.content}>
                {tarifa.availability.map(item => (
                    <div key={item.id} className={styles.card__main}>
                        <p>{item.days}</p>
                        <span className={item.price === "Consultar" ? `${styles.consultar}` : ''}><i>€</i>{item.price}</span>
                    </div>
                ))}
            </div>
        </article>
    )
}

export default TarifasCard