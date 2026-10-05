import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact Nomadly for a strategic consultation on space market expansion. Based in Versailles, France with offices in Kinshasa. Phone: +33 7 61 91 10 49.",
};

export default function ContactPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-b from-tint-blue to-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-gray-900">Contact Us</h1>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "phone", title: "Phone", info: "+33 7 61 91 10 49" },
              { icon: "mail", title: "E-mail", info: "contact@nomadly.fr\nmanasse.bokole@nomadly.fr" },
              { icon: "map", title: "Address", info: "25 Rue du Maréchal Foch, 78000 Versailles, France" },
              { icon: "clock", title: "Working Hours", info: "Mon-Fri: 8am-6pm" },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 80}>
                <div className="bg-gray-50 rounded-2xl p-6 text-center h-full hover:shadow-md hover:bg-tint-blue/30 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-navy/10 flex items-center justify-center mx-auto mb-4">
                    {item.icon === "phone" && (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-navy">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    )}
                    {item.icon === "mail" && (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-navy">
                        <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    )}
                    {item.icon === "map" && (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-navy">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                      </svg>
                    )}
                    {item.icon === "clock" && (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-navy">
                        <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
                      </svg>
                    )}
                  </div>
                  <h3 className="font-display font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500 whitespace-pre-line">{item.info}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="bg-gray-50 rounded-3xl p-8 lg:p-12">
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-gray-900 mb-8 text-center">
                Free Consultation Form
              </h2>
              <ContactForm />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="rounded-2xl overflow-hidden h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2627.3!2d2.1308!3d48.8035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67db5e8b1c5e7%3A0x5e1d631b2e3f6d0!2s25%20Rue%20du%20Mar%C3%A9chal%20Foch%2C%2078000%20Versailles%2C%20France!5e0!3m2!1sen!2sfr!4v1696500000000!5m2!1sen!2sfr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Nomadly office location - 25 Rue du Marechal Foch, Versailles"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
