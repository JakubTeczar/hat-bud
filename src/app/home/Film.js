'use client';

import dynamic from 'next/dynamic';
import { useEffect, useRef, useState } from 'react';
const Map = dynamic(() => import('./Map.client'), { ssr: false });

export default function VideoSection() {
  const videoRef = useRef(null);        
  const containerRef = useRef(null);  
  const [isPlaying, setIsPlaying] = useState(true);
  const [viewMode, setViewMode] = useState('video'); 

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  // Auto play/pause when element is visible at 60%
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const video = videoRef.current;
        if (!video) return;

        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          video.play();
          setIsPlaying(true);
        } else {
          video.pause();
          setIsPlaying(false);
        }
      },
      {
        threshold: [0, 0.6, 1],
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative mx-auto max-w-8xl min-h-[50vh] max-h-[auto] my-12 bg-white overflow-hidden px-6 py-6 lg:px-8"
    >
    <section className=" text-center py-12 px-4">
        <h2 className="mb-4 text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">Lokalizacja inwestycji</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Osiedle domów bliźniaczych zlokalizowane w spokojnej części Trzebowniska <b>TUTAJ ADRES</b> – 
            blisko natury, ale z szybkim dojazdem do centrum Rzeszowa. Idealne miejsce dla rodzin.
        </p>
    </section>
      {/* Switch: Film / Mapa */}
      <div className="w-min mb-4 mx-auto z-20 flex space-x-4 bg-white/80 p-2 rounded-full shadow-md">
        <button
          onClick={() => setViewMode('video')}
          className={`px-4 py-2 hover:cursor-pointer hover:bg-[#bdbaba2d] hover:text-[#141414] rounded-full font-medium ${viewMode === 'video' ? 'bg-black text-white' : 'text-black'}`}
        >
          Film
        </button>
        <button
          onClick={() => setViewMode('map')}
          className={`px-4 py-2 hover:cursor-pointer hover:bg-[#bdbaba2d] hover:text-[#141414] rounded-full font-medium ${viewMode === 'map' ? 'bg-black text-white' : 'text-black'}`}
        >
          Mapa
        </button>
      </div>

      {viewMode === 'video' ? (
        <>
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            loop
            className="w-full h-[60vh] object-cover"
          >
            <source src="Film_hatbud.mp4" type="video/mp4" />
            Twoja przeglądarka nie obsługuje tagu wideo.
          </video>

          {/* Play/Pause Button */}
          <button
            onClick={togglePlayback}
            className="absolute bottom-8 right-1/2 translate-x-1/2 z-10 rounded-full bg-white/80 p-3 shadow-lg hover:bg-white"
            aria-label="Odtwórz/Zatrzymaj"
          >
            {isPlaying ? (
              // Pause Icon
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor" className="w-7 h-6 text-black">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 9v6m4-6v6" />
              </svg>
            ) : (
              // Play Icon
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor" className="w-7 h-6 text-black">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v18l15-9L5 3z" />
              </svg>
            )}
          </button>
        </>
      ) : (
        <Map />
      )}
    </div>
  );
}
