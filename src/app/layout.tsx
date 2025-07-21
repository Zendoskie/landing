import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Open2E - AI-Powered Open-Ended Question Evaluation",
  description: "Intelligent evaluation tool that uses GPT-4o and NLP to automatically analyze and score student responses for open-ended questions. Perfect for computer literacy and critical-thinking subjects.",
  keywords: ["AI evaluation", "education", "GPT-4o", "NLP", "open-ended questions", "computer literacy", "automatic grading"],
  authors: [
    { name: "Jr Nino Garingarao" },
    { name: "John Paul Marquez" },
    { name: "Alyssa Jane Marquez" }
  ],
  openGraph: {
    title: "Open2E - AI-Powered Open-Ended Question Evaluation",
    description: "Intelligent evaluation tool that uses GPT-4o and NLP to automatically analyze and score student responses.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Open2E - AI-Powered Open-Ended Question Evaluation",
    description: "Intelligent evaluation tool that uses GPT-4o and NLP to automatically analyze and score student responses.",
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