const STEPS = [
  {
    step: '01',
    title: 'Produkte einrichten',
    description: 'Wähle Produkte, weise Materialien und Geometrien zu, aktiviere Tools — alles im Wizard.',
  },
  {
    step: '02',
    title: 'Kunden designen',
    description: 'Deine Kunden öffnen den Konfigurator, gestalten ihr Design und legen es in den Warenkorb.',
  },
  {
    step: '03',
    title: 'Du produzierst',
    description: 'Lade die Produktionsdatei herunter — SVG für Laser, PNG für Druck. Fertig.',
  },
];

export function HowItWorks() {
  return (
    <section className="border-t border-brand-border py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold sm:text-4xl">
          So funktioniert&apos;s
        </h2>

        <div className="mt-16 grid gap-12 sm:grid-cols-3">
          {STEPS.map((s) => (
            <div key={s.step} className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-primary/10 text-2xl font-bold text-brand-primary">
                {s.step}
              </div>
              <h3 className="mt-6 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-gray-400">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
