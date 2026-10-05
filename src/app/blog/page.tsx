import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Blog",
  description: "Expert analysis of aerospace trade trends, regulatory updates, space sustainability insights, and market opportunities from Nomadly's strategic intelligence team.",
};

const blogPosts = [
  {
    title: "Africa Space Expo 2026: Nomadly at ASPEX in Abidjan",
    date: "October 2026",
    img: "/images/africa-space-expo.png",
    tag: "Events",
    excerpt: "Invited by the African Space Agency, Nomadly's founder attended the first edition of Africa Space Expo (ASPEX) in Abidjan from September 24-26. The event highlighted the importance of national space policies for Central Africa, its youth, and its sciences. A key moment was attending the plenary signing of the Artemis Accords by Cote d'Ivoire, with the United States as the guest of honor.",
  },
  {
    title: "ASPEX Highlights: Artemis Accords and African Space Strategy",
    date: "October 2026",
    img: "/images/event-senegal.png",
    tag: "Space Policy",
    excerpt: "The Artemis Accords set non-binding political principles, but their effects on technological and commercial cooperation depend on very different export control regimes between the US and the EU. This asymmetry determines the conditions under which an African state negotiates and positions itself on the international stage. Senegal, the first French-speaking African country to sign Artemis (2025), had already joined the Chinese-Russian lunar station project in 2024.",
  },
  {
    title: "Nomadly at the US-Africa Space Commerce Event",
    date: "October 2026",
    img: "/images/event-nasa-booth.png",
    tag: "Events",
    excerpt: "Our team participated in the US-Africa Space Commerce event, meeting with NASA representatives, aerospace entrepreneurs, and diplomatic stakeholders to strengthen transatlantic partnerships and explore new commercial space opportunities between the United States and the African continent.",
  },
  {
    title: "Global Watch: Space Sustainability, Risks, and Opportunities",
    date: "November 5, 2025",
    img: "/images/event-bnetd.png",
    tag: "Market Analysis",
    excerpt: "A comprehensive overview of regulatory, business, and technical developments shaping the global space industry. From US deregulation under the Trump administration, to emerging sustainability frameworks and orbital congestion challenges.",
  },
  {
    title: "Interactive Map of Key Public Actors in Global Space Innovation",
    date: "November 5, 2025",
    img: "/images/event-space-expo.png",
    tag: "Research",
    excerpt: "Explore a dynamic cartography of +500 key public stakeholders driving space innovation worldwide, including governments, universities, and regional organizations. This analysis highlights emerging credible actors shaping the future of space.",
  },
  {
    title: "Meeting Space Enterprises Exporting to Africa",
    date: "October 2026",
    img: "/images/event-rocket.png",
    tag: "Industry",
    excerpt: "At ASPEX, we had the opportunity to meet enterprises that have chosen to export to Africa, a momentum that Nomadly encourages and supports: nuantu space, SaH Analytics International and SATLANTIS are paving the way for new commercial space partnerships on the continent.",
  },
];

const categories = ["Space Policy", "Market Analysis", "Events", "Research", "Industry"];

export default function BlogPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-b from-tint-blue to-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-gray-900">Blog</h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Expert analysis of aerospace trade trends, regulatory updates, and market opportunities.</p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-14">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-gray-900 mb-4">
              Latest Insights &amp; Industry Analysis
            </h2>
          </ScrollReveal>
          <div className="grid lg:grid-cols-[1fr_320px] gap-12">
            <div className="space-y-8">
              {blogPosts.map((post, i) => (
                <ScrollReveal key={i} delay={i * 60}>
                  <article className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg hover:border-blue/20 transition-all duration-300 group">
                    <div className="grid sm:grid-cols-[280px_1fr] items-stretch">
                      <div className="overflow-hidden">
                        <img
                          src={post.img}
                          alt={post.title}
                          className="w-full h-full min-h-[200px] object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6 sm:p-8 flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="px-2.5 py-1 rounded-full bg-tint-blue text-navy text-xs font-semibold">{post.tag}</span>
                          <span className="text-xs text-gray-400">{post.date}</span>
                        </div>
                        <h3 className="font-display font-semibold text-lg text-gray-900 mb-3 group-hover:text-navy transition-colors leading-snug">
                          {post.title}
                        </h3>
                        <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">{post.excerpt}</p>
                        <span className="inline-flex items-center mt-4 text-sm font-semibold text-blue group-hover:text-navy transition-colors">
                          Read More
                          <svg className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                        </span>
                      </div>
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>

            <aside className="space-y-8">
              <ScrollReveal>
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="font-display font-semibold text-sm uppercase tracking-wider text-gray-400 mb-4">Categories</h3>
                  <ul className="space-y-2">
                    {categories.map((cat) => (
                      <li key={cat}>
                        <span className="flex items-center gap-2 text-sm text-gray-600 hover:text-navy cursor-pointer transition-colors py-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue" />
                          {cat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="font-display font-semibold text-sm uppercase tracking-wider text-gray-400 mb-4">Search</h3>
                  <input
                    type="text"
                    placeholder="Search articles..."
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-blue/50 transition-colors"
                  />
                </div>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <div className="bg-navy rounded-2xl p-6 text-white">
                  <h3 className="font-display font-semibold text-sm uppercase tracking-wider text-white/50 mb-4">Follow Us</h3>
                  <p className="text-sm text-white/70 mb-4">Stay updated with the latest space industry insights.</p>
                  <div className="space-y-3">
                    <a href="https://www.linkedin.com/company/nomadly-aerospace/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-white/80 hover:text-white transition-colors">
                      <span className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-xs font-bold">in</span>
                      Nomadly Aerospace
                    </a>
                    <a href="https://www.linkedin.com/in/manass%C3%A9-bokole-52b8ab1a4/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-white/80 hover:text-white transition-colors">
                      <span className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-xs font-bold">in</span>
                      Manasse Bokole
                    </a>
                    <a href="https://www.instagram.com/nomadly_sas/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-white/80 hover:text-white transition-colors">
                      <span className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-xs font-bold">IG</span>
                      @nomadly_sas
                    </a>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="font-display font-semibold text-sm uppercase tracking-wider text-gray-400 mb-4">Top Posts</h3>
                  <ul className="space-y-3">
                    {blogPosts.slice(0, 3).map((post, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <img src={post.img} alt="" className="w-12 h-12 rounded-lg object-cover flex-shrink-0" />
                        <span className="text-sm text-gray-700 hover:text-navy cursor-pointer transition-colors font-medium leading-snug">{post.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
