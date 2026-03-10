import Link from 'next/link';
import { Logo } from '@/components/ui/Logo';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <Logo className="h-12 w-12 text-brand-primary" />
      <h1 className="mt-6 text-6xl font-bold text-brand-text">404</h1>
      <p className="mt-3 text-lg text-brand-text-secondary">
        Diese Seite existiert nicht.
      </p>
      <div className="mt-8 flex gap-4">
        <Link
          href="/"
          className="rounded-xl bg-brand-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-secondary"
        >
          Zur Startseite
        </Link>
        <Link
          href="/#features"
          className="rounded-xl border border-brand-border px-6 py-3 text-sm font-semibold text-brand-text-secondary transition-colors hover:border-brand-text-muted hover:text-brand-text"
        >
          Features ansehen
        </Link>
      </div>
    </div>
  );
}
