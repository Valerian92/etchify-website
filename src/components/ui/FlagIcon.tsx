import { type Locale } from '@/lib/i18n';

const FLAGS: Record<Locale, { colors: string[]; layout: 'vertical' | 'horizontal' }> = {
  de: { colors: ['#000', '#D00', '#FFCE00'], layout: 'horizontal' },
  en: { colors: ['#012169', '#C8102E', '#FFFFFF'], layout: 'horizontal' }, // simplified UK
  fr: { colors: ['#002395', '#FFFFFF', '#ED2939'], layout: 'vertical' },
  es: { colors: ['#AA151B', '#F1BF00', '#AA151B'], layout: 'horizontal' },
  it: { colors: ['#009246', '#FFFFFF', '#CE2B37'], layout: 'vertical' },
};

export function FlagIcon({ locale, className = 'h-4 w-5' }: { locale: Locale; className?: string }) {
  const flag = FLAGS[locale];

  if (locale === 'en') {
    // Simplified Union Jack
    return (
      <svg className={className} viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="60" height="40" fill="#012169" />
        <path d="M0 0L60 40M60 0L0 40" stroke="#FFF" strokeWidth="8" />
        <path d="M0 0L60 40M60 0L0 40" stroke="#C8102E" strokeWidth="4" />
        <path d="M30 0V40M0 20H60" stroke="#FFF" strokeWidth="12" />
        <path d="M30 0V40M0 20H60" stroke="#C8102E" strokeWidth="6" />
      </svg>
    );
  }

  if (flag.layout === 'vertical') {
    return (
      <svg className={className} viewBox="0 0 60 40" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" width="20" height="40" fill={flag.colors[0]} />
        <rect x="20" width="20" height="40" fill={flag.colors[1]} />
        <rect x="40" width="20" height="40" fill={flag.colors[2]} />
      </svg>
    );
  }

  // horizontal stripes
  return (
    <svg className={className} viewBox="0 0 60 40" xmlns="http://www.w3.org/2000/svg">
      <rect y="0" width="60" height="13.33" fill={flag.colors[0]} />
      <rect y="13.33" width="60" height="13.33" fill={flag.colors[1]} />
      <rect y="26.67" width="60" height="13.33" fill={flag.colors[2]} />
    </svg>
  );
}
