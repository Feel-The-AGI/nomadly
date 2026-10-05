import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Partners",
  description: "Nomadly's global network of institutional, public, and private partners across Europe, Africa, and the Americas enabling seamless international space market expansion.",
};

const europePartners = [
  { name: "CNES Experts", icon: "rocket" },
  { name: "3i3s-Europa", icon: "globe" },
  { name: "Space Woman Alliance (SWAN)", icon: "users" },
  { name: "Ile-de-France Region (IDF)", icon: "building" },
  { name: "Reseau Initiative Seine Yvelines", icon: "network" },
  { name: "CCI Yvelines Versailles", icon: "briefcase" },
  { name: "Pepite Start-up Ile-de-France", icon: "spark" },
  { name: "Reseau Pepite France", icon: "network" },
  { name: "PSL Pepite", icon: "graduation" },
  { name: "ESA", icon: "satellite" },
];

const africaPartners = [
  { name: "3i3s Africa", icon: "globe" },
  { name: "FEC", icon: "briefcase" },
  { name: "Geostrat", icon: "map" },
  { name: "Era Congo", icon: "building" },
  { name: "4th Key Realty", icon: "key" },
];

const usaPartners = [
  { name: "NASA experts", icon: "rocket" },
  { name: "North Carolina University experts", icon: "graduation" },
  { name: "La French Tech Houston", icon: "spark" },
  { name: "3i3s-America", icon: "globe" },
  { name: "3i3Signature LLC", icon: "briefcase" },
];

function PartnerIcon({ type, className = "" }: { type: string; className?: string }) {
  const c = `w-4 h-4 ${className}`;
  switch (type) {
    case "rocket": return <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M6 12 3.27 3.13a1 1 0 0 1 1.46-1.06L12 6"/><path d="M12 6c2-2.96 6.5-4 9-1.5S22.04 10 19 12"/><path d="m12 6 6 6"/><path d="m18 12-3.27 8.87a1 1 0 0 1-1.06 1.46L12 18"/><circle cx="12" cy="12" r="2"/></svg>;
    case "globe": return <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>;
    case "users": return <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
    case "building": return <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01"/></svg>;
    case "network": return <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3M12 12V8"/></svg>;
    case "briefcase": return <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>;
    case "spark": return <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/></svg>;
    case "graduation": return <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/></svg>;
    case "satellite": return <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13"/><path d="m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17"/><path d="m8 2 1 1M2 8l1 1M21 15l1 1M15 21l1 1"/><path d="m14 10-2 2"/></svg>;
    case "map": return <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>;
    case "key": return <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="7.5" cy="15.5" r="5.5"/><path d="m21 2-9.3 9.3M18 2l3 3M15 5l3 3"/></svg>;
    default: return <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/></svg>;
  }
}

export default function PartnersPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-tint-blue via-white to-tint-purple" />
        <div className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full bg-blue/5 blur-[100px]" />
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative">
          <ScrollReveal className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-navy/10 shadow-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-blue animate-pulse" />
              <span className="text-sm font-medium text-navy">Global Network -- 3 Continents -- 15+ Partners</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 leading-[1.15] mb-6">
              Strategic partnerships across three continents enabling{" "}
              <span className="text-navy">seamless international expansion.</span>
            </h2>
          </ScrollReveal>
        </div>
      </section>

      {/* Europe */}
      <section id="europe" className="py-20 lg:py-28 bg-gray-50 relative noise-bg">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-start">
            <ScrollReveal>
              <div className="sticky top-28">
                <h5 className="font-display font-semibold text-sm uppercase tracking-wider text-blue mb-3">Headquarters</h5>
                <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-6">Europe</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Based at Nomadly&apos;s headquarters in the Ile-de-France region (Perqo), we collaborate with European innovation hubs, public institutions, and industry networks that drive aerospace and tech advancement.
                </p>
                <div className="rounded-2xl overflow-hidden mb-6">
                  <img src="/images/map-europe.jpg" alt="European institutions" className="w-full h-48 object-cover rounded-2xl" />
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-navy flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Ile-de-France, France</p>
                    <p className="text-xs text-gray-500">European HQ &amp; Operations</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            <div className="grid sm:grid-cols-2 gap-4">
              {europePartners.map((partner, i) => (
                <ScrollReveal key={partner.name} delay={i * 60}>
                  <div className="group bg-white rounded-2xl p-5 border border-gray-100 hover:border-blue/20 hover:shadow-lg transition-all duration-300 h-full flex items-center gap-4">
                    <div className="w-9 h-9 rounded-lg bg-navy flex items-center justify-center flex-shrink-0 text-white">
                      <PartnerIcon type={partner.icon} />
                    </div>
                    <h4 className="font-display font-semibold text-sm text-gray-900 leading-snug">{partner.name}</h4>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Africa */}
      <section id="africa" className="py-20 lg:py-28 bg-navy text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-blue/20 blur-[120px] translate-x-1/3 -translate-y-1/3" />
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-start">
            <div>
              <ScrollReveal>
                <h5 className="font-display font-semibold text-sm uppercase tracking-wider text-blue-light mb-3">Nomadly Africa</h5>
                <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl mb-6">Africa</h2>
                <p className="text-white/70 leading-relaxed mb-6">
                  Africa is one of the world&apos;s most dynamic frontiers for space and telecommunications innovation. Nomadly Africa, based in the Democratic Republic of Congo, coordinates the company&apos;s Africa strategy and works with a wide network of national and regional partners across Central and West Africa.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <div className="rounded-2xl overflow-hidden mb-6">
                  <img src="/images/map-africa.jpg" alt="African tech infrastructure" className="w-full h-48 object-cover rounded-2xl" />
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Democratic Republic of Congo</p>
                    <p className="text-xs text-white/50">Nomadly Africa Operations</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={150}>
              <div className="space-y-4">
                {africaPartners.map((partner) => (
                  <div key={partner.name} className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-all duration-300 flex items-center gap-4">
                    <div className="w-9 h-9 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0">
                      <PartnerIcon type={partner.icon} className="text-white" />
                    </div>
                    <h4 className="font-display font-semibold text-sm leading-snug">{partner.name}</h4>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* USA */}
      <section id="usa" className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-start">
            <ScrollReveal>
              <div className="sticky top-28">
                <h5 className="font-display font-semibold text-sm uppercase tracking-wider text-blue mb-3">North America</h5>
                <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-6">USA</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Nomadly maintains a trusted presence across the United States through strong partnerships with organizations that promote transatlantic innovation and entrepreneurship. Our American partners connect our clients to one of the world&apos;s most advanced technology and business ecosystems.
                </p>
                <div className="rounded-2xl overflow-hidden mb-6">
                  <img src="/images/map-americas.jpg" alt="US Capitol" className="w-full h-48 object-cover rounded-2xl" />
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-navy flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Houston &amp; East Coast</p>
                    <p className="text-xs text-gray-500">US Partnership Network</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="space-y-4">
                {usaPartners.map((partner) => (
                  <div key={partner.name} className="group bg-gray-50 rounded-2xl p-5 border border-gray-100 hover:border-blue/20 hover:shadow-lg transition-all duration-300 flex items-center gap-4">
                    <div className="w-9 h-9 rounded-lg bg-navy flex items-center justify-center flex-shrink-0 text-white">
                      <PartnerIcon type={partner.icon} />
                    </div>
                    <h4 className="font-display font-semibold text-sm text-gray-900 leading-snug">{partner.name}</h4>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-navy via-blue to-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(4,107,210,0.3),transparent)]" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <ScrollReveal>
            <h2 className="font-display font-bold text-3xl sm:text-4xl mb-4">Become a Partner</h2>
            <p className="text-white/70 mb-8 max-w-xl mx-auto">
              Join our global network and help shape the future of international space market expansion.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="inline-flex items-center px-7 py-3.5 text-sm font-semibold text-navy bg-white rounded-full hover:shadow-[0_0_24px_rgba(255,255,255,0.3)] transition-all duration-300">Get In Touch</a>
              <a href="https://calendar.google.com/calendar/u/0?cid=bWFuYXNzZS5ib2tvbGVAZ21haWwuY29t" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-7 py-3.5 text-sm font-semibold text-white border-2 border-white/30 rounded-full hover:border-white/60 hover:bg-white/10 transition-all duration-300">Schedule Call</a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
