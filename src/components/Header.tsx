"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navigation } from "@/data/portfolio";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navigation
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((section): section is HTMLElement => section !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];
        if (visibleSection) setActiveSection(visibleSection.target.id);
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: [0, 0.2, 0.5, 1] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="nav-shell">
        <a className="brand" href="#home" aria-label="Moustapha Bouzianne, home" onClick={() => setMenuOpen(false)}>
          <Image src="/brand-icon.svg" width={31} height={31} alt="" priority />
          <span>MOUSTAPHA BOUZIANNE</span>
        </a>
        <nav className="nav-links" aria-label="Main navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className={activeSection === item.href.slice(1) ? "is-active" : undefined} aria-current={activeSection === item.href.slice(1) ? "location" : undefined} onClick={() => setActiveSection(item.href.slice(1))}>{item.label}</a>
          ))}
        </nav>
        <a className="nav-cta nav-desktop-cta" href="#contact">
          Let&apos;s Talk <ArrowUpRight size={14} aria-hidden="true" />
        </a>
        <button
          className="mobile-menu-button"
          ref={menuButtonRef}
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={19} aria-hidden="true" /> : <Menu size={19} aria-hidden="true" />}
        </button>
      </div>
      <nav className="mobile-menu" id="mobile-navigation" aria-label="Mobile navigation" hidden={!menuOpen}>
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className={activeSection === item.href.slice(1) ? "is-active" : undefined} aria-current={activeSection === item.href.slice(1) ? "location" : undefined} onClick={() => { setActiveSection(item.href.slice(1)); setMenuOpen(false); }}>{item.label}</a>
          ))}
          <a className="mobile-menu-cta" href="#contact" onClick={() => setMenuOpen(false)}>
            Let&apos;s Talk <ArrowUpRight size={14} aria-hidden="true" />
          </a>
      </nav>
    </header>
  );
}
