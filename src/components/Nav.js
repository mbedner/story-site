import React from 'react'
import {
    BrowserRouter as 
    Link
  } from "react-router-dom";


function Nav() {
    
    return (
        <>
            <header className="flex w-20 bg-gray-800 h-full absolute justify-center left-0 top-0">
                {/* hamburger */}
                <div id="hamburger" className="flex flex-col p-4 pt-14 items-center absolute z-40">
                    <Link to="#">
                        <span id="menuTop" className="transition w-8 h-px bg-white block my-1 transform"></span>
                        <span id="menuMiddle" className="transition w-8 h-px bg-white block my-1"></span>
                        <span id="menuBottom" className="transition w-8 h-px bg-white block my-1 transform"></span>
                    </Link>
                </div>
                {/* statement */}
                <span className="transform rotate-90 left-1/2 top-2/4 absolute -translate-y-1/2 -translate-x-1/2 flex items-center"><span className="mr-2 w-10 h-px bg-gray-400 inline-block"></span><p className="text-gray-400 uppercase tracking-widest">Stories</p><span className="ml-2 w-10 h-px bg-gray-400 inline-block"></span></span>
            </header>
            <nav className="transition hidden absolute z-20 bg-gradient-to-br from-red-500 to-red-900 h-full w-full top-0 left-0">
                {/* menu */}
                <div className="flex container m-auto pt-40">
                    <ul className="w-1/3 text-white">
                        <p className="uppercase text-red-300 tracking-widest text-sm mb-4 font-bold">Categories</p>
                        <li className="my-2 text-xl ml-6">
                            <Link to="#">Cateogry 1</Link>
                        </li>
                        <li className="my-2 text-xl ml-6">Cateogry 2</li>
                        <li className="my-2 text-xl ml-6">Cateogry 3</li>
                    </ul>
                    <ul className="w-2/3 text-white">
                        <p className="uppercase text-red-300 tracking-widest text-sm mb-4 font-bold">Stories</p>
                        <li className="my-2 text-xl ml-6">Story 1</li>
                        <li className="my-2 text-xl ml-6">Story 2</li>
                        <li className="my-2 text-xl ml-6">Story 3</li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Nav
