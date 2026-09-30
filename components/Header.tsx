"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight } from "./ArrowUpRight";

const links = [
  ["HOME", "#home"],
  ["COACHING", "#coaching"],
  ["CONTACT", "#contact"],
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className={`site-header ${scrolled || open ? "site-header--solid" : ""}`}>
      <a href="#home" className="wordmark" aria-label="Playmaker Football Coaching home">
        <span>PLAYMAKER</span>
        <small>FOOTBALL COACHING</small>
      </a>

      <nav className="desktop-nav" aria-label="Main navigation">
        {links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        <a className="nav-cta" href="https://www.instagram.com/playmaker_coaching/" target="_blank" rel="noreferrer">
          ENQUIRE <ArrowUpRight />
        </a>
      </nav>

      <button className="menu-button" type="button" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>
        <span>{open ? "CLOSE" : "MENU"}</span>
        <i className={open ? "is-open" : ""} />
      </button>

      <div id="mobile-menu" className={`mobile-menu ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <nav aria-label="Mobile navigation">
          {links.map(([label, href], index) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              <small>0{index + 1}</small><span>{label}</span>
            </a>
          ))}
        </nav>
        <a className="mobile-enquire" href="https://www.instagram.com/playmaker_coaching/" target="_blank" rel="noreferrer">
          ENQUIRE ABOUT TRAINING <ArrowUpRight />
        </a>
      </div>
    </header>
  );
}
