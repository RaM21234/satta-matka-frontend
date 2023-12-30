import React from 'react'
import Navbar from './components/Navbar'

const Layout = ({ Component }) => {
    return (
        <>
            <Navbar />
            <Component />
        </>
    )
}

export default Layout
