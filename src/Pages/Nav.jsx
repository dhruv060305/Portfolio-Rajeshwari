import React, { useEffect, useState } from 'react';
import AudioPlayer from '../Animations/AudioPlayer';

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

   



    return (
        <div className="w-full min-h-16 flex  flex-col md:flex-row justify-between items-center px-6 md:px-10" style={{ backgroundColor: '#F8F8E1' }}>

            {/* Logo */}
            <div className="flex justify-between items-center ml-0 w-full md:w-auto">
                <h1 className="text-black text-2xl mr-3"><p> {'{ '}Portfolio {'}'}</p> </h1>
                <div>

                    <AudioPlayer />
                </div>
                {/* Hamburger Icon */}
                <div className="md:hidden flex items-center" onClick={toggleMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </div>
            </div>


            {/* Desktop Menu */}
            <div className="hidden md:flex justify-center items-center gap-5">
                <h1 className="text-black hover:text-gray-600 text-base md:text-xl cursor-pointer" style={{ transition: 'color 0.2s ease-in-out' }} >Home</h1>
                <h1 className="text-black hover:text-gray-600 text-base md:text-xl cursor-pointer" style={{ transition: 'color 0.2s ease-in-out' }} >About Me</h1>
                <h1 className="text-black hover:text-gray-600 text-base md:text-xl cursor-pointer" style={{ transition: 'color 0.2s ease-in-out' }} >Skills</h1>
                <h1 className="text-black hover:text-gray-600 text-base md:text-xl cursor-pointer" style={{ transition: 'color 0.2s ease-in-out' }} >Contact</h1>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="flex flex-col items-center mt-4 gap-3 md:hidden">
                    <h1 className="text-black hover:text-gray-600 text-base md:text-xl cursor-pointer" style={{ transition: 'color 0.2s ease-in-out' }} >Home</h1>
                    <h1 className="text-black hover:text-gray-600 text-base md:text-xl cursor-pointer" style={{ transition: 'color 0.2s ease-in-out' }} >About Me</h1>
                    <h1 className="text-black hover:text-gray-600 text-base md:text-xl cursor-pointer" style={{ transition: 'color 0.2s ease-in-out' }} >Skills</h1>
                    <h1 className="text-black hover:text-gray-600 text-base md:text-xl cursor-pointer" style={{ transition: 'color 0.2s ease-in-out' }} >Contact</h1>

                </div>
            )}
        </div>
    );
}
