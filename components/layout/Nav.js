import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Link as LinksScroll } from 'react-scroll'

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
    const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;
    const menuClass = `${isActive ? `${styles.menu} ${styles.active}` : styles.menu}`;
    const reactScrollVars = {
        'activeClass': `${styles.active}`,
        'spy': true,
        'smooth': true,
        'duration': 500
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

    // Functions
    const renderMenuNav = (sectionID, name) => {
        if (router.pathname === '/') {
            return <LinksScroll {...reactScrollVars} to={sectionID} onClick={handleMenu} >{name}</LinksScroll>
        } else {
            return <Link scroll={false} href={`${SITE_URL}#${sectionID}`} >{name}</Link>
        }
    }

    useEffect(() => {
        window.onscroll = () => handleScroll(header);
    }, [header]);

    return (

        <nav className={`container ${styles.main_nav} ${header ? styles.scrolled : ''}`} >
            <div className={`row ${styles.main_nav__wrapper}`}>

                <LinksScroll className={styles.logo} {...reactScrollVars} to='hero'>
                    <img src={images.pb_logo.src} alt="logo" />
                </LinksScroll>

                <div className={menuClass}>
                    <button onClick={handleMenu} className={styles.close}>
                        <AiOutlineClose />
                    </button>

                    <ul>
                        <li> {renderMenuNav('servicios', 'Servicios')} </li>
                        <li> {renderMenuNav('guarderia', 'Guardería')} </li>
                        <li> {renderMenuNav('educacion', 'Educación')} </li>
                        <li> {renderMenuNav('peluqueria', 'Peluquería')} </li>
                        <li> <Link href='/tarifas'><a>Tarifas</a></Link> </li>
                        <li> {renderMenuNav('contacto', 'Contacto')} </li>
                    </ul>
                </div>

                <button onClick={handleMenu} className={styles.burguer}>
                    <AiOutlineMenu />
                </button>

            </div>
        </nav >

    )
}

export default Nav;