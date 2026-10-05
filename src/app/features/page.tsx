"use client";

import { useState } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

/* ------------------------------------------------------------------ */
/*  Static metadata is exported from a sibling layout or via generateMetadata
    in a server component. Since this file uses "use client" for the tab
    interaction, we place metadata in a parallel layout.                   */
/* ------------------------------------------------------------------ */

const regulatoryFeatures = [
  {
    title: "License Identification",
    desc: "Identify the exact licenses, permits, and authorizations required in each target country before committing resources.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
        <rect x="9" y="3" width="6" height="4" rx="1" />
        <path d="M9 14l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Authority Mapping",
    desc: "Auto-surface competent authorities, regulatory bodies, and filing desks relevant to your operation in every market.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z" />
      </svg>
    ),
  },
  {
    title: "Topic Tracking",
    desc: "Track major regulatory topics including Satellite spectrum ITU filing, Remote sensing authorization, and UAV integration frameworks.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    title: "Policy Alerts",
    desc: "Receive real-time alerts on policy changes, regulatory updates, and compliance shifts that could affect your operations.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
    ),
  },
];

const partnerFeatures = [
  {
    title: "Verified Partner Network",
    desc: "Access pre-screened, verified partners for frequency coordination, ground services, and regulatory facilitation across every major market.",
  },
  {
    title: "Auto-Generated Outreach",
    desc: "Auto-generated outreach templates and introductions tailored to each partner's profile, jurisdiction, and area of expertise.",
  },
  {
    title: "Due Diligence Integration",
    desc: "Every partner undergoes systematic due diligence, ensuring reliability and compliance before any engagement begins.",
  },
  {
    title: "Accelerated Timeline",
    desc: "Replace 6–12 months of scouting with a few clicks. Our matching engine shortens partner discovery from quarters to days.",
  },
];

const marketFeatures = [
  {
    title: "Demand Forecasting",
    desc: "AI-driven models predict where space and telecom demand is growing, helping you invest resources in the right markets at the right time.",
  },
  {
    title: "Competitive Landscape",
    desc: "Understand who is operating where, which niches remain open, and how competitors are positioning across geographies.",
  },
  {
    title: "Ecosystem Heat Maps",
    desc: "Visual mapping of institutional density, funding activity, and regulatory openness across 120+ countries.",
  },
  {
    title: "Risk Scoring",
    desc: "Composite risk scoring that blends political stability, regulatory maturity, market readiness, and infrastructure quality.",
  },
];

const pipelineSteps = [
  {
    step: "01",
    title: "Pre-filing",
    desc: "Regulatory requirements analysis, documentation preparation, and authority identification for your target market.",
    color: "from-tint-blue to-blue/10",
  },
  {
    step: "02",
    title: "Partnership MoU",
    desc: "Memorandum of Understanding with matched local partners, setting the framework for operational collaboration.",
    color: "from-blue/10 to-blue/20",
  },
  {
    step: "03",
    title: "Local Trial",
    desc: "Controlled market entry with local partner support, regulatory compliance validation, and initial operations testing.",
    color: "from-blue/20 to-navy/20",
  },
  {
    step: "04",
    title: "Full Service Grant",
    desc: "Complete authorization secured, partnerships formalized, and full-scale operations launched in-market.",
    color: "from-navy/20 to-navy/30",
  },
];

const platformFeatures = [
  {
    title: "Unified Dashboard",
    desc: "All market intelligence, regulatory data, and partner information in a single, intuitive command center.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="4" rx="1" />
        <rect x="14" y="10" width="7" height="7" rx="1" />
        <rect x="3" y="13" width="7" height="4" rx="1" />
      </svg>
    ),
  },
  {
    title: "Smart Alerts",
    desc: "Context-aware notifications that surface only the most relevant regulatory changes and market opportunities.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    title: "On-the-go Access",
    desc: "Full platform functionality on any device — review intelligence, respond to alerts, and track progress from anywhere.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <line x1="12" y1="18" x2="12" y2="18.01" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function FeaturesPage() {
  const [activeTab, setActiveTab] = useState<"partners" | "market">("partners");

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-tint-blue via-white to-tint-purple" />
        <div className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full bg-blue/5 blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-navy/5 blur-[80px]" />

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative w-full py-16 lg:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider uppercase text-navy bg-navy/5 rounded-full mb-6">
                Platform Features
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-[3.25rem] text-gray-900 leading-[1.15] mb-6">
                An Integrated Intelligence Solution{" "}
                <span className="text-navy">for Space Market Expansion</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mb-10">
                From strategic market intelligence to regulatory guidance and partner identification, Nomadly helps space and telecommunications actors navigate global markets with clarity and confidence.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <a
                  href="#features-overview"
                  className="inline-flex items-center px-7 py-3.5 text-sm font-semibold text-white bg-navy rounded-full hover:bg-blue transition-all duration-300 hover:shadow-[0_0_24px_rgba(4,107,210,0.35)]"
                >
                  Explore Features
                  <svg className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-7 py-3.5 text-sm font-semibold text-navy border-2 border-navy/20 rounded-full hover:border-navy/40 hover:bg-tint-blue transition-all duration-300"
                >
                  Schedule Demo
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Intro ── */}
      <section id="features-overview" className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="max-w-4xl mx-auto text-center">
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-6">
              Where Human Expertise{" "}
              <span className="text-navy">Meets Data Intelligence</span>
            </h2>
            <p className="text-gray-600 leading-relaxed text-base sm:text-lg max-w-3xl mx-auto">
              Nomadly transforms complex expansion challenges into guided strategic actions, backed by proprietary data science, regulatory expertise and strategic consulting.
            </p>
          </ScrollReveal>

          {/* Feature Pillars */}
          <div className="grid sm:grid-cols-3 gap-6 mt-14">
            {[
              {
                label: "Data Science",
                desc: "Proprietary algorithms analyzing 500+ qualified data sources across the global space economy.",
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                    <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" />
                  </svg>
                ),
              },
              {
                label: "Regulatory Expertise",
                desc: "Deep domain knowledge in space law, spectrum management, and international compliance frameworks.",
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                ),
              },
              {
                label: "Strategic Consulting",
                desc: "On-the-ground expertise across three continents turning intelligence into actionable market entry strategies.",
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                ),
              },
            ].map((pillar, i) => (
              <ScrollReveal key={pillar.label} delay={i * 100}>
                <div className="bg-gradient-to-b from-tint-blue to-white rounded-2xl p-7 border border-gray-100 hover:border-blue/20 hover:shadow-lg transition-all duration-300 h-full text-center">
                  <div className="w-12 h-12 rounded-xl bg-navy/10 flex items-center justify-center mx-auto mb-4 text-navy">
                    {pillar.icon}
                  </div>
                  <h3 className="font-display font-semibold text-gray-900 mb-2">
                    {pillar.label}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Regulatory Intelligence Engine ── */}
      <section className="py-20 lg:py-28 bg-gray-50 relative noise-bg">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative">
          <ScrollReveal className="text-center mb-14">
            <h5 className="font-display font-semibold text-sm uppercase tracking-wider text-blue mb-3">
              Regulatory Intelligence Engine
            </h5>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 mb-4">
              Understand feasibility and compliance{" "}
              <span className="text-navy">&mdash; step by step.</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our engine maps the regulatory landscape of every target market, giving you a clear path from initial assessment to full compliance.
            </p>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {regulatoryFeatures.map((feat, i) => (
              <ScrollReveal key={feat.title} delay={i * 100}>
                <div className="bg-white rounded-2xl p-6 h-full border border-gray-100 hover:border-blue/20 hover:shadow-lg transition-all duration-300 group">
                  <div className="w-11 h-11 rounded-xl bg-tint-blue flex items-center justify-center mb-4 text-navy group-hover:bg-navy/10 transition-colors">
                    {feat.icon}
                  </div>
                  <h3 className="font-display font-semibold text-gray-900 mb-2">
                    {feat.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="mt-10 bg-gradient-to-r from-navy to-blue rounded-2xl p-6 sm:p-8 text-center">
              <p className="text-white font-display font-semibold text-lg sm:text-xl">
                You know what to file, with whom, when, and why.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Tabbed Section: Partner Matching & Market Mapping ── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-10">
            <div className="inline-flex items-center gap-1 p-1 bg-gray-100 rounded-full mb-10">
              <button
                onClick={() => setActiveTab("partners")}
                className={`px-5 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 ${
                  activeTab === "partners"
                    ? "bg-navy text-white shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Strategic Partner Matching
              </button>
              <button
                onClick={() => setActiveTab("market")}
                className={`px-5 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 ${
                  activeTab === "market"
                    ? "bg-navy text-white shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Predictive Market Mapping
              </button>
            </div>
          </ScrollReveal>

          {/* Tab: Strategic Partner Matching */}
          {activeTab === "partners" && (
            <div>
              <ScrollReveal className="text-center mb-12">
                <h5 className="font-display font-semibold text-sm uppercase tracking-wider text-blue mb-3">
                  Strategic Partner Matching
                </h5>
                <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 mb-4">
                  Instant access to trusted local operators{" "}
                  <span className="text-navy">and decision enablers.</span>
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Our matching engine connects you with verified partners for frequency coordination, ground services, and regulatory facilitation — eliminating months of manual scouting.
                </p>
              </ScrollReveal>

              <div className="grid sm:grid-cols-2 gap-6">
                {partnerFeatures.map((feat, i) => (
                  <ScrollReveal key={feat.title} delay={i * 80}>
                    <div className="bg-gradient-to-br from-tint-blue to-white rounded-2xl p-7 border border-blue/10 hover:shadow-xl transition-all duration-500 h-full group">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-navy/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="font-display font-bold text-navy text-sm">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                        </div>
                        <div>
                          <h3 className="font-display font-semibold text-gray-900 mb-2">
                            {feat.title}
                          </h3>
                          <p className="text-sm text-gray-500 leading-relaxed">
                            {feat.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              <ScrollReveal>
                <div className="mt-10 text-center">
                  <p className="inline-block px-8 py-4 bg-navy/5 rounded-2xl font-display font-semibold text-navy text-lg">
                    Replace 6&ndash;12 months of scouting with a few clicks.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          )}

          {/* Tab: Predictive Market & Ecosystem Mapping */}
          {activeTab === "market" && (
            <div>
              <ScrollReveal className="text-center mb-12">
                <h5 className="font-display font-semibold text-sm uppercase tracking-wider text-blue mb-3">
                  Predictive Market & Ecosystem Mapping
                </h5>
                <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 mb-4">
                  See where opportunities are{" "}
                  <span className="text-navy">before they emerge.</span>
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Data-driven ecosystem analysis that reveals market dynamics, competitive positioning, and untapped demand across 120+ countries.
                </p>
              </ScrollReveal>

              <div className="grid sm:grid-cols-2 gap-6">
                {marketFeatures.map((feat, i) => (
                  <ScrollReveal key={feat.title} delay={i * 80}>
                    <div className="bg-gradient-to-br from-tint-blue to-white rounded-2xl p-7 border border-blue/10 hover:shadow-xl transition-all duration-500 h-full group">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-navy/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="font-display font-bold text-navy text-sm">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                        </div>
                        <div>
                          <h3 className="font-display font-semibold text-gray-900 mb-2">
                            {feat.title}
                          </h3>
                          <p className="text-sm text-gray-500 leading-relaxed">
                            {feat.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── Tailored for Every Mission ── */}
      <section className="py-20 lg:py-28 bg-navy text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-blue/20 blur-[120px] translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-blue/10 blur-[100px] -translate-x-1/4 translate-y-1/4" />
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative">
          <ScrollReveal className="text-center mb-14">
            <h2 className="font-display font-bold text-3xl sm:text-4xl mb-4">
              Tailored for Every Mission
            </h2>
            <p className="text-white/70 max-w-3xl mx-auto">
              Whether you are launching a constellation, deploying ground infrastructure, or exploring new telecom corridors — Nomadly adapts to your operational context.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Sustainability Considerations",
                desc: "Every recommendation factors in environmental impact, orbital sustainability, and alignment with international sustainability frameworks.",
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                    <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" />
                  </svg>
                ),
              },
              {
                title: "Risk Mitigation",
                desc: "Proactive identification of political, regulatory, and operational risks with scenario-based mitigation strategies for every market.",
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                ),
              },
              {
                title: "Responsible Space Operations",
                desc: "Guidance aligned with space debris mitigation guidelines, responsible behavior norms, and emerging space traffic management standards.",
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z" />
                  </svg>
                ),
              },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 120}>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 h-full">
                  <div className="w-11 h-11 rounded-xl bg-blue/20 flex items-center justify-center mb-5 text-blue-light">
                    {item.icon}
                  </div>
                  <h3 className="font-display font-bold text-xl mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Intelligence Platform Preview ── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-6">
            <h5 className="font-display font-semibold text-sm uppercase tracking-wider text-blue mb-3">
              Intelligence Platform Preview
            </h5>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 mb-4">
              Proprietary Space Data Graph
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-base sm:text-lg">
              The first search engine built specifically for the space economy.
            </p>
          </ScrollReveal>

          {/* Stats */}
          <ScrollReveal>
            <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto mt-10 mb-14">
              {[
                { value: "500+", label: "Qualified Sources" },
                { value: "24/7", label: "Monitoring" },
                { value: "99.9%", label: "Uptime" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-display font-bold text-3xl sm:text-4xl text-navy">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-500 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Platform Mock */}
          <ScrollReveal>
            <div className="bg-gradient-to-br from-gray-900 to-navy rounded-3xl p-1 shadow-2xl">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-[1.35rem] overflow-hidden">
                {/* Browser bar */}
                <div className="flex items-center gap-2 px-5 py-3.5 border-b border-white/5">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="bg-white/5 rounded-lg px-4 py-1.5 text-xs text-white/40 font-mono">
                      app.nomadly.fr/dashboard
                    </div>
                  </div>
                </div>
                {/* Dashboard Content */}
                <div className="p-6 sm:p-8 lg:p-10">
                  <div className="grid lg:grid-cols-3 gap-6">
                    {/* Sidebar */}
                    <div className="space-y-4">
                      <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                        <div className="text-xs text-white/40 uppercase tracking-wider mb-3">Navigation</div>
                        {["Dashboard", "Regulatory Engine", "Partner Matching", "Market Maps", "Alerts", "Reports"].map(
                          (item, i) => (
                            <div
                              key={item}
                              className={`px-3 py-2 rounded-lg text-sm mb-1 ${
                                i === 0
                                  ? "bg-blue/20 text-blue-light font-medium"
                                  : "text-white/40 hover:text-white/60"
                              }`}
                            >
                              {item}
                            </div>
                          )
                        )}
                      </div>
                    </div>
                    {/* Main area */}
                    <div className="lg:col-span-2 space-y-4">
                      <div className="grid sm:grid-cols-3 gap-3">
                        {[
                          { label: "Markets Tracked", val: "127" },
                          { label: "Active Alerts", val: "23" },
                          { label: "Partners Matched", val: "84" },
                        ].map((d) => (
                          <div key={d.label} className="bg-white/5 border border-white/5 rounded-xl p-4">
                            <div className="text-xs text-white/40 mb-1">{d.label}</div>
                            <div className="font-display font-bold text-2xl text-white">{d.val}</div>
                          </div>
                        ))}
                      </div>
                      <div className="bg-white/5 border border-white/5 rounded-xl p-5">
                        <div className="text-xs text-white/40 uppercase tracking-wider mb-4">
                          Regulatory Activity (Last 30 Days)
                        </div>
                        <div className="flex items-end gap-1.5 h-24">
                          {[35, 52, 40, 68, 45, 72, 55, 80, 60, 90, 65, 78, 50, 85, 70, 88, 62, 75, 58, 92].map(
                            (h, i) => (
                              <div
                                key={i}
                                className="flex-1 rounded-t bg-gradient-to-t from-blue/40 to-blue/80 transition-all hover:from-blue/60 hover:to-blue"
                                style={{ height: `${h}%` }}
                              />
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Platform Feature Cards */}
          <div className="grid sm:grid-cols-3 gap-6 mt-12">
            {platformFeatures.map((feat, i) => (
              <ScrollReveal key={feat.title} delay={i * 100}>
                <div className="text-center p-7 rounded-2xl bg-gradient-to-b from-tint-blue to-white border border-gray-100 hover:shadow-lg hover:border-blue/20 transition-all duration-300 h-full">
                  <div className="w-13 h-13 rounded-2xl bg-navy mx-auto mb-5 flex items-center justify-center text-white" style={{ width: 52, height: 52 }}>
                    {feat.icon}
                  </div>
                  <h3 className="font-display font-semibold text-gray-900 mb-2">
                    {feat.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Export Path Simulation ── */}
      <section className="py-20 lg:py-28 bg-gray-50 relative noise-bg">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative">
          <ScrollReveal className="text-center mb-14">
            <h5 className="font-display font-semibold text-sm uppercase tracking-wider text-blue mb-3">
              Export Path Simulation
            </h5>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 mb-4">
              Your Market Entry Pipeline
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              A clear, structured path from initial regulatory assessment through to full-scale operations in your target market.
            </p>
          </ScrollReveal>

          {/* Pipeline Steps */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Connector line (desktop) */}
            <div className="hidden lg:block absolute top-6 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-blue/20 via-blue/40 to-navy/40" />

            {pipelineSteps.map((step, i) => (
              <ScrollReveal key={step.title} delay={i * 120}>
                <div className="relative">
                  {/* Step indicator */}
                  <div className="w-12 h-12 rounded-full bg-white border-2 border-navy/20 flex items-center justify-center mx-auto mb-6 relative z-10">
                    <span className="font-display font-bold text-navy text-sm">
                      {step.step}
                    </span>
                  </div>
                  <div className={`bg-gradient-to-br ${step.color} rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300 h-full`}>
                    <h3 className="font-display font-bold text-gray-900 text-lg mb-2 text-center">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed text-center">
                      {step.desc}
                    </p>
                  </div>
                  {/* Arrow connector (mobile) */}
                  {i < pipelineSteps.length - 1 && (
                    <div className="lg:hidden flex justify-center py-3">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-navy/30">
                        <path d="M12 5v14M19 12l-7 7-7-7" />
                      </svg>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-navy via-blue to-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(4,107,210,0.3),transparent)]" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <ScrollReveal>
            <h2 className="font-display font-bold text-3xl sm:text-4xl mb-4">
              Ready to Navigate Global Space Markets?
            </h2>
            <p className="text-white/70 mb-8 max-w-xl mx-auto">
              Discover how Nomadly&apos;s integrated intelligence platform can accelerate your international expansion.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center px-7 py-3.5 text-sm font-semibold text-navy bg-white rounded-full hover:shadow-[0_0_24px_rgba(255,255,255,0.3)] transition-all duration-300"
              >
                Schedule a Demo
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center px-7 py-3.5 text-sm font-semibold text-white border-2 border-white/30 rounded-full hover:border-white/60 hover:bg-white/10 transition-all duration-300"
              >
                Learn About Us
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
