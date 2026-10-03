import type { Metadata } from "next";
import { profile, socialLinks } from "@/data/portfolio";
import "./globals.css";

const title = `${profile.name} | ${profile.role}`;
const description = `Portfolio of ${profile.name}, a ${profile.role} focused on reliable and maintainable software.`;

function getPublicOrigin(): URL | undefined {
  const configured = process.env.NEXT_PUBLIC_SITE_URL;
  if (!configured) return undefined;
  try {
    const parsed = new URL(configured);
    return parsed.protocol === "https:" ? parsed : undefined;
  } catch {
    return undefined;
  }
}

const publicOrigin = getPublicOrigin();

export const metadata: Metadata = {
  metadataBase: publicOrigin,
  title,
  description,
  alternates: publicOrigin ? { canonical: publicOrigin } : undefined,
  openGraph: {
    type: "website",
    title,
    description,
    siteName: profile.name,
    url: publicOrigin?.toString(),
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
  icons: {
    icon: "/brand-icon.svg",
    shortcut: "/brand-icon.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    email: profile.email,
    ...(publicOrigin ? { url: publicOrigin.origin } : {}),
    sameAs: socialLinks.filter((link) => link.id !== "email" && link.href).map((link) => link.href),
  };

  return (
    <html lang="en">
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema).replace(/</g, "\\u003c") }} />
      </body>
    </html>
  );
}
