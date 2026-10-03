import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return (
    <main className="shell not-found">
      <p className="eyebrow">404 / Not found</p>
      <h1>This page isn&apos;t here.</h1>
      <p className="not-found-copy">The address may be outdated or the page may have moved.</p>
      <div className="hero-actions">
        <Link className="button button--primary" href="/"><ArrowLeft size={15} aria-hidden="true" /> Back home</Link>
        <Link className="button button--secondary" href="/#projects">Projects <ArrowUpRight size={15} aria-hidden="true" /></Link>
      </div>
    </main>
  );
}