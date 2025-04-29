import React, { useEffect, useRef, useState } from 'react';
import Audio from '../Assets/timeless120.mp3';

export default function AudioPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.5;
    audio.loop = true;

    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => setIsPlaying(true))
        .catch((err) => console.warn("Autoplay blocked:", err));
    }

    const updateTime = () => setCurrentTime(audio.currentTime);
    const setAudioDuration = () => setDuration(audio.duration);

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', setAudioDuration);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', setAudioDuration);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch(console.error);
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  const remainingTime = duration - currentTime;

  return (
    <div className="flex items-center gap-3 text-black text-sm">
      <audio ref={audioRef} src={Audio} preload="auto" />
      <button
        onClick={togglePlay}
        className="px-2 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded"
      >
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <button
        onClick={toggleMute}
        className="px-2 py-1 bg-gray-700 hover:bg-gray-800 text-white rounded"
      >
        {isMuted ? 'Unmute' : 'Mute'}
      </button>
      <span className="text-xs text-gray-700">{formatTime(remainingTime)} left</span>
    </div>
  );
}
