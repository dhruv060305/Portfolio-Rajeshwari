import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import Typewriter from 'typewriter-effect';

const skillsTimeline = [
    { year: "2019", skill: "HTML & CSS", description: "Learned how to structure web pages and style them using CSS and Bootstrap." },
    { year: "2020", skill: "JavaScript", description: "Mastered fundamentals like DOM manipulation, events, and asynchronous behavior." },
    { year: "2021", skill: "React.js", description: "Started building dynamic UIs using components, hooks, and state management." },
    { year: "2022", skill: "Node.js & MongoDB", description: "Built REST APIs and connected them to databases to handle full-stack apps." },
    { year: "2023", skill: "Next.js & TypeScript", description: "Adopted modern stack for production-ready apps with type safety and server-side rendering." },
];

export default function Thired() {
    const [selectedIndex, setSelectedIndex] = useState(null);

    return (
        <div className="w-screen min-h-screen overflow-y-auto snap-y snap-mandatory flex flex-col bg-black text-white">
            <div className="p-6 w-full max-w-6xl mx-auto">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-10">
                    <Typewriter
                        options={{
                            strings: ['My Skill Progression'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </h2>

                <div className="flex items-center justify-start md:justify-center space-x-8 overflow-x-auto pb-6 px-4 scrollbar-thin scrollbar-thumb-gray-700">
                    {skillsTimeline.map((item, index) => (
                        <div key={index} className="flex flex-col items-center flex-shrink-0">
                            <div
                                className={`w-6 h-6 rounded-full cursor-pointer border-2 transition-all duration-300 ${selectedIndex === index ? "bg-green-500 border-green-500" : "border-gray-400"
                                    }`}
                                onClick={() => setSelectedIndex(index)}
                                title={item.skill}
                            ></div>
                            <span className="mt-2 text-sm text-gray-400 whitespace-nowrap">{item.year}</span>
                        </div>
                    ))}
                </div>

                <AnimatePresence mode="wait">
                    {selectedIndex !== null && (
                        <motion.div
                            key={selectedIndex}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                            className="mx-4 md:mx-auto mt-6 max-w-lg p-6 border rounded-xl shadow-lg bg-white text-black"
                        >
                            <h3 className="text-lg md:text-xl font-bold text-green-600">
                                {skillsTimeline[selectedIndex].skill}
                            </h3>
                            <p className="text-gray-500 text-sm">{skillsTimeline[selectedIndex].year}</p>
                            <p className="text-gray-700 mt-3 text-sm md:text-base">{skillsTimeline[selectedIndex].description}</p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
