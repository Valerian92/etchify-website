import { currentUser } from '@clerk/nextjs/server';

export const metadata = {
  title: 'Settings',
};

export default async function SettingsPage() {
  const user = await currentUser();

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Settings</h1>
        <p className="mt-1 text-gray-400">Manage your Etchify admin preferences.</p>
      </div>

      {/* Profile Section */}
      <div className="space-y-6">
        <div className="rounded-xl border border-brand-border bg-brand-muted p-6">
          <h2 className="mb-4 text-lg font-semibold">Profile</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm text-gray-400">Name</label>
              <p className="mt-1 text-sm font-medium">
                {user?.fullName || 'Not set'}
              </p>
            </div>
            <div>
              <label className="block text-sm text-gray-400">Email</label>
              <p className="mt-1 text-sm font-medium">
                {user?.primaryEmailAddress?.emailAddress || 'Not set'}
              </p>
            </div>
          </div>
          <p className="mt-4 text-xs text-gray-500">
            Profile is managed through Clerk. Click your avatar in the sidebar to update.
          </p>
        </div>

        {/* Notifications */}
        <div className="rounded-xl border border-brand-border bg-brand-muted p-6">
          <h2 className="mb-4 text-lg font-semibold">Notifications</h2>
          <div className="space-y-3">
            {[
              { label: 'New shop installations', desc: 'Get notified when a new shop installs Etchify' },
              { label: 'Revenue milestones', desc: 'Monthly revenue reports and milestones' },
              { label: 'Support tickets', desc: 'Alerts for new support requests' },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between rounded-lg bg-brand-dark/50 px-4 py-3">
                <div>
                  <p className="text-sm font-medium">{item.label}</p>
                  <p className="text-xs text-gray-500">{item.desc}</p>
                </div>
                <div className="h-5 w-9 rounded-full bg-brand-primary/30 p-0.5">
                  <div className="h-4 w-4 translate-x-4 rounded-full bg-brand-primary transition-transform" />
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-gray-500">
            Notification preferences coming soon.
          </p>
        </div>

        {/* API Access */}
        <div className="rounded-xl border border-brand-border bg-brand-muted p-6">
          <h2 className="mb-4 text-lg font-semibold">API Access</h2>
          <p className="text-sm text-gray-400">
            API endpoints for ERP integration will be available here once configured.
          </p>
          <div className="mt-4 rounded-lg bg-brand-dark/50 px-4 py-3">
            <code className="text-xs text-gray-500">
              POST https://etchify.app/api/v1/metrics → Coming Soon
            </code>
          </div>
        </div>
      </div>
    </div>
  );
}
