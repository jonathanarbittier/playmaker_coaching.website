"use client";

import { useEffect, useRef } from "react";

export function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const play = () => ref.current?.play().catch(() => undefined);
    const playWhenVisible = () => {
      if (document.visibilityState === "visible") play();
    };

    play();
    window.addEventListener("pageshow", play);
    document.addEventListener("visibilitychange", playWhenVisible);
    window.addEventListener("touchstart", play, { once: true, passive: true });

    return () => {
      window.removeEventListener("pageshow", play);
      document.removeEventListener("visibilitychange", playWhenVisible);
      window.removeEventListener("touchstart", play);
    };
  }, []);

  return (
    <video
      ref={ref}
      className="hero-media"
      autoPlay muted loop playsInline preload="auto"
      poster="/images/playmaker-hero-poster.jpg"
      aria-hidden="true"
    >
      <source src="/videos/playmaker-hero-mobile.mp4" type="video/mp4" media="(max-width: 767px)" />
      <source src="/videos/playmaker-hero.mp4" type="video/mp4" />
    </video>
  );
}
