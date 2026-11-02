import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alex Chen · Software Engineer",
  description:
    "Portfolio of Alex Chen, a software engineer building thoughtful full-stack products. Open to software engineering roles.",
  openGraph: {
    title: "Alex Chen · Software Engineer",
    description:
      "Portfolio showcasing projects, experience, and skills for software engineering opportunities.",
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
      className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable} h-full scroll-smooth antialiased`}
    >
      <body className="relative min-h-full">
        <div className="bg-glow" aria-hidden="true" />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
