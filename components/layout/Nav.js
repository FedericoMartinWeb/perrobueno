import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Link as LinksScroll } from 'react-scroll'

// Styles
import styles from '../../styles/Nav.module.scss'

// Icons
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

// Images
import images from '../../constants/images'

const Nav = () => {

    // States 
    const [isActive, setIsActive] = useState(false);
    // const [headerClassName, setHeaderClassName] = useState("");
    const [header, setHeader] = useState("asd");

    // Variables
    const menuClass = `${isActive ? `${styles.menu} ${styles.active}` : styles.menu}`;
    const reactScrollVars = {
        'activeClass': `${styles.active}`,
        'spy': true,
        'smooth': true,
        'offset': - 50,
        'duration': 600,
        'smooth': 'easeOutQuart'
    }

    // Handle Functions
    const handleMenu = () => setIsActive(!isActive);

    const handleScroll = header => {
        if (header !== 'scrolled' && window.pageYOffset > 0) {
            setHeader('scrolled');
        } else if (header === 'scrolled' && window.pageYOffset <= 0) {
            setHeader('');
        }
    }

    useEffect(() => {
        window.onscroll = () => handleScroll(header);
    }, [header]);

    return (

        <nav className={`container ${styles.main_nav} ${header}`} >
            <div className={`row ${styles.main_nav__wrapper}`}>

                <a href='#' className={styles.logo}>
                    <img src={images.pb_logo.src} alt="logo" />
                </a>

                <div className={menuClass}>
                    <button onClick={handleMenu} className={styles.close}>
                        <AiOutlineClose />
                    </button>

                    <ul>
                        <li>
                            <LinksScroll {...reactScrollVars} to='services' onClick={handleMenu} >Servicios</LinksScroll>
                        </li>
                        <li><a href='#'>Guarderia</a></li>
                        <li><a href='#'>Educacion</a></li>
                        <li><a href='#'>Peluqueria</a></li>
                        <li><Link href='notnow'><a>Tarifas</a></Link></li>
                        <li>
                            <LinksScroll {...reactScrollVars} to='contact' onClick={handleMenu} >Contacto</LinksScroll>
                        </li>
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