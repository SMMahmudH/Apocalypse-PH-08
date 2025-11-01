import React from 'react'
import gitImg from "../assets/gitImg.png"
import logo from "../assets/logo.png"
import { Link, NavLink } from 'react-router'
const NavBar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm px-[4%]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><NavLink to='/'>Home</NavLink></li>
                            <li><NavLink to='/all-apps'>Apps</NavLink></li>
                            <li><NavLink to='/installed-apps'>Installation</NavLink></li>
                        </ul>
                    </div>
                    <Link className="btn btn-ghost text-xl text-violet-600 font-extrabold" to='/'>
                    <img src={logo} alt="" className='h-[90%] pr-[5%]'/>    HERO.IO</Link>
                </div>
                <div className="navbar-center hidden lg:flex font-semibold">
                    <ul className="menu menu-horizontal px-1">
                            <li className=''><NavLink to='/'>Home</NavLink></li>
                            <li><NavLink to='/all-apps'>Apps</NavLink></li>
                            <li><NavLink to='/installed-apps'>Installation</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a href='https://github.com/smmahmudh' className="btn bg-violet-500 text-white"><img src={gitImg} alt="" className='h-[60%] pr-1'/><span className='hidden md:flex'>Contribute</span> </a>
                </div>
            </div>
        </div>
    )
}

export default NavBar
