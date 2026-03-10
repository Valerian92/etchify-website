'use client';

import { useLocale } from '@/lib/LocaleProvider';
import { getLegalContent } from '@/lib/legal-content';

export default function PrivacyPage() {
  const { locale } = useLocale();
  const content = getLegalContent(locale);

  return (
    <article className="prose prose-invert mx-auto max-w-3xl px-4 py-24 sm:px-6">
      {content.privacy}
    </article>
  );
}
