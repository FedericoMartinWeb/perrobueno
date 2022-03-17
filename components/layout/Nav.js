import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Link as LinksScroll, scroller } from 'react-scroll'

// Styles
import styles from '../../styles/Nav.module.scss'

// Icons
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

// Images
import images from '../../constants/images'

const Nav = () => {

    // Hooks 
    const [isActive, setIsActive] = useState(false);
    const [header, setHeader] = useState(false);
    const router = useRouter();

    // Variables
    const menuClass = `${isActive ? `${styles.menu} ${styles.active}` : styles.menu}`;
    const reactScrollVars = {
        'activeClass': `${styles.active}`,
        'spy': true,
        'smooth': true,
        'duration': 0,
        'smooth': 'linear'
    }

    // Handle Functions
    const handleMenu = () => setIsActive(!isActive);

    const handleScroll = header => {
        if (!header && window.pageYOffset > 0) {
            setHeader(true);
        } else if (header && window.pageYOffset <= 0) {
            setHeader(false);
        }
    }

    useEffect(() => {
        window.onscroll = () => handleScroll(header);
    }, [header]);

    return (

        <nav className={`container ${styles.main_nav} ${header ? styles.scrolled : ''}`} >
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
                            {router.pathname === '/'
                                ? <LinksScroll {...reactScrollVars} to='services' onClick={handleMenu} >Servicios</LinksScroll>
                                : <Link scroll={false} href="http://localhost:3000#services">Services</Link>}
                        </li>
                        <li><a href='#'>Guarderia</a></li>
                        <li><a href='#'>Educacion</a></li>
                        <li><a href='#'>Peluqueria</a></li>
                        <li><Link href='tarifas'><a>Tarifas</a></Link></li>
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