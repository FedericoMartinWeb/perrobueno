import React from 'react'

// Components
import { Nav, Footer, Hero } from '../';

const Layout = ({ children, hero }) => {
    return (
        <>
            <Nav />
            <Hero hero={hero} />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}

export default Layout;