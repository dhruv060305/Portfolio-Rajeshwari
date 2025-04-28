import React, { useEffect, useRef } from 'react';
import Audio from '../Assets/timeless120.mp3'; // Adjust the path to your audio file

function AudioPlayer() {
  const audioRef = useRef(null);

  useEffect(() => {
    // Start playing the audio muted when the component mounts
    if (audioRef.current) {
      audioRef.current.muted = true; // Start muted
      audioRef.current.play();

      // Unmute the audio after 2 seconds
      setTimeout(() => {
        audioRef.current.muted = false; // Unmute after delay
      }, 2000); // Adjust this delay time if necessary

      // Optionally, loop the music and adjust volume
      audioRef.current.loop = true;
      // audioRef.current.volume = 0.5; // Set volume (0 to 1)
    }

    // Cleanup when component unmounts (stop music)
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0; // Reset music to start
      }
    };
  }, []);

  return (
    <audio ref={audioRef} src={Audio} preload="auto" />
  );
}

export default AudioPlayer;
