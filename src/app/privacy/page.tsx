import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung',
};

export default function PrivacyPage() {
  return (
    <article className="prose prose-invert mx-auto max-w-3xl px-4 py-24 sm:px-6">
      <h1>Datenschutzerklärung</h1>
      <p><strong>Stand:</strong> März 2026</p>

      <h2>1. Verantwortlicher</h2>
      <p>
        Valerian Huber<br />
        Großkarolinenfeld, Deutschland<br />
        E-Mail: support@etchify.app
      </p>

      <h2>2. Erhobene Daten</h2>
      <p>
        Bei der Nutzung unserer App werden folgende Daten verarbeitet:
      </p>
      <ul>
        <li>Shop-Domain und Shopify-Shop-Daten (für die App-Funktionalität)</li>
        <li>Design-Daten (Texte, Bilder, Positionen auf dem Canvas)</li>
        <li>Bestelldaten (sofern eine Bestellung über den Konfigurator erfolgt)</li>
        <li>Server-Logs (IP-Adresse, Zeitstempel, Browser-Typ)</li>
      </ul>

      <h2>3. Zweck der Verarbeitung</h2>
      <p>
        Die Daten werden ausschließlich zur Bereitstellung der Etchify-App-Funktionalität
        verarbeitet (Design-Erstellung, Produktionsdatei-Export, Bestellverwaltung).
      </p>

      <h2>4. Speicherung</h2>
      <p>
        Design-Daten werden auf Servern in der EU gespeichert (Supabase, Hetzner).
        Geteilte Design-Links sind standardmäßig 30 Tage gültig.
      </p>

      <h2>5. Ihre Rechte</h2>
      <p>
        Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung
        der Verarbeitung Ihrer Daten. Kontaktieren Sie uns unter support@etchify.app.
      </p>

      <h2>6. Cookies</h2>
      <p>
        Etchify verwendet keine Tracking-Cookies. Es werden ausschließlich
        technisch notwendige Cookies für die Session-Verwaltung eingesetzt.
      </p>
    </article>
  );
}
