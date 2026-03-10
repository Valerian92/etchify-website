/**
 * Safe JSON-LD component for structured data (SEO).
 * Only accepts static data objects defined at build time — never user input.
 * This is the Next.js recommended approach for JSON-LD.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  const json = JSON.stringify(data);
  return (
    <script
      type="application/ld+json"
      // SECURITY NOTE: This is safe because `data` is always a hardcoded
      // static object defined in server components, never user input.
      // Next.js docs recommend this pattern for JSON-LD structured data.
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
