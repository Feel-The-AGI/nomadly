"use client";

export default function ContactForm() {
  return (
    <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Your name"
            className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue/50 focus:ring-2 focus:ring-blue/10 transition-all"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1.5">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            placeholder="Your last name"
            className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue/50 focus:ring-2 focus:ring-blue/10 transition-all"
          />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="your@email.com"
          className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue/50 focus:ring-2 focus:ring-blue/10 transition-all"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="How can we help you?"
          className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue/50 focus:ring-2 focus:ring-blue/10 transition-all resize-none"
        />
      </div>
      <button
        type="submit"
        className="w-full sm:w-auto px-8 py-3.5 text-sm font-semibold text-white bg-navy rounded-full hover:bg-blue transition-all duration-300 hover:shadow-[0_0_24px_rgba(4,107,210,0.35)]"
      >
        Send Message
      </button>
    </form>
  );
}
