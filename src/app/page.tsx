import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import FAQ from "@/components/FAQ";
import { JsonLd } from "@/components/JsonLd";

const homeFAQs = [
  {
    question: "What types of companies or institutions can benefit from Nomadly's services?",
    answer: "Nomadly supports SMEs in the space and telecommunications sectors as well as scientific institutions seeking international collaboration. Our services are designed to empower startups, high tech innovators, and research organizations to navigate global markets and establish partnerships abroad.",
  },
  {
    question: "How does Nomadly help companies navigate complex space regulations?",
    answer: "We provide AI-powered regulatory monitoring across 120+ countries, tracking ITAR/EAR compliance, dual-use technology regulations, and frequency allocation requirements in real time.",
  },
  {
    question: "Do you work with startups or only established companies?",
    answer: "We work with companies at all stages, from early-stage startups to established SMEs looking to expand internationally in the space and telecommunications sectors.",
  },
  {
    question: "Which regions and markets does Nomadly cover?",
    answer: "Nomadly operates across three continents — Europe, Africa, and the Americas — with headquarters in Paris and offices in the Democratic Republic of Congo.",
  },
  {
    question: "How does Nomadly support sustainable and inclusive growth?",
    answer: "We align our vision with the United Nations Sustainable Development Goals, focusing on education, industry innovation, decent work, and global partnerships.",
  },
  {
    question: "What makes Nomadly different from other strategic intelligence or consulting firms?",
    answer: "Nomadly uniquely combines AI-driven market analytics with on-the-ground expertise across three continents, specifically focused on the space and telecommunications sector.",
  },
];

const sdgItems = [
  { num: "4", title: "Education (SDG 4)", desc: "Supporting scientific and R&D cooperation and talent development through partnerships with universities, research centers, and innovation ecosystems." },
  { num: "9", title: "Industry, Innovation & Infrastructure (SDG 9)", desc: "Accelerating innovation and access to satellite and telecommunications infrastructure beyond traditional space-faring nations." },
  { num: "8", title: "Decent Work & Economic Growth (SDG 8)", desc: "Enabling SMEs and startups to scale internationally, create high-skilled jobs, and access global markets." },
  { num: "17", title: "Partnerships for the Goals (SDG 17)", desc: "Building cross-border partnerships between companies, institutions, and governments to foster sustainable space development." },
];

const educationalSlides = [
  "What Might Space look like in 2035? A forward-looking analysis of technology, exploration, commercial markets, and international collaboration shaping the future of space.",
  '"To the Moon: Lunar exploration programs and commercial opportunities."',
  '"Let\'s Talk About Money: The economics of space: funding models, investment trends, and opportunities for startups and SMEs."',
  '"Why Global Trade is Key: How international collaboration fuels the space economy."',
  '"Space Law Decoded: Beginner-friendly guide to treaties, regulations, and compliance"',
  '"Governance in Space: How policies and institutions shape international space activities."',
  '"Stuck in Traffic: Understanding orbital congestion and satellite traffic management."',
  '"Be green: Sustainability in orbit and Earth: How the space sector is addressing environmental impact and long-term orbital sustainability."',
];

const advisoryBoard = [
  { name: "Philippe Boissat", role: "CEO 3I3s LLC, French aeronautics medals (US Florida)", img: "/images/advisor-philippe.png" },
  { name: "Lionnel Baraban", role: "President French Tech Houston et CEO Famoco (US, Texas)", img: "/images/advisor-lionnel.png" },
  { name: "Christelle Ebalantshim", role: "Coordonator National Young for Action and Developpement - JADE (Matadi, RDC)", img: "/images/advisor-christelle.png" },
  { name: "Marc Vales", role: "Vice President Dassault (France, Paris)", img: "/images/advisor-marc.png" },
  { name: "Jason Padona", role: "Founder Geostrat, mentor data in humanitarian (RDC, Goma)", img: "/images/advisor-jason.png" },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: homeFAQs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function Home() {
  return (
    <>
      <JsonLd data={faqSchema} />
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-tint-blue via-white to-tint-purple" />
        <div className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full bg-blue/5 blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-navy/5 blur-[80px]" />

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative w-full py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-gray-900 leading-[1.1] mb-6">
                Revolutionizing international trade{" "}
                <span className="text-navy">in space technologies</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-4 max-w-xl">
                An innovative strategic intelligence consulting firm that democratizes access to global space and telecommunications markets through a network of experts and data-driven analysis.
              </p>
              <p className="text-sm text-gray-500 leading-relaxed mb-8 max-w-xl">
                Nomadly combines export strategy, advanced data exploration, and a network of experts to help companies in the space and telecommunications sector navigate complex international markets with confidence.
              </p>
              <div className="flex flex-wrap gap-3 mb-12">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-7 py-3.5 text-sm font-semibold text-white bg-navy rounded-full hover:bg-blue transition-all duration-300 hover:shadow-[0_0_24px_rgba(4,107,210,0.35)]"
                >
                  Schedule Consultation
                  <svg className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
                <Link
                  href="/features"
                  className="inline-flex items-center px-7 py-3.5 text-sm font-semibold text-navy border-2 border-navy/20 rounded-full hover:border-navy/40 hover:bg-tint-blue transition-all duration-300"
                >
                  See How We Work
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-6">
                {[
                  { value: "15+", label: "institutional & ecosystem partners" },
                  { value: "500+", label: "public stakeholders mapped worldwide" },
                  { value: "3", label: "Multi-region field presence (Europe, Africa, Americas)" },
                ].map((stat) => (
                  <div key={stat.value} className="text-center sm:text-left">
                    <div className="font-display font-bold text-2xl sm:text-3xl text-navy">{stat.value}</div>
                    <div className="text-xs text-gray-500 mt-1 leading-snug">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="absolute -inset-8 bg-gradient-to-br from-blue/10 to-navy/10 rounded-3xl -rotate-3" />
              <Image
                src="/images/hero-illustration.png"
                alt="Space technology illustration"
                width={702}
                height={867}
                priority
                className="relative rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Trusted By ── */}
      <section className="py-12 bg-white border-y border-gray-100">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h3 className="font-display font-semibold text-sm uppercase tracking-wider text-gray-400 text-center mb-6">
              Trusted By Industry Leaders
            </h3>
            <p className="text-center text-sm text-gray-500 max-w-3xl mx-auto mb-8">
              Region Ile-de-France, Chamber of Commerce and Industry of Yvelines, Initiative France, PSL Pepite, French Network of Student Entrepreneurs, 3I3 Signature LLC, French Tech Houston, 3I3s-Europa, Federation of Enterprises of Congo (FEC), Geostrat, 3I3s-Africa etc.
            </p>
          </ScrollReveal>
          <div className="overflow-hidden">
            <div className="flex animate-marquee gap-16 items-center">
              {[
                { src: "/images/partner-idf.webp", alt: "Region Ile-de-France" },
                { src: "/images/partner-french-tech.png", alt: "French Tech" },
                { src: "/images/partner-incubator.jpg", alt: "Incubator" },
                { src: "/images/partner-3i3s.jpg", alt: "3I3s" },
                { src: "/images/partner-icc.jpg", alt: "ICC" },
                { src: "/images/partner-idf.webp", alt: "Region Ile-de-France" },
                { src: "/images/partner-french-tech.png", alt: "French Tech" },
                { src: "/images/partner-incubator.jpg", alt: "Incubator" },
                { src: "/images/partner-3i3s.jpg", alt: "3I3s" },
                { src: "/images/partner-icc.jpg", alt: "ICC" },
              ].map((logo, i) => (
                <Image
                  key={i}
                  src={logo.src}
                  alt={logo.alt}
                  width={180}
                  height={90}
                  className="h-16 w-auto hover:opacity-80 transition-opacity flex-shrink-0"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission ── */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="max-w-4xl mx-auto text-center">
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-8">
              Our Mission:{" "}
              <span className="text-navy">Democratizing global space markets</span>
            </h2>
            <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
              The space industry is one of the most complex and regulated international business environments. Traditional approaches to entering this market are often prohibitively costly and time-consuming for emerging companies. Nomadly fills this gap with the aim of supporting promising companies in the small business satellite sector by providing them with strategic information, regulatory advice, and a network of local partners that only corporate companies typically have access to.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Sustainable Development ── */}
      <section className="py-20 lg:py-28 bg-gray-50 relative noise-bg">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative">
          <ScrollReveal className="text-center mb-14">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 mb-4">
              Committed to Sustainable Development
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We are dedicating in the opening up and democratizing global space markets to small businesses satellite through scientific, financial, and commercial cooperation. With our international outlook, we align our vision with the United Nations Sustainable Development Goals.
            </p>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sdgItems.map((item, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="bg-white rounded-2xl p-6 h-full border border-gray-100 hover:border-blue/20 hover:shadow-lg transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-tint-blue flex items-center justify-center mb-4 group-hover:bg-navy/10 transition-colors">
                    <span className="font-display font-bold text-navy text-lg">{item.num}</span>
                  </div>
                  <h3 className="font-display font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-14">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 mb-4">
              Service And Solution
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-6">
              Our integrated approach combines strong expertise in strategic intelligence with cutting-edge technology. At Nomadly, we tackle every challenge by blending human intelligence and artificial intelligence through a unified platform that automates regulatory monitoring and partner matching.
            </p>
            <a
              href="https://calendar.google.com/calendar/u/0?cid=bWFuYXNzZS5ib2tvbGVAZ21haWwuY29t"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-semibold text-blue hover:text-navy transition-colors"
            >
              Read More
              <svg className="ml-1 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </ScrollReveal>
          <div className="grid lg:grid-cols-2 gap-8">
            {[
              {
                title: "Regulatory Monitoring",
                subtitle: "Real-time Compliance Intelligence",
                desc: "Navigate complex international space regulations with our AI-powered monitoring system, tracking regulatory changes in over 120 countries in real time.",
                items: ["ITAR/EAR Compliance Tracking", "Dual-Use Technology Monitoring", "Automated Alert System", "Custom Risk Assessment"],
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>,
              },
              {
                title: "Partner Matching",
                subtitle: "Strategic Network Intelligence",
                desc: "Connect with pre-screened government partners, distributors, retailers, and stakeholders using our proprietary matching algorithm and extensive global network.",
                items: ["Verified Partner Database", "Cultural Intelligence Matching", "Due Diligence Reports", "Introduction Facilitation"],
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
              },
            ].map((service) => (
              <ScrollReveal key={service.title}>
                <div className="bg-gradient-to-br from-tint-blue to-white rounded-3xl p-8 lg:p-10 border border-blue/10 hover:shadow-xl transition-all duration-500 h-full">
                  <div className="w-12 h-12 rounded-2xl bg-navy flex items-center justify-center mb-5">
                    {service.icon}
                  </div>
                  <h3 className="font-display font-bold text-xl text-gray-900 mb-1">{service.title}</h3>
                  <p className="text-sm text-blue font-medium mb-4">{service.subtitle}</p>
                  <p className="text-sm text-gray-600 leading-relaxed mb-6">{service.desc}</p>
                  <ul className="space-y-2.5">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm text-gray-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Partners & Global Network ── */}
      <section className="py-20 lg:py-28 bg-navy text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-blue/20 blur-[120px] translate-x-1/3 -translate-y-1/3" />
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative">
          <ScrollReveal className="text-center mb-14">
            <h2 className="font-display font-bold text-3xl sm:text-4xl mb-4">
              Partners &amp; Global Network
            </h2>
            <p className="text-white/70 max-w-3xl mx-auto">
              <strong className="text-white">International expansion is built on trusted local connections.</strong>{" "}
              Nomadly operates through a global network of institutional, public, and private partners to help space and telecommunications companies access new markets and form high-value collaborations.
            </p>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { region: "Europe", desc: "Strong partnerships with French and European innovation ecosystems, public institutions, and space stakeholders.", img: "/images/map-europe.jpg" },
              { region: "Africa", desc: "On-the-ground presence and regional expertise supporting emerging space and telecom initiatives, with a focus on sustainable market development.", img: "/images/map-africa.jpg" },
              { region: "Americas", desc: "Access to key space and technology ecosystems in the United States, connecting clients with government programs, startups, and strategic partners.", img: "/images/map-americas.jpg" },
            ].map((item, i) => (
              <ScrollReveal key={item.region} delay={i * 120}>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 h-full group">
                  <div className="overflow-hidden">
                    <img src={item.img} alt={`${item.region} map`} className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  </div>
                  <div className="p-7">
                    <h3 className="font-display font-bold text-xl mb-3">{item.region}</h3>
                    <p className="text-sm text-white/60 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-14">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Trusted by 15+ companies and organizations worldwide for our strategic market expansion service and cutting-edge web application.
            </p>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Expertise And Innovation", desc: "We combine AI-driven market analytics with regulatory expertise to help space companies identify high-growth regions and streamline compliance.", img: "/images/why-expertise.png" },
              { title: "Field Presence", desc: "With a headquarter in Paris Ile-de-France region and office in Kinshasa, our local experts ensure timely market insights and operational support worldwide.", img: "/images/why-field.png" },
              { title: "Recognition And Networks", desc: "Nomadly's work and vision have been recognised by leading innovation and entrepreneurship institutions in France and beyond.", img: "/images/why-recognition.png" },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 100}>
                <div className="rounded-3xl bg-white border border-gray-100 hover:shadow-lg hover:border-blue/20 transition-all duration-300 h-full overflow-hidden group">
                  <div className="overflow-hidden">
                    <img src={item.img} alt={item.title} className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  </div>
                  <div className="p-7 text-center">
                    <h3 className="font-display font-bold text-lg text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Blog Preview ── */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-14">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 mb-4">Latest Insights &amp; Industry Analysis</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Stay informed with our expert analysis of aerospace trade trends, regulatory updates, and market opportunities.</p>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Global Watch: Space Sustainability, Risks, and Opportunities", date: "November 5, 2025", excerpt: "A comprehensive overview of regulatory, business, and technical developments shaping the global space industry. From US deregulation under the Trump administration, to...", img: "/images/blog-article-1.png" },
              { title: "Interactive Map of Key Public Actors in Global Space Innovation", date: "November 5, 2025", excerpt: "Explore a dynamic cartography of +500 key public stakeholders driving space innovation worldwide, including governments, universities, and regional organizations.", img: "/images/blog-article-2.png" },
              { title: "Space Trade Insights", date: "January 1, 2020", excerpt: '"Global Watch: Space Sustainability, Risks, and Opportunities"', img: "/images/mission-illustration.png" },
            ].map((post, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <Link href="/blog" className="group block bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg hover:border-blue/20 transition-all duration-300 h-full">
                  <div className="h-48 relative overflow-hidden">
                    <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute bottom-4 left-4"><span className="text-xs text-white/80 font-medium">{post.date}</span></div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display font-semibold text-gray-900 group-hover:text-navy transition-colors mb-3 line-clamp-2">{post.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">{post.excerpt}</p>
                    <span className="inline-flex items-center mt-4 text-sm font-semibold text-blue group-hover:text-navy transition-colors">
                      Read More <svg className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/blog" className="inline-flex items-center px-7 py-3 text-sm font-semibold text-navy border-2 border-navy/20 rounded-full hover:border-navy/40 hover:bg-tint-blue transition-all duration-300">View All Articles</Link>
          </div>
        </div>
      </section>

      {/* ── Educational Layer ── */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-gray-900 to-navy overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(4,107,210,0.15),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,rgba(53,104,161,0.12),transparent_60%)]" />
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative">
          <ScrollReveal className="text-center mb-12">
            <p className="text-blue-light text-sm font-semibold uppercase tracking-wider mb-3">Knowledge Hub</p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">Educational Layer</h2>
            <p className="text-white/50 max-w-2xl mx-auto text-sm">Exploring the key themes shaping the future of the global space economy</p>
          </ScrollReveal>
        </div>
        <div className="flex gap-5 overflow-x-auto snap-x snap-mandatory px-4 sm:px-6 lg:px-8 pb-6" style={{ scrollbarWidth: "none" }}>
          {educationalSlides.map((slide, i) => {
            const icons = [
              <svg key="i" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>,
              <svg key="i" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>,
              <svg key="i" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
              <svg key="i" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
              <svg key="i" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
              <svg key="i" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3"/></svg>,
              <svg key="i" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>,
              <svg key="i" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446A9 9 0 1 1 12 3z"/></svg>,
            ];
            const titles = [
              "Future of Space 2035", "Lunar Exploration", "Space Economics",
              "Global Trade", "Space Law", "Governance",
              "Orbital Traffic", "Sustainability"
            ];
            return (
              <div key={i} className="snap-center flex-shrink-0 w-80 sm:w-[360px] group">
                <div className="bg-white/[0.06] backdrop-blur-sm border border-white/[0.08] rounded-2xl p-7 h-full hover:bg-white/[0.1] hover:border-white/[0.15] transition-all duration-300 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue/10 rounded-full blur-[40px] -translate-y-1/2 translate-x-1/2 group-hover:bg-blue/20 transition-colors" />
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 rounded-xl bg-blue/20 flex items-center justify-center text-blue-light">
                        {icons[i]}
                      </div>
                      <div>
                        <span className="text-[10px] font-semibold uppercase tracking-widest text-white/30">Topic {String(i + 1).padStart(2, "0")}</span>
                        <h4 className="text-sm font-display font-semibold text-white">{titles[i]}</h4>
                      </div>
                    </div>
                    <p className="text-sm leading-relaxed text-white/60 group-hover:text-white/75 transition-colors">{slide}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Founder ── */}
      <section className="py-20 lg:py-28 bg-gray-50 relative noise-bg">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative">
          <ScrollReveal className="text-center mb-14">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900">Meet our Founder</h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">Our founders bring experience in aerospace engineering, international trade law, and strategic consulting.</p>
          </ScrollReveal>
          <ScrollReveal>
            <div className="grid lg:grid-cols-[1fr_1.5fr] gap-10 items-center bg-white rounded-3xl p-8 lg:p-12 border border-gray-100 shadow-sm">
              <div className="flex justify-center">
                <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-tint-blue to-tint-purple">
                  <Image src="/images/founder-main.png" alt="Manassé Bokole" fill className="object-cover" />
                </div>
              </div>
              <div>
                <h3 className="font-display font-bold text-2xl text-gray-900 mb-1">Manassé Bokole</h3>
                <p className="text-blue text-sm font-medium mb-5">Founder and CEO, PhD in Business Diplomacy and International Trade</p>
                <blockquote className="text-gray-600 leading-relaxed text-sm border-l-4 border-navy pl-5 italic">
                  &ldquo;Ambition Beyond Borders is more than a slogan. It is a mindset and a way of acting.&rdquo; Nomadly was created from a simple conviction: the greatest barriers to innovation are not only geographic or regulatory, but mental. When founders are empowered to think beyond borders, they can change industries, societies, and the future itself—turning ambition into impact.
                </blockquote>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Advisory Board ── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-14">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900">Advisory Board</h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {advisoryBoard.map((person, i) => (
              <ScrollReveal key={person.name} delay={i * 80}>
                <div className="text-center group">
                  <div className="relative w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-br from-tint-blue to-gray-100 ring-2 ring-transparent group-hover:ring-blue/30 transition-all duration-300">
                    <Image src={person.img} alt={person.name} fill className="object-cover" />
                  </div>
                  <h3 className="font-display font-semibold text-sm text-gray-900">{person.name}</h3>
                  <p className="text-xs text-gray-500 mt-1 leading-snug">{person.role}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-14">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">Get answers to common questions about our services and the aerospace export process.</p>
          </ScrollReveal>
          <ScrollReveal>
            <FAQ items={homeFAQs} />
          </ScrollReveal>
        </div>
      </section>

      {/* ── Social Feeds ── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-14">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 mb-4">Follow Our Journey</h2>
            <p className="text-gray-600">Stay connected with our latest updates and behind-the-scenes moments.</p>
          </ScrollReveal>
          <div className="grid lg:grid-cols-2 gap-8">
            <ScrollReveal>
              <div className="border border-gray-200 rounded-2xl overflow-hidden h-full hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 p-5 border-b border-gray-100">
                  <img src="/images/instagram-profile.webp" alt="nomadly_sas" className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <h4 className="font-display font-semibold text-sm">nomadly_sas</h4>
                    <p className="text-xs text-gray-500">Latest From Instagram</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-0.5">
                  <img src="/images/instagram-post-1.webp" alt="Nomadly at Creatrices d'Avenir" className="w-full h-40 object-cover" />
                  <img src="/images/instagram-post-2.webp" alt="Space traffic management" className="w-full h-40 object-cover" />
                </div>
                <div className="p-5">
                  <p className="text-xs text-gray-500 leading-relaxed mb-4">
                    Nomadly reinvente l&apos;ingenierie du commerce international dans le secteur de l&apos;aerospatial, en combinant strategie et donnee (Afrique-Amerique-Europe).
                  </p>
                  <a href="https://www.instagram.com/nomadly_sas/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-semibold text-blue hover:text-navy transition-colors">
                    Follow on Instagram <svg className="ml-1 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg>
                  </a>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={120}>
              <div className="border border-gray-200 rounded-2xl overflow-hidden h-full hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 p-5 border-b border-gray-100">
                  <img src="/images/linkedin-profile.png" alt="Manasse Bokole" className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <h4 className="font-display font-semibold text-sm">Manasse BOKOLE</h4>
                    <p className="text-xs text-gray-500">LinkedIn Updates</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-0.5">
                  <img src="/images/linkedin-profile.png" alt="Manasse Bokole LinkedIn" className="w-full h-40 object-cover" />
                  <img src="/images/why-recognition.png" alt="Conference" className="w-full h-40 object-cover" />
                </div>
                <div className="p-5">
                  <p className="text-xs text-gray-500 leading-relaxed mb-4">
                    Visiting the NASA -- National Aeronautics and Space Administration center in Houston, where the history of space exploration comes to life, was an unforgettable experience.
                  </p>
                  <a href="https://www.linkedin.com/feed/update/urn:li:activity:7270862673062281216/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-semibold text-blue hover:text-navy transition-colors">
                    Follow us on LinkedIn <svg className="ml-1 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg>
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-navy via-blue to-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(4,107,210,0.3),transparent)]" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <ScrollReveal>
            <h2 className="font-display font-bold text-3xl sm:text-4xl mb-4">Reach Us</h2>
            <p className="text-white/70 mb-8 max-w-xl mx-auto">Contact our team for a strategic consultation and let&apos;s navigate your international journey together.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://calendar.google.com/calendar/u/0?cid=bWFuYXNzZS5ib2tvbGVAZ21haWwuY29t" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-7 py-3.5 text-sm font-semibold text-navy bg-white rounded-full hover:shadow-[0_0_24px_rgba(255,255,255,0.3)] transition-all duration-300">Get In Touch</a>
              <Link href="/contact" className="inline-flex items-center px-7 py-3.5 text-sm font-semibold text-white border-2 border-white/30 rounded-full hover:border-white/60 hover:bg-white/10 transition-all duration-300">Schedule Free Consultation</Link>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="grid sm:grid-cols-3 gap-6 mt-14">
              <div className="text-center"><h4 className="font-display font-semibold mb-1">Call Us</h4><p className="text-sm text-white/60">+33 7 61 91 10 49</p></div>
              <div className="text-center"><h4 className="font-display font-semibold mb-1">Email Us</h4><p className="text-sm text-white/60">contact@nomadly.fr</p></div>
              <div className="text-center"><h4 className="font-display font-semibold mb-1">Book Now</h4><a href="https://calendar.google.com/calendar/u/0/r?cid=bWFuYXNzZS5ib2tvbGVAZ21haWwuY29t" target="_blank" rel="noopener noreferrer" className="text-sm text-white/60 hover:text-white underline transition-colors">Schedule a Meeting</a></div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
