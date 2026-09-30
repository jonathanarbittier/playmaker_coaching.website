# Hero video

The supplied Playmaker training video has been converted into two silent, web-optimized H.264 files:

- `playmaker-hero.mp4` — enhanced 1280 × 720 desktop version
- `playmaker-hero-mobile.mp4` — full-screen 480 × 854 phone version

The desktop file is an 18-second loop. The phone file is a 1.3 MB, 12-second loop with a true portrait crop, constrained-baseline H.264 compatibility and a keyframe every second for faster startup. Both use fast-start metadata and remove the black bands baked into the original export. Restrained denoising, color correction, Lanczos upscaling and sharpening improve their perceived quality. The existing hero image remains the loading fallback.

For phone browsers that block all video autoplay, `public/images/playmaker-hero-mobile-sprite.webp` provides a 314 KB two-second fallback made from 48 frames of the same real footage. CSS moves across this single pre-decoded sprite texture at 24 fps, avoiding Safari's choppy animated-WebP decoder. It is removed from the DOM immediately when native video playback begins.
