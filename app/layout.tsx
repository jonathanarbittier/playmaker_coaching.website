import "./globals.css";
import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";

const barlowCondensed = localFont({
  src: [
    { path: "../node_modules/@fontsource/barlow-condensed/files/barlow-condensed-latin-500-normal.woff2", weight: "500" },
    { path: "../node_modules/@fontsource/barlow-condensed/files/barlow-condensed-latin-600-normal.woff2", weight: "600" },
    { path: "../node_modules/@fontsource/barlow-condensed/files/barlow-condensed-latin-700-normal.woff2", weight: "700" },
    { path: "../node_modules/@fontsource/barlow-condensed/files/barlow-condensed-latin-800-normal.woff2", weight: "800" },
  ],
  variable: "--font-barlow-condensed",
  display: "swap",
});

const inter = localFont({
  src: [
    { path: "../node_modules/@fontsource/inter/files/inter-latin-400-normal.woff2", weight: "400" },
    { path: "../node_modules/@fontsource/inter/files/inter-latin-500-normal.woff2", weight: "500" },
    { path: "../node_modules/@fontsource/inter/files/inter-latin-600-normal.woff2", weight: "600" },
  ],
  variable: "--font-inter",
  display: "swap",
});

const lockMobileHeroViewport = `
  (() => {
    const root = document.documentElement;
    let orientationTimer;
    const lock = () => {
      if (window.matchMedia('(max-width: 767px)').matches) {
        root.style.setProperty('--hero-height', window.innerHeight + 'px');
        root.style.setProperty('--hero-vw', window.innerWidth / 100 + 'px');
      } else {
        root.style.removeProperty('--hero-height');
        root.style.removeProperty('--hero-vw');
      }
    };
    lock();
    window.addEventListener('orientationchange', () => {
      clearTimeout(orientationTimer);
      orientationTimer = setTimeout(lock, 350);
    }, { passive: true });
  })();
`;

export const metadata: Metadata = {
  title: "Playmaker Football Coaching",
  description: "Individual and small group football coaching focused on player development.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${barlowCondensed.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: lockMobileHeroViewport }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
