import React, { useState } from 'react';

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="w-full h-16 flex flex-col md:flex-row justify-between items-center px-6 md:px-10" style={{ backgroundColor: '#222831' }}>
            
            {/* Logo */}
            <div className="flex justify-between items-center w-full md:w-auto">
                <h1 className="text-neutral-50 text-2xl">Portfolio</h1>

                {/* Hamburger Icon */}
                <div className="md:hidden flex items-center" onClick={toggleMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-neutral-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex justify-center items-center gap-5">
                <h1 className="text-neutral-50 text-base md:text-xl cursor-pointer">Home</h1>
                <h1 className="text-neutral-50 text-base md:text-xl cursor-pointer">About Me</h1>
                <h1 className="text-neutral-50 text-base md:text-xl cursor-pointer">Skills</h1>
                <h1 className="text-neutral-50 text-base md:text-xl cursor-pointer">Contact</h1>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="flex flex-col items-center mt-4 gap-3 md:hidden">
                    <h1 className="text-neutral-50 text-lg cursor-pointer">Home</h1>
                    <h1 className="text-neutral-50 text-lg cursor-pointer">About Me</h1>
                    <h1 className="text-neutral-50 text-lg cursor-pointer">Skills</h1>
                    <h1 className="text-neutral-50 text-lg cursor-pointer">Contact</h1>
                </div>
            )}
        </div>
    );
}
