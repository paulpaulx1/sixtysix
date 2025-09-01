'use client';
import { useState, useEffect, useRef } from 'react';
import styles from './Hero.module.css';

export default function VideoBackground() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    // Fallback: if video is already ready when component mounts (cached case)
    if (videoRef.current && videoRef.current.readyState >= 3) {
      setVideoLoaded(true);
    }
  }, []);

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  return (
    <div className={styles.heroVideoBackground}>
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        loop
        preload='auto'
        controls={false}
        onCanPlay={handleVideoLoad}
        style={{
          opacity: videoLoaded ? 0.9 : 0,
          transition: 'opacity 2s ease-out',
        }}
      >
        <source
          src='https://to06mev3jvqkbzz0.public.blob.vercel-storage.com/0_Office_Meeting_3840x2160.mp4'
          type='video/mp4'
        />
      </video>
    </div>
  );
}
