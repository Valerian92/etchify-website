'use client';

import { useState } from 'react';
import { useLocale } from '@/lib/LocaleProvider';
import { useScrollReveal } from '@/lib/useScrollReveal';

const FAQ_KEYS = ['whatIsEtchify', 'howSetup', 'shopifyPlans', 'productionMethods', 'freeTrial', 'customization'] as const;

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      className={`h-5 w-5 shrink-0 text-brand-text-secondary transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

export function FAQ() {
  const { dict } = useLocale();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="faq" className="py-24" ref={ref} style={{ opacity: 0 }}>
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold text-brand-text sm:text-4xl lg:text-5xl">
          {dict.faq.title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg leading-relaxed text-brand-text-secondary">
          {dict.faq.subtitle}
        </p>

        <div className="mt-16 space-y-3">
          {FAQ_KEYS.map((key, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={key}
                className="rounded-xl border border-brand-border bg-brand-muted/50 transition-colors hover:border-brand-primary/30"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                >
                  <span className="text-base font-medium text-brand-text sm:text-lg">
                    {dict.faq[key].question}
                  </span>
                  <ChevronIcon open={isOpen} />
                </button>
                <div
                  id={`faq-answer-${i}`}
                  role="region"
                  className={`grid transition-all duration-200 ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-base leading-relaxed text-brand-text-secondary">
                      {dict.faq[key].answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
