# Hero video

The supplied Playmaker training video has been converted into two silent, web-optimized H.264 files:

- `playmaker-hero.mp4` — enhanced 1280 × 720 desktop version
- `playmaker-hero-mobile.mp4` — full-screen 480 × 854 phone version

The desktop file is an 18-second loop. The phone file is a 1.3 MB, 12-second loop with a true portrait crop, constrained-baseline H.264 compatibility and a keyframe every second for faster startup. Both use fast-start metadata and remove the black bands baked into the original export. Restrained denoising, color correction, Lanczos upscaling and sharpening improve their perceived quality. The phone file is the direct server-rendered video source so Safari can begin autoplay before React hydrates; desktop swaps to its wider source on hydration.
