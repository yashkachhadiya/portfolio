import { Metadata } from "next";
import "./globals.css";
import { DM_Sans, Syne } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
});

export const metadata: Metadata = {
  title: "Yash Kachhadiya | Full Stack Developer",
  description:
    "Portfolio of Yash Kachhadiya - Full Stack Developer specializing in React.js, Next.js, NestJS, Node.js, TypeScript, and scalable web architectures.",
  keywords: [
    "Yash Kachhadiya",
    "Full Stack Developer",
    "React.js",
    "Next.js",
    "NestJS",
    "Node.js",
    "TypeScript",
    "Portfolio",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${syne.variable}`}>{children}</body>
    </html>
  );
}
