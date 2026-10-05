import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "FAQs",
  description: "Frequently asked questions about Nomadly's strategic intelligence services, space market consulting, regulatory compliance, and international expansion support.",
};

const faqItems = [
  {
    question: "What makes Nomadly different from traditional consulting firms?",
    answer: "Nomadly uniquely combines AI-driven market analytics with on-the-ground expertise across three continents, specifically focused on the space and telecommunications sector. Our proprietary platform automates regulatory monitoring and partner matching, delivering insights that would traditionally require months of manual research.",
  },
  {
    question: "How quickly can you help us enter a new international market?",
    answer: "Our platform can provide initial market assessments and regulatory insights within days, not months. With our pre-screened partner network across Europe, Africa, and the Americas, we can accelerate market entry timelines by 6-12 months compared to traditional approaches.",
  },
  {
    question: "Do you work with startups or only established companies?",
    answer: "We work with companies at all stages — from early-stage startups with innovative space technology to established SMEs looking to expand into new international markets. Our services are designed to be accessible and scalable.",
  },
  {
    question: "What types of aerospace technologies do you specialize in?",
    answer: "We specialize in small business satellite technologies, telecommunications infrastructure, remote sensing, satellite communications, and related dual-use technologies. Our expertise covers the full spectrum of space and telecom applications.",
  },
  {
    question: "How do you ensure compliance with export control regulations?",
    answer: "Our AI-powered regulatory monitoring system tracks ITAR/EAR compliance requirements, dual-use technology regulations, and frequency allocation rules across 120+ countries in real time. We provide automated alerts and custom risk assessments tailored to your specific technology and target markets.",
  },
];

export default function FAQPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-b from-tint-blue to-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-14">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              Get answers to common questions about our services and the aerospace export process.
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <FAQ items={faqItems} />
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gradient-to-br from-navy via-blue to-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(4,107,210,0.3),transparent)]" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <ScrollReveal>
            <h2 className="font-display font-bold text-3xl sm:text-4xl mb-4">
              Ready to Expand Your Venture?
            </h2>
            <p className="text-white/70 mb-8">
              Contact our team for a strategic consultation and let&apos;s navigate your international journey together.
            </p>
            <a
              href="https://calendar.google.com/calendar/u/0?cid=bWFuYXNzZS5ib2tvbGVAZ21haWwuY29t"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-7 py-3.5 text-sm font-semibold text-navy bg-white rounded-full hover:shadow-[0_0_24px_rgba(255,255,255,0.3)] transition-all duration-300"
            >
              Schedule Free Consultation
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
