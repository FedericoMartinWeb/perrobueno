import React from 'react'

// Styles
import styles from '../../styles/Footer.module.scss'

// Icons
import { AiOutlineInstagram, AiOutlineTwitter, AiOutlineFacebook } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";

const Footer = () => {
    return (
        <footer className={`container ${styles.footer}`}>
            <div className={`row ${styles.wrapper}`}>
                <div className={styles.content}>
                    <p>Podés encontrarnos en:</p>
                    <div className={styles.tel}>
                        <BsFillTelephoneFill />
                        <a href='tel:627 74 19 47'>627 74 19 47</a>
                    </div>
                    <address>
                        <a href='https://www.instagram.com/perrobueno.es/' target='_blank'><AiOutlineInstagram /></a>
                        <a href='https://www.twitter.com/perrobueno_es/' target='_blank'><AiOutlineTwitter /></a>
                        <a href='https://www.facebook.com/perrobueno.es/' target='_blank'><AiOutlineFacebook /></a>
                    </address>
                    <p>Copyright © 2022 </p>
                    <p>All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer