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
  title: "Yash Kachhadiya - Portfolio",
  description:
    "Hi, I'm Yash Kachhadiya, a Full Stack Software Engineer. I craft fast, scalable & beautiful web applications. Explore my projects and experience.",
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
