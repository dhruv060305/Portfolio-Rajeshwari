import React from 'react';
import "../App.css"
import Typewriter from 'typewriter-effect';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import 'flag-icons/css/flag-icons.min.css';



export default function Main() {


    return (

        <div className="min-h-screen w-full  flex justify-center items-start bg-[#F8F8E1]" >

            <div className='container gap-5 flex flex-col justify-center items-center mt-10 sm:items-start'>

                <div className='flex h-auto w-auto text-2xl '>
                    <p className="mr-2 hidden sm:block">Hi! I’m</p>

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


                <div className='flex flex-col justify-center sm:items-start items-center gap-y-5 sm:text-left   '>

                    <p className='text-5xl md:text-7xl lg:text-8xl  text-black'>{"Frontend Developer".split("").map((char, index) => (
                        <span className='hover:text-gray-600' key={index}>{char}</span>
                    ))}</p>

                    <p className='text-5xl md:text-7xl lg:text-8xl  text-black ml-0'><span className='' style={{ fontFamily: 'Playwrite Australia SA' }}><i>Based in</i></span> India <span className="text-6xl  fi fi-in"></span> </p>

                    <p className='text-2xl font-light text-wrap md:text-3xl text-black'>
                       
                    Frontend Developer specializing in clean designs, accessibility, and seamless user experiences, focused on building intuitive, responsive, and scalable web applications with strong attention to detail and performance.
                        
                    </p>

                </div>


                <div className="flex gap-4 text-3xl">
                    <a href="https://github.com/jasmine219" aria-label="GitHub Profile" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>

                    <a href="https://linkedin.com/in/rajeshwari-meti-9050a6273" aria-label="LinkedIn Profile" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>

                    <a href="mailto:your-sanjanameti.2@gmail.com" aria-label="Send Email">
                        <FaEnvelope />
                    </a>
                </div>

            </div>




        </div>
    );
}
