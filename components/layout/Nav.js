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
    const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;
    const menuClass = `${isActive ? `${styles.menu} ${styles.active}` : styles.menu}`;
    const reactScrollVars = {
        'activeClass': `${styles.active}`,
        'spy': true,
        'smooth': true,
        'duration': 100
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

                <Link href={`${SITE_URL}#`}>
                    <a className={styles.logo}><img src={images.pb_logo.src} alt="logo" /></a>
                </Link>

                <div className={menuClass}>
                    <button onClick={handleMenu} className={styles.close}>
                        <AiOutlineClose />
                    </button>

                    <ul>
                        <li>
                            {router.pathname === '/'
                                ? <LinksScroll {...reactScrollVars} to='servicios' onClick={handleMenu} >Servicios</LinksScroll>
                                : <Link scroll={false} href={`${SITE_URL}#servicios`} >Servicios</Link>}
                        </li>
                        <li>
                            {router.pathname === '/'
                                ? <LinksScroll {...reactScrollVars} to='guarderia' onClick={handleMenu} >Guardería</LinksScroll>
                                : <Link scroll={false} href={`${SITE_URL}#guarderia`} >Guardería</Link>}
                        </li>
                        <li>
                            {router.pathname === '/'
                                ? <LinksScroll {...reactScrollVars} to='educacion' onClick={handleMenu} >Educación</LinksScroll>
                                : <Link scroll={false} href={`${SITE_URL}#educacion`} >Educación</Link>}
                        </li>
                        <li>
                            {router.pathname === '/'
                                ? <LinksScroll {...reactScrollVars} to='peluqueria' onClick={handleMenu} >Peluquería</LinksScroll>
                                : <Link scroll={false} href={`${SITE_URL}#peluqueria`} >Peluquería</Link>}
                        </li>
                        <li><Link href='tarifas'><a>Tarifas</a></Link></li>
                        <li>
                            {router.pathname === '/'
                                ? <LinksScroll {...reactScrollVars} to='contacto' onClick={handleMenu} >Contacto</LinksScroll>
                                : <Link scroll={false} href={`${SITE_URL}#contacto`} >Contacto</Link>}
                        </li>
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