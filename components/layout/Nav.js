import React, { useState } from 'react'
import Link from 'next/link'

// Styles
import styles from '../../styles/Nav.module.scss'

// Icons
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

// Images
import images from '../../constants/images'

const Nav = () => {

    const [isActive, setIsActive] = useState(false);
    const handleMenu = () => setIsActive(!isActive);
    const menuClass = `${isActive ? `${styles.menu} ${styles.active}` : styles.menu}`;

    return (

        <nav className={`container ${styles.main_nav}`} >
            <div className={`row ${styles.main_nav__wrapper}`}>

                <a href='#' className={styles.logo}>
                    <img src={images.pb_logo.src} alt="logo" />
                </a>

                <div className={menuClass}>
                    <button onClick={handleMenu} className={styles.close}>
                        <AiOutlineClose />
                    </button>

                    <ul>
                        <li><a href='#'>Servicios</a></li>
                        <li><a href='#'>Guarderia</a></li>
                        <li><a href='#'>Educacion</a></li>
                        <li><a href='#'>Peluqueria</a></li>
                        {/* <li><Link href='notnow'><a>Tarifas</a></Link></li> */}
                        <li><a href='#'>Contacto</a></li>
                    </ul>
                </div>

                <button onClick={handleMenu} className={styles.burguer}>
                    <AiOutlineMenu />
                </button>

            </div>
        </nav>

    )
}

export default Nav;