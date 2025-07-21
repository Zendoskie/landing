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
  title: "OpenE - Computer Literacy Evaluation Platform",
  description: "A powerful desktop application for evaluating and analyzing computer science concepts. Features AI-powered evaluation, enumeration checking, and advanced analytics.",
  keywords: ["computer literacy", "education", "evaluation", "AI", "desktop app", "computer science"],
  authors: [{ name: "OpenE Team" }],
  openGraph: {
    title: "OpenE - Computer Literacy Evaluation Platform",
    description: "A powerful desktop application for evaluating and analyzing computer science concepts.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OpenE - Computer Literacy Evaluation Platform",
    description: "A powerful desktop application for evaluating and analyzing computer science concepts.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}