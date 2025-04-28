import React from 'react';
import "../App.css"
import Typewriter from 'typewriter-effect';






export default function Main() {    


    return (
        <div className="h-screen w-full flex justify-center items-start" style={{ backgroundColor: '#F8F8E1' }}>

            <div className='container gap-5 flex flex-col justify-center items-center mt-10'>

                <div className='flex h-auto w-auto text-2xl '>
                    <p className="mr-1 hidden sm:block">Hi! I’m</p>
                    <div className="min-w-[300px]">
                        <Typewriter
                        className='ml-0'
                            options={{
                                strings: ['Rajeshwari Meti 👋🏻', 'ラジェシュワリ・メティル 👋🏻','राजेश्वरी मेति👋🏻','ರಾಜೇಶ್ವರಿ ಮೇಟಿ👋🏻'],
                                autoStart: true,
                                loop: true,
                                delay: 75,
                                deleteSpeed: 50,
                            }}
                        />
                    </div>
                </div>


                <p className='text-5xl md:text-9xl  text-black'>Python Developer</p>
                <p className='text-2xl text-wrap md:text-3xl text-black'>Experienced in building scalable solutions across industries like fintech, healthcare, and e-commerce. Skilled in backend development, APIs, automation, and aligning tech with business needs.</p>

            </div>







        </div>
    );
}
