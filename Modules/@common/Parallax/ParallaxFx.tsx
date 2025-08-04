'use client';

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

export default function ParallaxHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.5, 1]);
  const translateY = useTransform(scrollYProgress, [0, 0.5], ['40%', '0%']);

  const handleClick = () => {
    if (!showVideo) {
      setShowVideo(true);
      setTimeout(() => {
        videoRef.current?.play();
        setIsVideoPlaying(true);
      }, 600);
    } else {
      if (videoRef.current) {
        if (isVideoPlaying) {
          videoRef.current.pause();
          setIsVideoPlaying(false);
          setTimeout(() => {
            setShowVideo(false);
          }, 600);
        } else {
          videoRef.current.play();
          setIsVideoPlaying(true);
        }
      }
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => setIsVideoPlaying(true);
    const handlePause = () => setIsVideoPlaying(false);

    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);

    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative h-[250vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <motion.div
          className="absolute inset-0 w-full h-full"
          style={{ scale, translateY }}
        >
          {/* Clickable area only for video/image */}
          <div
            className="absolute inset-0 z-20"
            onClick={handleClick}
            style={{
              cursor: isVideoPlaying
                ? 'url("/cursor-2.png") 8 8, grab'
                : 'url("/cursor-1.png") 8 8, grab',
            }}
          >
            <AnimatePresence mode="wait">
              {!showVideo && (
                <motion.img
                  key="image"
                  src="https://images.prismic.io/zero-cms-disco/ZxpNmIF3NbkBX-mo_4_SectionBuffer_DWM_ZERO_MY25_FXE_FINALS_V1_HI_0001_0005.jpg?auto=format,compress"
                  alt="Hero"
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0, scaleX: 0, scaleY: 0, transformOrigin: '50% 50%' }}
                  animate={{ opacity: 1, scaleX: 1, scaleY: 1 }}
                  exit={{ opacity: 0, scaleX: 0, scaleY: 0 }}
                  transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                />
              )}
            </AnimatePresence>

            <AnimatePresence mode="wait">
              {showVideo && (
                <motion.video
                  key="video"
                  ref={videoRef}
                  src="https://www.w3schools.com/html/mov_bbb.mp4"
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0, scaleX: 0, scaleY: 0, transformOrigin: '50% 50%' }}
                  animate={{ opacity: 1, scaleX: 1, scaleY: 1 }}
                  exit={{ opacity: 0, scaleX: 0, scaleY: 0 }}
                  transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                />
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        <div className="relative z-10 flex items-center justify-center h-full pointer-events-none">
          {/* Optional text/logo overlay */}
        </div>
      </div>
    </div>
  );
}
