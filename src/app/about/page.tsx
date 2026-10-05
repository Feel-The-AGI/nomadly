import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Pioneering the future of space innovation. Breaking barriers and creating opportunities in global space markets since 2024.",
};

const stats = [
  { value: "15+", label: "Institutional & ecosystem partners" },
  { value: "500+", label: "Public stakeholders mapped worldwide" },
  { value: "3", label: "Multiregion field presence" },
];

const timeline = [
  {
    year: "2024",
    title: "The Vision",
    description:
      "During extensive research into global aerospace trade, Nomadly’s founder identified a critical gap in market access for emerging space actors and began building a global expert network across Europe, Africa, and the Americas.",
  },
  {
    year: "2024",
    title: "Foundation",
    description:
      "Incubated within the Île-de-France startup ecosystem, Nomadly conducted in-depth market studies and established early partnerships with regulatory bodies, space organizations, and scientific institutions.",
  },
  {
    year: "2024–2025",
    title: "Official Launch",
    description:
      "Nomadly officially launched in November 2024 and presented its vision at leading innovation and space events, including Viva Technology, Assises du New Space, and the Paris Air Show.",
  },
  {
    year: "2025",
    title: "Global Expansion",
    description:
      "The company expanded its international footprint with an office in the Democratic Republic of Congo, strengthening on-the-ground support and cross-continental collaboration.",
  },
  {
    year: "2026",
    title: "Leading Innovation",
    description:
      "Nomadly is developing a proprietary web application combining AI and human intelligence for regulatory monitoring and partner matching, positioning the company as a key player in space market intelligence.",
  },
];

const coreValues = [
  {
    title: "Partnership",
    description:
      "We believe the most impactful achievements come from collaboration. Nomadly fosters genuine partnerships between companies, institutions, and experts across continents.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" />
      </svg>
    ),
  },
  {
    title: "Innovation",
    description:
      "Innovation is at the core of everything we do. We combine cutting-edge AI with human expertise to deliver market intelligence and regulatory insights that set our clients apart.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    ),
  },
  {
    title: "Excellence",
    description:
      "We hold ourselves to the highest standards in every engagement. Quality, rigor, and reliability define our approach to strategic consulting and market intelligence.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
  {
    title: "Inclusivity",
    description:
      "Space innovation should be accessible to all. We champion diversity and work to ensure that companies and institutions of all sizes and backgrounds can participate in the global space economy.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    title: "Sustainability",
    description:
      "We align our mission with the UN Sustainable Development Goals, ensuring that our work contributes to long-term economic growth, environmental responsibility, and equitable development.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <path d="M7 12.5s1.5-2 5-2 5 2 5 2" />
        <path d="M12 2v4M12 18v4" />
      </svg>
    ),
  },
];

const recognitionItems = [
  "Laureate of Initiative Île-de-France — recognized for innovation and entrepreneurial impact.",
  "Member of the French Tech network — France’s flagship startup ecosystem.",
  "PEPITE PSL designation — student-entrepreneur status from a leading French research university network.",
  "Participant at Viva Technology 2025 — one of the world’s leading tech and innovation summits.",
  "Presenter at the Assises du New Space — France’s key conference on the emerging space economy.",
  "Exhibitor at the Paris Air Show 2025 — the world’s largest aerospace exhibition.",
];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero Banner ── */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy/95 to-blue" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_20%,rgba(4,107,210,0.35),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_80%,rgba(4,107,210,0.2),transparent_60%)]" />
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-20 right-[10%] w-72 h-72 rounded-full border border-white/5" />
          <div className="absolute top-32 right-[15%] w-48 h-48 rounded-full border border-white/5" />
          <div className="absolute bottom-10 left-[5%] w-96 h-96 rounded-full border border-white/[0.03]" />
        </div>

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <ScrollReveal>
              <p className="font-display text-sm font-semibold uppercase tracking-widest text-blue-light mb-6">
                About Nomadly
              </p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.1] mb-6">
                Pioneering the future of space innovation.
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-lg sm:text-xl text-white/70 leading-relaxed max-w-2xl">
                Breaking barriers and creating opportunities in global space market since 2024.
              </p>
            </ScrollReveal>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* ── Our Story ── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <ScrollReveal>
                <h5 className="font-display text-sm font-semibold uppercase tracking-widest text-blue mb-3">
                  Empowering Global Space Innovation
                </h5>
                <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 mb-3">
                  Our Story
                </h2>
                <p className="text-navy font-medium mb-8">
                  Connecting ideas, markets, and people beyond borders.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Nomadly was born from a simple but bold idea: space innovation should not be limited by borders, resources, or networks. From Europe to Africa and the Americas, we empower startups, SMEs, and research institutions to navigate complex international markets with confidence.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p className="text-gray-600 leading-relaxed">
                  Our work is driven by a vision where every bright mind, regardless of background, can contribute to humanity&#39;s greatest frontier, and where international collaboration transforms challenges into opportunities for growth, inclusion, and sustainable development.
                </p>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={150}>
              <div className="grid grid-cols-1 gap-5">
                {stats.map((stat, i) => (
                  <div
                    key={i}
                    className="bg-gradient-to-br from-tint-blue to-white rounded-2xl p-6 border border-blue/10 hover:shadow-lg hover:border-blue/20 transition-all duration-300"
                  >
                    <div className="flex items-center gap-5">
                      <div className="font-display font-bold text-4xl text-navy">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-600 leading-snug">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="py-20 lg:py-28 bg-gray-50 relative noise-bg">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative">
          <ScrollReveal className="text-center mb-14">
            <h5 className="font-display text-sm font-semibold uppercase tracking-widest text-blue mb-3">
              What Drives Us
            </h5>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900">
              Mission &amp; Vision
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal>
              <div className="bg-white rounded-3xl p-8 lg:p-10 border border-gray-100 hover:shadow-xl hover:border-blue/20 transition-all duration-500 h-full relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-navy to-blue" />
                <div className="w-14 h-14 rounded-2xl bg-navy/10 flex items-center justify-center mb-6 group-hover:bg-navy/15 transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111D8D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 16v-4M12 8h.01" />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-xl text-gray-900 mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  To democratize access to global space markets by providing strategic intelligence, expert networking, and regulatory guidance, leveling the playing field for companies and institutions worldwide.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className="bg-gradient-to-br from-navy to-blue rounded-3xl p-8 lg:p-10 text-white hover:shadow-xl transition-all duration-500 h-full relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/3" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6 group-hover:bg-white/15 transition-colors">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </div>
                  <h3 className="font-display font-bold text-xl mb-4">Our Vision</h3>
                  <p className="text-white/80 leading-relaxed">
                    We envision a world where space innovation flows freely across borders, where every bright mind, regardless of background or resources, has the opportunity to compete globally, and where collaboration, knowledge, and technology lift up communities everywhere.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Journey / Timeline ── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-6">
            <h5 className="font-display text-sm font-semibold uppercase tracking-widest text-blue mb-3">
              Roadmap
            </h5>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Since its founding in 2024, Nomadly has:
            </p>
          </ScrollReveal>

          <div className="relative mt-16">
            {/* Vertical connector line */}
            <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-navy/20 via-blue/20 to-transparent hidden sm:block" />

            <div className="space-y-12 lg:space-y-16">
              {timeline.map((item, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <ScrollReveal key={i} delay={i * 100}>
                    <div
                      className={`relative flex flex-col sm:flex-row items-start gap-6 lg:gap-12 ${
                        isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                      }`}
                    >
                      {/* Year dot */}
                      <div className="hidden sm:flex absolute left-6 lg:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-navy ring-4 ring-white z-10" />

                      {/* Content card */}
                      <div
                        className={`sm:ml-16 lg:ml-0 lg:w-[calc(50%-3rem)] ${
                          isLeft ? "lg:text-right lg:pr-0" : "lg:text-left lg:pl-0"
                        }`}
                      >
                        <div className="bg-gradient-to-br from-tint-blue to-white rounded-2xl p-6 lg:p-8 border border-blue/10 hover:shadow-lg hover:border-blue/20 transition-all duration-300">
                          <div
                            className={`flex items-center gap-3 mb-3 ${
                              isLeft ? "lg:justify-end" : "lg:justify-start"
                            }`}
                          >
                            <span className="font-display font-bold text-navy text-sm">
                              {item.year}
                            </span>
                            <span className="w-8 h-px bg-navy/20" />
                            <span className="font-display font-semibold text-gray-900">
                              {item.title}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>

                      {/* Spacer for the other side */}
                      <div className="hidden lg:block lg:w-[calc(50%-3rem)]" />
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Core Values ── */}
      <section className="py-20 lg:py-28 bg-gray-50 relative noise-bg">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative">
          <ScrollReveal className="text-center mb-14">
            <h5 className="font-display text-sm font-semibold uppercase tracking-widest text-blue mb-3">
              What We Stand For
            </h5>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900">
              Core Values
            </h2>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.slice(0, 3).map((value, i) => (
              <ScrollReveal key={value.title} delay={i * 80}>
                <div className="bg-white rounded-2xl p-7 h-full border border-gray-100 hover:border-blue/20 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-tint-blue flex items-center justify-center mb-5 text-navy group-hover:bg-navy/10 transition-colors">
                    {value.icon}
                  </div>
                  <h3 className="font-display font-semibold text-gray-900 text-lg mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto mt-6">
            {coreValues.slice(3).map((value, i) => (
              <ScrollReveal key={value.title} delay={(i + 3) * 80}>
                <div className="bg-white rounded-2xl p-7 h-full border border-gray-100 hover:border-blue/20 hover:shadow-lg transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-tint-blue flex items-center justify-center mb-5 text-navy group-hover:bg-navy/10 transition-colors">
                    {value.icon}
                  </div>
                  <h3 className="font-display font-semibold text-gray-900 text-lg mb-2">{value.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{value.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Founder ── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-14">
            <h5 className="font-display text-sm font-semibold uppercase tracking-widest text-blue mb-3">
              Leadership
            </h5>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900">
              Meet Our Founder
            </h2>
          </ScrollReveal>

          <ScrollReveal>
            <div className="grid lg:grid-cols-[1fr_1.5fr] gap-10 items-center bg-gradient-to-br from-tint-blue to-white rounded-3xl p-8 lg:p-12 border border-blue/10 shadow-sm">
              <div className="flex justify-center">
                <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-tint-blue to-tint-purple">
                  <Image
                    src="/images/founder-main.png"
                    alt="Manassé Bokole"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div>
                <h3 className="font-display font-bold text-2xl text-gray-900 mb-1">
                  Manassé Bokole
                </h3>
                <p className="text-blue text-sm font-medium mb-5">
                  Founder &amp; CEO of Nomadly | PhD Candidate at HEIP School
                </p>
                <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
                  <p>
                    Manassé Bokole is the founder and CEO of Nomadly, an innovative consulting firm in strategic intelligence dedicated to democratizing access to global space and telecommunications markets. A PhD candidate in Business Diplomacy and International Trade at the HEIP School (Hautes Études Internationales et Politiques), he combines academic rigor with entrepreneurial ambition.
                  </p>
                  <p>
                    With a background spanning international relations, business development, and aerospace market research, Manassé has built a global network of experts across Europe, Africa, and the Americas. His work focuses on empowering startups, SMEs, and research institutions to navigate complex regulatory landscapes and unlock international opportunities in the space sector.
                  </p>
                  <blockquote className="border-l-4 border-navy pl-5 italic text-gray-700 my-6">
                    &ldquo;Ambition Beyond Borders is more than a slogan. It is a mindset and a way of acting.&rdquo;
                  </blockquote>
                  <p>
                    Under his leadership, Nomadly has been recognized as a laureate of Initiative Île-de-France, a member of the French Tech network, and has presented at major events including Viva Technology, the Paris Air Show, and the Assises du New Space.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Recognition ── */}
      <section className="py-20 lg:py-28 bg-navy text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-blue/20 blur-[120px] translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-blue/10 blur-[100px] -translate-x-1/3 translate-y-1/3" />

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative">
          <ScrollReveal className="text-center mb-14">
            <h5 className="font-display text-sm font-semibold uppercase tracking-widest text-blue-light mb-3">
              Achievements
            </h5>
            <h2 className="font-display font-bold text-3xl sm:text-4xl mb-4">
              Recognition
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Nomadly&#39;s work and vision have been recognized by leading innovation and entrepreneurship institutions in France and beyond.
            </p>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {recognitionItems.map((item, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 h-full flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-lg bg-blue/20 flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-light">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-sm text-white/80 leading-relaxed">{item}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-tint-blue via-white to-tint-purple relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-blue/5 blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-navy/5 blur-[80px]" />

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <ScrollReveal>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-4">
              Ready to Expand{" "}
              <span className="text-navy">Your Venture?</span>
            </h2>
            <p className="text-gray-600 mb-10 max-w-xl mx-auto">
              Let&#39;s explore how Nomadly can help you navigate international space markets and unlock new opportunities for growth.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 text-sm font-semibold text-white bg-navy rounded-full hover:bg-blue transition-all duration-300 hover:shadow-[0_0_24px_rgba(4,107,210,0.35)]"
              >
                Schedule Consultation
                <svg className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/features"
                className="inline-flex items-center px-8 py-4 text-sm font-semibold text-navy border-2 border-navy/20 rounded-full hover:border-navy/40 hover:bg-tint-blue transition-all duration-300"
              >
                Explore Our Services
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
