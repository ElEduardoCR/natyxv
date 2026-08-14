import type { Metadata } from "next";
import { headers } from "next/headers";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const sans = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const baseUrl = `${protocol}://${host}`;
  const socialImage = new URL("/og.png", baseUrl).toString();

  return {
    metadataBase: new URL(baseUrl),
    title: "Mis XV · Naty Jáquez",
    description: "Acompáñame a celebrar mis quince años. Una invitación hecha con mucha ilusión.",
    icons: {
      icon: "/naty-caballo-vertical.jpeg",
      apple: "/naty-caballo-vertical.jpeg",
    },
    openGraph: {
      title: "Mis XV · Naty Jáquez",
      description: "Quiero que seas parte de un día que guardaré para siempre en mi corazón.",
      type: "website",
      locale: "es_MX",
      images: [{ url: socialImage, width: 1728, height: 910, alt: "Mis XV · Naty Jáquez" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Mis XV · Naty Jáquez",
      description: "Acompáñame a celebrar mis quince años.",
      images: [socialImage],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={`${display.variable} ${sans.variable}`}>{children}</body>
    </html>
  );
}
