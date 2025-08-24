import type { Metadata } from "next";
import { Sora, Londrina_Outline } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sora",
});

const londrina = Londrina_Outline({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-londrina",
});

export const metadata: Metadata = {
  title: "Aytac | Frontend Developer",
  description:
    "Portfolio of Aytac, a passionate Frontend Developer specializing in React, Next.js, and modern web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${sora.variable} ${londrina.variable} antialiased bg-white text-gray-900 dark:bg-black dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
