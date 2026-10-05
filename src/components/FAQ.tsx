"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div
          key={i}
          className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
            openIndex === i
              ? "border-blue/20 bg-tint-blue/30 shadow-[0_0_0_1px_rgba(4,107,210,0.1)]"
              : "border-gray-200 hover:border-gray-300"
          }`}
        >
          <button
            onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
            className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
            aria-expanded={openIndex === i}
          >
            <span className="font-display font-semibold text-gray-900 text-sm sm:text-base">
              {item.question}
            </span>
            <span
              className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                openIndex === i ? "bg-navy text-white rotate-180" : "bg-gray-100 text-gray-600"
              }`}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </span>
          </button>
          <div
            className={`grid transition-all duration-300 ${
              openIndex === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            }`}
          >
            <div className="overflow-hidden">
              <div className="px-6 pb-5 text-sm text-gray-600 leading-relaxed">
                {item.answer}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
