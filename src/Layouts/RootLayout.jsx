import React from 'react'
import NavBar from '../components/navbar'
import Footer from '../components/footer'
import { Outlet } from 'react-router'

const RootLayout = () => {
    return (
        <div className=''>
            <NavBar />
            <div className=''>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default RootLayout

