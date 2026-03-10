import { SignUp } from '@clerk/nextjs';

export const metadata = {
  title: 'Sign Up',
};

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <SignUp
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
