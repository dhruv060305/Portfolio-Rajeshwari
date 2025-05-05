import React from 'react';

export default function Secondsection() {
  const projects = [
    {
      name: 'Amazon.clone',
      role: '1st Frontend Project',
      videoSrc: 'src/Assets/Clone.mp4',
      description: {
        heading: 'My First Project',
        subheading: 'HTML, CSS',
      }
    },
    {
      name: 'Bank Management System',
      role: '1st Backend Project',
      videoSrc: 'src/Assets/BMS.mp4',
      description: {
        heading: 'Second Project',
        subheading: 'HTML, CSS, JS, PHP, MySQL',
      }
    }
  ];

  return (
    <div className="w-screen h-screen overflow-y-auto snap-y snap-mandatory flex flex-col bg-[#faf9f6] text-black">
      {projects.map((project, index) => (
        <div
          key={index}
          className="min-h-screen h-screen flex flex-col snap-center items-center justify-center px-4 space-y-6"
        >
          {/* Video on top */}
          <div className="w-full max-w-3xl aspect-video shadow-lg overflow-hidden rounded-lg">
            <video
              src={project.videoSrc}
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover"
            />
          </div>

          {/* Center Text below */}
          <div className="text-center">
            <h1 className="text-5xl font-serif italic">{project.name}</h1>
            <p className="mt-2 text-md tracking-wide">
              {'{'} {project.role} {'}'}
            </p>
            <h3 className="mt-1 text-lg font-semibold text-purple-700">
              {project.description.subheading}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
}
