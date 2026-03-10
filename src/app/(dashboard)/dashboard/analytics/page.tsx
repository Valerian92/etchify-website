export const metadata = {
  title: 'Analytics',
};

const featureUsage = [
  { feature: 'Text Engraving', usage: 92, orders: 4280 },
  { feature: 'Image Upload', usage: 78, orders: 3640 },
  { feature: 'QR Code Generation', usage: 65, orders: 3020 },
  { feature: 'Preview 3D', usage: 54, orders: 2510 },
  { feature: 'Custom Fonts', usage: 41, orders: 1910 },
  { feature: 'Batch Processing', usage: 23, orders: 1070 },
];

const monthlyData = [
  { month: 'Oct', orders: 520, revenue: 1240 },
  { month: 'Nov', orders: 680, revenue: 1580 },
  { month: 'Dec', orders: 890, revenue: 2100 },
  { month: 'Jan', orders: 750, revenue: 1820 },
  { month: 'Feb', orders: 810, revenue: 2050 },
  { month: 'Mar', orders: 847, revenue: 2340 },
];

export default function AnalyticsPage() {
  const maxOrders = Math.max(...monthlyData.map((d) => d.orders));

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Analytics</h1>
        <p className="mt-1 text-gray-400">
          Usage metrics and trends across all shops.
        </p>
      </div>

      {/* Orders Chart (simple bar chart) */}
      <div className="mb-8 rounded-xl border border-brand-border bg-brand-muted p-6">
        <h2 className="mb-6 text-lg font-semibold">Orders per Month</h2>
        <div className="flex items-end gap-4" style={{ height: 200 }}>
          {monthlyData.map((d) => (
            <div key={d.month} className="flex flex-1 flex-col items-center gap-2">
              <span className="text-xs tabular-nums text-gray-400">{d.orders}</span>
              <div
                className="w-full rounded-t-md bg-brand-primary/80 transition-all hover:bg-brand-primary"
                style={{ height: `${(d.orders / maxOrders) * 160}px` }}
              />
              <span className="text-xs text-gray-500">{d.month}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Feature Usage */}
      <div className="rounded-xl border border-brand-border bg-brand-muted p-6">
        <h2 className="mb-6 text-lg font-semibold">Feature Usage</h2>
        <div className="space-y-5">
          {featureUsage.map((feat) => (
            <div key={feat.feature}>
              <div className="mb-1.5 flex items-center justify-between text-sm">
                <span className="font-medium">{feat.feature}</span>
                <span className="text-gray-400">
                  {feat.usage}% &middot; {feat.orders.toLocaleString()} orders
                </span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-brand-dark">
                <div
                  className="h-full rounded-full bg-brand-primary transition-all"
                  style={{ width: `${feat.usage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
