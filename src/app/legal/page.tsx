import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Impressum',
};

export default function LegalPage() {
  return (
    <article className="prose prose-invert mx-auto max-w-3xl px-4 py-24 sm:px-6">
      <h1>Impressum</h1>

      <h2>Angaben gemäß § 5 TMG</h2>
      <p>
        Valerian Huber<br />
        Einzelunternehmen<br />
        Großkarolinenfeld, Deutschland
      </p>

      <h2>Kontakt</h2>
      <p>
        E-Mail: <a href="mailto:support@etchify.app">support@etchify.app</a>
      </p>

      <h2>Umsatzsteuer-ID</h2>
      <p>
        Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:<br />
        DE453549559
      </p>

      <h2>Verantwortlich für den Inhalt</h2>
      <p>
        Valerian Huber<br />
        Großkarolinenfeld, Deutschland
      </p>

      <h2>Marke</h2>
      <p>
        Etchify ist eine Marke von{' '}
        <a href="https://alpin-code.de" target="_blank" rel="noopener noreferrer">
          Alpin-Code
        </a>{' '}
        (alpin-code.de).
      </p>
    </article>
  );
}
