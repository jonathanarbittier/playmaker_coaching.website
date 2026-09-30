"use client";

import { useEffect, useRef } from "react";

const MOBILE_VIDEO = "/videos/playmaker-hero-mobile.mp4";
const DESKTOP_VIDEO = "/videos/playmaker-hero.mp4";

export function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const source = window.matchMedia("(max-width: 767px)").matches
      ? MOBILE_VIDEO
      : DESKTOP_VIDEO;

    if (!video.currentSrc.endsWith(source)) {
      video.src = source;
      video.load();
    }

    let retryTimer: ReturnType<typeof setTimeout> | undefined;
    let retries = 0;

    const play = () => {
      if (retryTimer) clearTimeout(retryTimer);
      video.muted = true;
      video.defaultMuted = true;
      video.playsInline = true;
      video.setAttribute("muted", "");
      video.setAttribute("playsinline", "");
      video.setAttribute("webkit-playsinline", "");

      const attempt = video.play();
      if (attempt) {
        attempt.catch(() => {
          if (retries < 12) {
            retries += 1;
            retryTimer = setTimeout(play, 250);
          }
        });
      }
    };
    const playWhenVisible = () => {
      if (document.visibilityState === "visible") play();
    };

    play();
    video.addEventListener("loadedmetadata", play);
    video.addEventListener("loadeddata", play);
    video.addEventListener("canplay", play);
    window.addEventListener("pageshow", play);
    window.addEventListener("focus", play);
    window.addEventListener("online", play);
    document.addEventListener("visibilitychange", playWhenVisible);
    window.addEventListener("touchstart", play, { once: true, passive: true });

    return () => {
      video.removeEventListener("loadedmetadata", play);
      video.removeEventListener("loadeddata", play);
      video.removeEventListener("canplay", play);
      window.removeEventListener("pageshow", play);
      window.removeEventListener("focus", play);
      window.removeEventListener("online", play);
      document.removeEventListener("visibilitychange", playWhenVisible);
      window.removeEventListener("touchstart", play);
      if (retryTimer) clearTimeout(retryTimer);
    };
  }, []);

  return (
    <video
      ref={ref}
      className="hero-media"
      src={MOBILE_VIDEO}
      autoPlay muted loop playsInline preload="auto"
      aria-hidden="true"
    />
  );
}
