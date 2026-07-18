"use client";

import { useRef, useState, useEffect } from "react";

export default function ReelVideo({ src, title }: { src: string; title: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const [muted, setMuted] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onTimeUpdate = () => {
      if (video.duration) {
        setProgress((video.currentTime / video.duration) * 100);
      }
    };

    video.addEventListener("timeupdate", onTimeUpdate);
    return () => video.removeEventListener("timeupdate", onTimeUpdate);
  }, []);

  const togglePause = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setPaused(false);
    } else {
      video.pause();
      setPaused(true);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
  };

  return (
    <div
      className="mt-2 relative overflow-hidden border border-primary cursor-pointer group"
      onClick={togglePause}
    >
      <video
        ref={videoRef}
        src={src}
        autoPlay
        loop
        muted={muted}
        playsInline
        className="w-full aspect-[9/16] max-h-[360px] object-cover"
      />

      {/* Top bar — REEL badge + mute */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between p-2 bg-gradient-to-b from-black/50 to-transparent">
        <div className="flex items-center gap-1 bg-primary/90 text-on-primary px-2 py-0.5">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
          <span className="font-label-caps text-[8px] tracking-wider">REEL</span>
        </div>
        <button
          onClick={toggleMute}
          className="w-7 h-7 flex items-center justify-center bg-black/50 text-white hover:bg-black/70 transition-colors"
        >
          <span className="material-symbols-outlined text-[16px]">
            {muted ? "volume_off" : "volume_up"}
          </span>
        </button>
      </div>

      {/* Pause overlay */}
      {paused && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
          <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
            <span className="material-symbols-outlined text-white text-[28px] ml-1">play_arrow</span>
          </div>
        </div>
      )}

      {/* Bottom — title + progress bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent pt-8 pb-2 px-2">
        <p className="font-label-caps text-[9px] text-white/80 mb-1.5">{title}</p>
        <div className="w-full h-[2px] bg-white/20 overflow-hidden">
          <div
            ref={progressRef}
            className="h-full bg-white transition-[width] duration-200 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
