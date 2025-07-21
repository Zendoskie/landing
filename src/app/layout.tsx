import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}