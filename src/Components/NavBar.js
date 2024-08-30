import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaHome, FaShoppingCart } from 'react-icons/fa';

const NavBar = () => {
    return (
        <header className='bg-white shadow-md'>
            <nav className='container mx-auto flex items-center justify-between p-4'>
                <NavLink to="/" className='flex items-center'>
                    <img
                        className='w-32 h-auto'
                        src="https://codehelp-shopping-cart.netlify.app/logo.png"
                        alt="Logo"
                    />
                </NavLink>
                <div className='flex space-x-6'>
                    <NavLink
                        to="/"
                        className='text-gray-800 text-lg font-semibold flex items-center hover:text-blue-500 transition-colors'
                        activeClassName='text-blue-500'
                    >
                        <FaHome className='mr-2' />
                        Home
                    </NavLink>
                    <NavLink
                        to="/cart"
                        className='text-gray-800 text-lg font-semibold flex items-center hover:text-blue-500 transition-colors'
                        activeClassName='text-blue-500'
                    >
                        <FaShoppingCart className='mr-2' />
                        Cart
                    </NavLink>
                </div>
            </nav>
        </header>
    )
}

export default NavBar





