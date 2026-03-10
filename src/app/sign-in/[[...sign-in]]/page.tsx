import { SignIn } from '@clerk/nextjs';

export const metadata = {
  title: 'Sign In',
};

export default function SignInPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <SignIn
        appearance={{
          elements: {
            rootBox: 'mx-auto',
            card: 'bg-brand-muted border border-brand-border',
          },
        }}
      />
    </div>
  );
}
