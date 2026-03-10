'use client';

import { useLocale } from '@/lib/LocaleProvider';
import { getLegalContent } from '@/lib/legal-content';

export default function LegalPage() {
  const { locale } = useLocale();
  const content = getLegalContent(locale);

  return (
    <article className="prose prose-invert mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-24">
      {content.impressum}
    </article>
  );
}
