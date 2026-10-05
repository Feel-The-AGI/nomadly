"use client";

import Link from "next/link";
import Image from "next/image";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/partners", label: "Partners" },
  { href: "/features", label: "Features" },
  { href: "/faq", label: "FAQs" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-navy/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="py-16 lg:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="lg:col-span-1">
            <Image
              src="/images/logo.png"
              alt="Nomadly"
              width={140}
              height={48}
              className="h-8 w-auto rounded-md mb-5"
              style={{ mixBlendMode: "screen" }}
            />
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Strategic Intelligence for SpaceTech Exports. Democratizing access
              to international markets through innovation and expertise.
            </p>
            <div className="flex gap-3">
              {["facebook", "linkedin", "twitter", "instagram"].map((s) => (
                <a
                  key={s}
                  href="#"
                  aria-label={s}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-blue/80 flex items-center justify-center transition-colors duration-200"
                >
                  <SocialIcon name={s} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display font-semibold text-sm uppercase tracking-wider text-gray-400 mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-sm uppercase tracking-wider text-gray-400 mb-5">
              Contact
            </h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex gap-3">
                <MapPinIcon />
                <span>
                  25 Rue du Maréchal Foch, 78000 Versailles, France
                </span>
              </li>
              <li className="flex gap-3">
                <MapPinIcon />
                <span>
                  Le Perqo, 2 Rue Simone Veil, 93400 Saint-Ouen-sur-Seine,
                  France
                </span>
              </li>
              <li className="flex gap-3">
                <PhoneIcon />
                <span>+33 7 61 91 10 49</span>
              </li>
              <li className="flex gap-3">
                <MailIcon />
                <div>
                  <div>contact@nomadly.fr</div>
                  <div>manasse.bokole@nomadly.fr</div>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-sm uppercase tracking-wider text-gray-400 mb-5">
              Legal
            </h3>
            <ul className="space-y-3 mb-8">
              {["Privacy Policy", "Terms Of Services", "Cookie Policy", "Data Protection"].map(
                (item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
            <h3 className="font-display font-semibold text-sm uppercase tracking-wider text-gray-400 mb-3">
              Newsletter
            </h3>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/10 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue/50 transition-colors"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue text-white text-sm font-medium rounded-lg hover:bg-blue-light transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 py-6 text-center text-xs text-gray-500">
          © Nomadly {new Date().getFullYear()}, All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ name }: { name: string }) {
  const paths: Record<string, string> = {
    facebook: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
    linkedin: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
    twitter: "M4 4l6.5 8L4 20h2l5.5-6.8L16 20h4l-6.8-8.4L19.5 4H18l-5 6.2L9 4H4z",
    instagram:
      "M12 2.2c2.7 0 3 0 4.1.1 1 0 1.5.2 1.9.3.5.2.8.4 1.1.7.3.3.6.7.7 1.1.1.4.3.9.3 1.9 0 1 .1 1.4.1 4.1s0 3-.1 4.1c0 1-.2 1.5-.3 1.9-.2.5-.4.8-.7 1.1-.3.3-.7.6-1.1.7-.4.1-.9.3-1.9.3-1 0-1.4.1-4.1.1s-3 0-4.1-.1c-1 0-1.5-.2-1.9-.3-.5-.2-.8-.4-1.1-.7-.3-.3-.6-.7-.7-1.1-.1-.4-.3-.9-.3-1.9C2.2 15 2.2 14.7 2.2 12s0-3 .1-4.1c0-1 .2-1.5.3-1.9.2-.5.4-.8.7-1.1C3.6 4.6 4 4.3 4.4 4.2c.4-.1.9-.3 1.9-.3C7.3 2.2 7.6 2.2 12 2.2zm0 5.3a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9zm0 7.4a2.9 2.9 0 1 1 0-5.8 2.9 2.9 0 0 1 0 5.8zM18.4 6.2a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0z",
  };
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-white/70">
      <path d={paths[name]} />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-500 mt-0.5 flex-shrink-0">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-500 mt-0.5 flex-shrink-0">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-500 mt-0.5 flex-shrink-0">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}
