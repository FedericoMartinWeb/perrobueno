import React from 'react'

// Components
import { Nav, Footer, Hero } from '../';

const Layout = ({ children }) => {
    return (
        <>
            <Nav />
            <Hero />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}

export default Layout;