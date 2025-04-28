import React from 'react';
import "../App.css"
import Typewriter from 'typewriter-effect';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';


export default function Main() {


    return (

        <div className="h-screen w-full  flex justify-center items-start" style={{ backgroundColor: '#F8F8E1' }}>
            
            <div className='container gap-5 flex flex-col justify-center items-center mt-10'>

                <div className='flex h-auto w-auto text-2xl '>
                    <p className="mr-1 hidden sm:block">Hi! I’m</p>

                    <div className="min-w-[300px]">

                        <Typewriter
                            className='ml-0'
                            options={{
                                strings: ['Rajeshwari Meti 👋🏻', 'ラジェシュワリ・メティル 👋🏻', 'राजेश्वरी मेति👋🏻', 'ರಾಜೇಶ್ವರಿ ಮೇಟಿ👋🏻'],
                                autoStart: true,
                                loop: true,
                                delay: 75,
                                deleteSpeed: 50,
                            }}
                        />

                    </div>
                </div>

                <p className='text-5xl md:text-9xl  text-black'>Frontend Developer</p>
                <p className='text-2xl text-wrap md:text-3xl text-black'>Frontend Developer specializing in clean designs, accessibility, and seamless user experiences, focused on building intuitive, responsive, and scalable web applications with strong attention to detail and performance.</p>




                <div className="flex gap-4 text-3xl">
                    <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>

                    <a href="https://linkedin.com/in/your-username" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>

                    <a href="mailto:your-email@example.com">
                        <FaEnvelope />
                    </a>
                </div>

            </div>




        </div>
    );
}
