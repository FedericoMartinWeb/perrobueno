import React from 'react'

// Styles
import styles from '../styles/Contact.module.scss'

// Components
import { HalfCircle } from '../components/'

const Contact = () => {
    return (
        <section id='contact' className={`container ${styles.contact}`}>

            <HalfCircle className={styles.half} color='#4344C3' top up />

            <div className={`row ${styles.wrapper}`}>
                <h2>Contacto</h2>

                <div className={styles.content}>
                    <form className={styles.form} action="">
                        <input type="text" name="user_name" placeholder='Nombre' />
                        <input type="email" name="user_email" placeholder='Email' />
                        <textarea name="message" placeholder='Mensaje' />
                        <input type="submit" value="Enviar" />
                    </form>

                    <div className={styles.description}>
                        <p>Todos los servicios de esta pagina web los puedes consultar por teléfono y concretar cita al 627 74 19 47 o también whatsapp.</p>
                        <p>No dejes a tu perro solo en casa cuando sales a trabajar, nosotros nos encargamos de él y lo recogemos en tu casa!</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact