import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
            <div class="flex items-center cursor-pointer flex-shrink-0 text-white mr-6">
                <Link to="/" class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                        width="48" height="48"
                        viewBox="0 0 48 48"
                        style={{ fill: '#000000' }}><path fill="#E8EAF6" d="M42 39L6 39 6 23 24 6 42 23z"></path><path fill="#C5CAE9" d="M39 21L34 16 34 9 39 9zM6 39H42V44H6z"></path><path fill="#B71C1C" d="M24 4.3L4 22.9 6 25.1 24 8.4 42 25.1 44 22.9z"></path><path fill="#D84315" d="M18 28H30V44H18z"></path><path fill="#01579B" d="M21 17H27V23H21z"></path><path fill="#FF8A65" d="M27.5,35.5c-0.3,0-0.5,0.2-0.5,0.5v2c0,0.3,0.2,0.5,0.5,0.5S28,38.3,28,38v-2C28,35.7,27.8,35.5,27.5,35.5z"></path></svg><span class="font-semibold text-xl tracking-tight">Home</span>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar
