'use client';

import { useLocale } from '@/lib/LocaleProvider';
import { useScrollReveal } from '@/lib/useScrollReveal';

const STEP_KEYS = ['step1', 'step2', 'step3'] as const;
const STEP_NUMBERS = ['01', '02', '03'];

export function HowItWorks() {
  const { dict } = useLocale();
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section className="border-t border-brand-border py-24" ref={ref} style={{ opacity: 0 }}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-2xl font-bold text-brand-text sm:text-4xl lg:text-5xl">
          {dict.howItWorks.title}
        </h2>

        <div className="mt-16 grid gap-12 sm:grid-cols-3">
          {STEP_KEYS.map((key, i) => (
            <div key={key} className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-primary/10 text-2xl font-bold text-brand-primary">
                {STEP_NUMBERS[i]}
              </div>
              <h3 className="mt-6 text-xl font-semibold text-brand-text">{dict.howItWorks[key].title}</h3>
              <p className="mt-3 text-base leading-relaxed text-brand-text-secondary">{dict.howItWorks[key].description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
