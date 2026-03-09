const FEATURES = [
  {
    icon: '🎨',
    title: 'Canvas Editor',
    description: 'Drag & Drop Designer mit Text, Bildern, QR-Codes und Formen. Deine Kunden gestalten direkt im Browser.',
  },
  {
    icon: '⚡',
    title: 'Gravur & Druck',
    description: 'Laser-Gravur, UV-Druck, Sublimation — ein Tool für alle Fertigungsverfahren.',
  },
  {
    icon: '🧩',
    title: 'No-Code Setup',
    description: '7-Step Wizard. Produkte konfigurieren, Materialien zuweisen, Tools aktivieren — ohne eine Zeile Code.',
  },
  {
    icon: '📦',
    title: 'Produktionsdateien',
    description: 'SVG, PNG, PDF Export. Direkt produktionsfertig für deine Maschinen.',
  },
];

export function Features() {
  return (
    <section id="features" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold sm:text-4xl">
          Alles was dein Shop braucht
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-gray-400">
          Von der Kunden-Gestaltung bis zur fertigen Produktionsdatei — in einer App.
        </p>

        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-brand-border bg-brand-muted/50 p-8 transition-colors hover:border-brand-primary/30"
            >
              <span className="text-4xl">{f.icon}</span>
              <h3 className="mt-4 text-xl font-semibold">{f.title}</h3>
              <p className="mt-2 text-gray-400">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
