import React from 'react'
import spaceship from '../spaceship.png'

function Home() {
    return (
        <section className="h-full -mt-10">
            <div className="flex items-center h-full">
                <div className="flex w-1/4 text-white items-center">
                    <div className="flex flex-col">
                        <h1 className="text-5xl mb-6">About This Site</h1>
                        <p className="text-gray-300 font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure.</p>
                    </div>
                </div>
                <div className="w-3/4 flex items-center justify-center">
                    <img src={spaceship} alt="rocket ship" className="w-2/4 z-30" />
                </div>
            </div>
            <div className="absolute top-2/4 left-3/4 transform -translate-y-1/2 -translate-x-1/2">
                <h1 style={{ 'WebkitTextStroke': '1px rgba(255,255,255,.25)' }} className="text-8xl text-transparent">Jacob</h1>
                <h1 style={{ 'WebkitTextStroke': '1px rgba(255,255,255,.25)' }} className="text-8xl text-transparent">Jacob</h1>
                <h1 style={{ 'WebkitTextStroke': '1px rgba(255,255,255,.25)' }} className="text-8xl text-transparent">Jacob</h1>
                <h1 style={{ 'WebkitTextStroke': '1px rgba(255,255,255,.25)' }} className="text-8xl text-transparent">Jacob</h1>
                <h1 style={{ 'WebkitTextStroke': '1px rgba(255,255,255,.25)' }} className="text-8xl text-transparent">Jacob</h1>
                <h1 style={{ 'WebkitTextStroke': '1px rgba(255,255,255,.25)' }} className="text-8xl text-transparent">Jacob</h1>
                <h1 style={{ 'WebkitTextStroke': '1px rgba(255,255,255,.25)' }} className="text-8xl text-transparent">Jacob</h1>
                <h1 style={{ 'WebkitTextStroke': '1px rgba(255,255,255,.25)' }} className="text-8xl text-transparent">Jacob</h1>
                <h1 style={{ 'WebkitTextStroke': '1px rgba(255,255,255,.25)' }} className="text-8xl text-transparent">Jacob</h1>
                <h1 style={{ 'WebkitTextStroke': '1px rgba(255,255,255,.25)' }} className="text-8xl text-transparent">Jacob</h1>
                <h1 style={{ 'WebkitTextStroke': '1px rgba(255,255,255,.25)' }} className="text-8xl text-transparent">Jacob</h1>
                <h1 style={{ 'WebkitTextStroke': '1px rgba(255,255,255,.25)' }} className="text-8xl text-transparent">Jacob</h1>
                <h1 style={{ 'WebkitTextStroke': '1px rgba(255,255,255,.25)' }} className="text-8xl text-transparent">Jacob</h1>
                <h1 style={{ 'WebkitTextStroke': '1px rgba(255,255,255,.25)' }} className="text-8xl text-transparent">Jacob</h1>
                <h1 style={{ 'WebkitTextStroke': '1px rgba(255,255,255,.25)' }} className="text-8xl text-transparent">Jacob</h1>
                <h1 style={{ 'WebkitTextStroke': '1px rgba(255,255,255,.25)' }} className="text-8xl text-transparent">Jacob</h1>
                <h1 style={{ 'WebkitTextStroke': '1px rgba(255,255,255,.25)' }} className="text-8xl text-transparent">Jacob</h1>
            </div>
        
        </section>
    )
}

export default Home
