# Hero video

The supplied Playmaker training video has been converted into two silent, web-optimized H.264 files:

- `playmaker-hero.mp4` — enhanced 1280 × 720 desktop version
- `playmaker-hero-mobile.mp4` — full-screen 540 × 960 phone version

The desktop file is an 18-second loop. The phone file is a lighter 12-second loop with a true portrait crop, baseline H.264 compatibility and a keyframe every two seconds for faster startup. Both use fast-start metadata and remove the black bands baked into the original export. Restrained denoising, color correction, Lanczos upscaling and sharpening improve their perceived quality. The existing hero image remains the loading fallback.

For phone browsers that block all video autoplay, `public/images/playmaker-hero-mobile.webp` provides a lightweight 15 fps animated fallback made from the same real footage. It is removed from the DOM immediately when native video playback begins, preventing simultaneous decoding and playback lag.
