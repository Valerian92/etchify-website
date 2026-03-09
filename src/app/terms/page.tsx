import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Allgemeine Geschäftsbedingungen',
};

export default function TermsPage() {
  return (
    <article className="prose prose-invert mx-auto max-w-3xl px-4 py-24 sm:px-6">
      <h1>Allgemeine Geschäftsbedingungen</h1>
      <p><strong>Stand:</strong> März 2026</p>

      <h2>1. Geltungsbereich</h2>
      <p>
        Diese AGB gelten für die Nutzung der Etchify Shopify-App,
        bereitgestellt von Valerian Huber, Großkarolinenfeld.
      </p>

      <h2>2. Leistungsbeschreibung</h2>
      <p>
        Etchify stellt einen Produktkonfigurator als Shopify-App bereit.
        Shop-Owner können Produkte konfigurieren, Endkunden können
        individuelle Designs erstellen.
      </p>

      <h2>3. Preise und Zahlung</h2>
      <p>
        Die Abrechnung erfolgt über die Shopify Billing API. Preise
        sind auf der Pricing-Seite einsehbar. Alle Preise verstehen sich
        zzgl. der gesetzlichen Mehrwertsteuer.
      </p>

      <h2>4. Haftung</h2>
      <p>
        Die Haftung ist auf Vorsatz und grobe Fahrlässigkeit beschränkt.
        Für die Qualität der erstellten Designs und deren Eignung für
        bestimmte Fertigungsverfahren übernehmen wir keine Gewähr.
      </p>

      <h2>5. Kündigung</h2>
      <p>
        Die App kann jederzeit über den Shopify App Store deinstalliert werden.
        Bei Deinstallation werden alle zugehörigen Daten nach 30 Tagen gelöscht.
      </p>

      <h2>6. Anwendbares Recht</h2>
      <p>
        Es gilt deutsches Recht. Gerichtsstand ist Rosenheim.
      </p>
    </article>
  );
}
