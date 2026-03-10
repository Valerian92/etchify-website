// Mock data — will be replaced with real Supabase/API data
const shops = [
  {
    name: 'Lunaria Design',
    domain: 'lunaria-design.myshopify.com',
    plan: 'Pro',
    status: 'active' as const,
    orders30d: 312,
    installed: '2025-11-15',
  },
  {
    name: 'Alpine Gifts',
    domain: 'alpine-gifts.myshopify.com',
    plan: 'Pro',
    status: 'active' as const,
    orders30d: 189,
    installed: '2025-12-02',
  },
  {
    name: 'Laser Studio',
    domain: 'laser-studio.myshopify.com',
    plan: 'Basic',
    status: 'active' as const,
    orders30d: 156,
    installed: '2026-01-10',
  },
  {
    name: 'Custom Prints EU',
    domain: 'custom-prints.myshopify.com',
    plan: 'Pro',
    status: 'active' as const,
    orders30d: 98,
    installed: '2026-01-22',
  },
  {
    name: 'Engrave It',
    domain: 'engrave-it.myshopify.com',
    plan: 'Basic',
    status: 'trial' as const,
    orders30d: 45,
    installed: '2026-02-28',
  },
  {
    name: 'Personalize.ch',
    domain: 'personalize-ch.myshopify.com',
    plan: 'Basic',
    status: 'inactive' as const,
    orders30d: 0,
    installed: '2026-01-05',
  },
];

const statusStyles = {
  active: 'bg-emerald-400/10 text-emerald-400',
  trial: 'bg-amber-400/10 text-amber-400',
  inactive: 'bg-gray-400/10 text-gray-500',
};

export const metadata = {
  title: 'Shops',
};

export default function ShopsPage() {
  return (
    <div>
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Shops</h1>
          <p className="mt-1 text-gray-400">
            All Shopify stores with Etchify installed.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="rounded-lg bg-brand-muted px-3 py-1.5 text-sm text-gray-400">
            {shops.filter((s) => s.status === 'active').length} active
          </span>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-xl border border-brand-border bg-brand-muted">
        <table className="w-full">
          <thead>
            <tr className="border-b border-brand-border text-left text-sm text-gray-400">
              <th className="px-6 py-3 font-medium">Shop</th>
              <th className="px-6 py-3 font-medium">Plan</th>
              <th className="px-6 py-3 font-medium">Status</th>
              <th className="px-6 py-3 font-medium text-right">Orders (30d)</th>
              <th className="px-6 py-3 font-medium">Installed</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-brand-border">
            {shops.map((shop) => (
              <tr key={shop.domain} className="transition-colors hover:bg-brand-dark/50">
                <td className="px-6 py-4">
                  <p className="text-sm font-medium">{shop.name}</p>
                  <p className="text-xs text-gray-500">{shop.domain}</p>
                </td>
                <td className="px-6 py-4">
                  <span className="rounded bg-brand-primary/10 px-2 py-0.5 text-xs font-medium text-brand-primary">
                    {shop.plan}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-xs font-medium capitalize ${statusStyles[shop.status]}`}
                  >
                    {shop.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right text-sm tabular-nums">
                  {shop.orders30d.toLocaleString()}
                </td>
                <td className="px-6 py-4 text-sm text-gray-400">
                  {new Date(shop.installed).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
