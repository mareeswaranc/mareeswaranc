import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mareeswaran — Platform Engineer | SRE | Cloud Infrastructure",
  description:
    "Platform Engineer specializing in Kubernetes, AWS, Infrastructure as Code, and Cloud Architecture. Building reliable, scalable systems.",
  icons: {
    icon: "favicon.svg",
  },
  keywords: [
    "Platform Engineer",
    "Site Reliability Engineer",
    "Cloud Infrastructure",
    "Kubernetes",
    "AWS",
    "Terraform",
    "DevOps",
  ],
  authors: [{ name: "Mareeswaran" }],
  openGraph: {
    title: "Mareeswaran — Platform Engineer",
    description:
      "Platform Engineer specializing in Kubernetes, AWS, and Infrastructure as Code.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
