"use client";

import { useEffect, useRef } from "react";

export function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!media.matches) ref.current?.play().catch(() => undefined);
  }, []);

  return (
    <video
      ref={ref}
      className="hero-media"
      autoPlay muted loop playsInline preload="metadata"
      poster="/images/playmaker-hero-poster.jpg"
      aria-hidden="true"
    >
      <source src="/videos/playmaker-hero-mobile.mp4" type="video/mp4" media="(max-width: 767px)" />
      <source src="/videos/playmaker-hero.mp4" type="video/mp4" />
    </video>
  );
}
