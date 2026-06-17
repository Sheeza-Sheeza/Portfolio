import Link from "next/link";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <Container className="flex min-h-screen flex-col items-center justify-center py-20 text-center">
      <p className="font-mono text-sm uppercase tracking-widest text-accent">
        404
      </p>
      <h1 className="mt-4 text-3xl font-bold text-foreground">Page not found</h1>
      <p className="mt-4 text-muted">
        The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full border border-white/10 px-6 py-3 text-sm text-accent transition-colors hover:border-cyan-400/30 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
      >
        Back to home
      </Link>
    </Container>
  );
}
