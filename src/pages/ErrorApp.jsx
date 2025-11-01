import React from 'react'
import error from '../assets/App-Error.png'
import NavBar from '../components/navbar'
import { Outlet } from 'react-router'
import Footer from '../components/footer'
const ErrorApp = () => {
  return (
    <div>
      <div className='flex mx-auto justify-between items-center'>
        <div className='flex mx-auto h-[70vh] items-center'>
          <img src={error} alt="" />
          {/* <Outlet /> */}
        </div>
      </div>
    </div>
  )
}

export default ErrorApp
