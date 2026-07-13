"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const links = [
  { href: "#services", label: "Services" },
  { href: "#a-propos", label: "À propos" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-line/60 bg-ink/80 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Navigation principale"
        className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4"
      >
        <Link href="#" className="flex items-center gap-2.5" aria-label="Rbt Dev Hub — accueil">
          <Image
            src="/logo.png"
            alt="Logo Rbt Dev Hub"
            width={40}
            height={40}
            priority
            className="h-10 w-10 rounded-full"
          />
          <span className="font-mono text-lg font-bold tracking-tight">
            rbt.dev<span className="text-gold">hub</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-muted transition-colors hover:text-paper"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#devis"
              className="rounded-lg bg-gold px-4 py-2 text-sm font-semibold text-ink transition-all hover:bg-gold/85 hover:shadow-glow"
            >
              Devis gratuit
            </a>
          </li>
        </ul>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          className="grid h-10 w-10 place-items-center rounded-lg border border-line md:hidden"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            {open ? (
              <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            ) : (
              <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div id="menu-mobile" className="border-t border-line/60 bg-ink/95 backdrop-blur-md md:hidden">
          <ul className="space-y-1 px-5 py-4">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-muted transition-colors hover:bg-navy hover:text-paper"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#devis"
                onClick={() => setOpen(false)}
                className="block rounded-lg bg-gold px-3 py-2.5 text-center font-semibold text-ink"
              >
                Devis gratuit
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
