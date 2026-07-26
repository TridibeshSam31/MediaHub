import { SignIn } from '@clerk/nextjs'

export default function Page({
  searchParams,
}: {
  searchParams: { redirect_url?: string };
}) {
  const redirectUrl = searchParams?.redirect_url || '/home';
  return (
    <main className="min-h-screen flex items-center justify-center bg-base-200 px-4 py-10">
      <div className="w-full max-w-5xl grid gap-8 lg:grid-cols-[1fr_auto] items-center">
        <section className="text-center lg:text-left">
          <p className="text-primary font-semibold mb-3">Welcome back</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Login to MediaHub
          </h1>
          <p className="text-base-content/70 text-lg max-w-xl mx-auto lg:mx-0">
            Sign in to upload videos, create social media images, and manage your Cloudinary media dashboard.
          </p>
        </section>

        <section className="flex justify-center">
          <SignIn afterSignInUrl={redirectUrl} />
        </section>
      </div>
    </main>
  )
}