import { Metadata } from "next";
import "./globals.css";
import { Sora, Inter } from "next/font/google";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${sora.variable} ${inter.variable}`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
