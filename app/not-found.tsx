import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-6xl text-signal">404</p>
      <h1 className="mt-4 font-display text-3xl text-paper">Page not found</h1>
      <p className="mt-2 text-sm text-slate">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="mt-6 rounded border border-signal px-4 py-2 text-sm text-signal transition-colors hover:bg-signal hover:text-ink"
      >
        Back to home
      </Link>
    </div>
  );
}
