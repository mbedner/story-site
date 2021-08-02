import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="flex items-center justify-between w-full">
            <Link to="/">
                <h1 className="text-4xl text-white">Jacob</h1>
            </Link>
            <Link to="/about">
                <div className="relative w-20 h-20">
                    <span className="absolute top-0 left-0 w-full h-full rounded-full cursor-pointer border border-solid border-gray-600 transition hover:border-white tracking-widest text-white uppercase flex items-center justify-center">About</span>
                </div>  
            </Link>
        </header>
    )
}

export default Header
