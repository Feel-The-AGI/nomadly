"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/partners", label: "Partners" },
  { href: "/features", label: "Features" },
  { href: "/faq", label: "FAQs" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lang, setLang] = useState<"en" | "fr">("en");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const switchLang = useCallback((target: "en" | "fr") => {
    setLang(target);
    if (target === "fr") {
      const currentUrl = window.location.href;
      if (currentUrl.includes("localhost") || currentUrl.includes("127.0.0.1")) {
        alert("French translation will be available on the live site.");
        setLang("en");
        return;
      }
      window.open(
        `https://translate.google.com/translate?sl=en&tl=fr&u=${encodeURIComponent(currentUrl)}`,
        "_self"
      );
    } else {
      window.location.reload();
    }
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-[0_1px_0_rgba(17,29,141,0.08)]"
          : "bg-white/80 backdrop-blur-md"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="Nomadly"
              width={140}
              height={48}
              priority
              className="h-8 lg:h-10 w-auto rounded-md mix-blend-multiply"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-navy rounded-lg transition-colors duration-200 hover:bg-tint-blue/50"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <div className="flex items-center gap-0.5 text-xs bg-gray-100 rounded-lg p-0.5">
              <button
                onClick={() => switchLang("en")}
                className={`px-2.5 py-1.5 rounded-md font-semibold transition-all duration-200 ${
                  lang === "en"
                    ? "bg-white text-navy shadow-sm"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => switchLang("fr")}
                className={`px-2.5 py-1.5 rounded-md font-semibold transition-all duration-200 ${
                  lang === "fr"
                    ? "bg-white text-navy shadow-sm"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                FR
              </button>
            </div>
            <a
              href="https://calendar.google.com/calendar/u/0?cid=bWFuYXNzZS5ib2tvbGVAZ21haWwuY29t"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2.5 text-sm font-semibold text-white bg-navy rounded-full hover:bg-blue transition-all duration-300 hover:shadow-[0_0_20px_rgba(4,107,210,0.3)]"
            >
              Get Started
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-gray-700"
            aria-label="Toggle menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              {mobileOpen ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden glass border-t border-gray-200/50">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-sm font-medium text-gray-700 hover:text-navy hover:bg-tint-blue/50 rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-2 px-4 py-3">
              <button
                onClick={() => switchLang("en")}
                className={`px-3 py-1.5 rounded-lg text-sm font-semibold ${
                  lang === "en" ? "bg-tint-blue text-navy" : "text-gray-500"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => switchLang("fr")}
                className={`px-3 py-1.5 rounded-lg text-sm font-semibold ${
                  lang === "fr" ? "bg-tint-blue text-navy" : "text-gray-500"
                }`}
              >
                FR
              </button>
            </div>
            <a
              href="https://calendar.google.com/calendar/u/0?cid=bWFuYXNzZS5ib2tvbGVAZ21haWwuY29t"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center mt-3 px-5 py-3 text-sm font-semibold text-white bg-navy rounded-full"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
