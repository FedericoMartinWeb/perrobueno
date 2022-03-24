import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';

// Styles
import styles from '../styles/Contact.module.scss'

// Components
import { HalfCircle } from '../components/'

const Contact = () => {
    const form = useRef();

    const submitValue = (message) => {
        form.current.querySelector('input[type=submit]').setAttribute('value', message);
    }

    const sendEmail = (e) => {
        e.preventDefault();

        submitValue('Enviando...');

        emailjs.sendForm('service_u9iwm4x', 'contact_form', form.current, 'BK0PxM2uaXfclG6_C')
            .then((result) => {

                submitValue('Mensaje Enviado!');

                setTimeout(() => {
                    submitValue('Enviar');
                }, 2000)

            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <section id='contacto' className={`container ${styles.contact}`}>

            <HalfCircle className={styles.half} color='#4344C3' top up />

            <div className={`row ${styles.wrapper}`}>
                <h2>Contacto</h2>

                <div className={styles.content}>
                    <form className={styles.form} ref={form} onSubmit={sendEmail}>
                        <input type="text" name="user_name" placeholder='Nombre' required />
                        <input type="email" name="user_email" placeholder='Email' required />
                        <textarea name="message" placeholder='Mensaje' required />
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