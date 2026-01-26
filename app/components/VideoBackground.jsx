"use client";
import { useState, useEffect, useRef } from "react";
import styles from "./Hero.module.css";

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
      {/* Poster/placeholder - fades out when video loads */}
      <div
        className={styles.videoPoster}
        style={{
          opacity: videoLoaded ? 0 : 1,
          transition: "opacity 1.5s ease-out",
        }}
      />

      {/* Video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        loop
        preload="auto"
        controls={false}
        onCanPlay={handleVideoLoad}
        style={{
          opacity: videoLoaded ? 0.9 : 0,
          transition: "opacity 2s ease-out",
        }}
      >
        <source src="/office-meeting-1080p.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
