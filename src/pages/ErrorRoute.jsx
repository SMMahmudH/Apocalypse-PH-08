import React from 'react'
import error from '../assets/error-404.png'
import NavBar from '../components/navbar'
import { Outlet } from 'react-router'
import Footer from '../components/footer'
const ErrorRoute = () => {
  return (
    <div>
        <div className=''>
            <NavBar />
            <div className='min-w-screen mx-auto'>
              <img src={error} alt="" />
                {/* <Outlet /> */}
            </div>
            <Footer />
        </div>
    </div>
  )
}

export default ErrorRoute
