"use client";
import Link from 'next/link'
import React, { useState } from 'react'
import NavLink from './NavLink'
import { NavLists } from './constants/NavLists'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import MenuOverlay from './MenuOverlay';


const NavBar = () => {

  const [navbarOpen, setNavBarOpen] = useState(false);


  return (
    <nav className='text-white fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100'>
        <div className='flex flex-wrap items-center justify-between mx-auto px-4 py-4'>
            <Link href={"/"} className='text-5xl font-semibold'>ken.y</Link>
            <div className='mobile-menu block md:hidden'>
                {
                    !navbarOpen ? (
                        <button className='flex items-center px-3 py-2 text-slate-400 border rounded border-slate-200 hover:text-white hover:border-white'>
                            <Bars3Icon 
                            className='h-6 w-6 text-white'
                            onClick={() => setNavBarOpen(true)} />
                        </button>
                    ) : (
                        <button className='flex items-center px-3 py-2 text-slate-400 border rounded border-slate-200 hover:text-white hover:border-white'>
                            <XMarkIcon
                            className='h-6 w-6 text-white'
                            onClick={() => setNavBarOpen(false)} />
                        </button>
                    )
                }
            </div>
            <div className='menu hidden md:block md:w-auto ' id='navbar'>
                <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                    {NavLists.map((link, index) => (
                    <li key={index}>
                        <NavLink 
                            title= {link.title}
                            path = {link.path}
                        />
                    </li>
                ))}
                </ul>
            </div>
        </div>
        {navbarOpen ? <MenuOverlay links={NavLists}/> : null}
    </nav>
  )
}

export default NavBar