import React from 'react';
import SplitText from '../Animations/SplitText';
import RotatingText from '../Animations/RotatingText';
import DecryptedText from '../Animations/DecryptedText';

export default function Main() {

    // Define a dummy function to handle animation complete (you can customize it later)
    const handleAnimationComplete = () => {
        console.log('Animation complete!');
    };

    return (
        <div className="h-screen w-full flex justify-center items-start" style={{ backgroundColor: '#222831' }}>

            <div className="text-white container  font-bold">
                <div className="mt-5">
                    <SplitText
                        text="Hi! I’m Rajeshwari Meti"
                        className="text-3xl sm:text-4xl  md:text-5xl font-semibold"
                        delay={150}
                        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                        easing="easeOutCubic"
                        threshold={0.2}
                        rootMargin="-50px"
                        onLetterAnimationComplete={handleAnimationComplete}
                    />
                </div>

                <RotatingText
                    texts={['Python Developer', 'Frontend Developer', 'Backend Developer']}
                    mainClassName="px-2 sm:px-3 md:px-4 text-6xl sm:text-7xl md:text-9xl h-auto w-auto text-white overflow-hidden py-0.5 sm:py-1 md:py-2 rounded-lg"
                    staggerFrom={"last"}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-120%" }}
                    staggerDuration={0.025}
                    splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                    rotationInterval={2000}
                />


                <div style={{ marginTop: '4rem' }}>
                    <DecryptedText
                        text="Experienced in building scalable solutions across industries like fintech, healthcare, and e-commerce. Skilled in backend development, APIs, automation, and aligning tech with business needs."
                        animateOn="view"
                        speed= "10"
                        className='text-2xl sm:text-3xl md:text-4xl font-normal'
                        revealDirection="center"
                    />
                </div>

            </div>

        </div>
    );
}
