import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nadeesh Malaka | Full Stack Developer",
  description:
    "Personal portfolio of Nadeesh Malaka Chathuranga — Associate Software Engineer & Full Stack Developer based in Colombo, Sri Lanka. Specializing in React, Node.js, and modern web technologies.",
  keywords: [
    "Nadeesh Malaka",
    "Full Stack Developer",
    "React Developer",
    "Node.js",
    "Next.js",
    "Sri Lanka",
    "Software Engineer",
    "Portfolio",
  ],
  authors: [{ name: "Nadeesh Malaka Chathuranga" }],
  creator: "Nadeesh Malaka Chathuranga",
  openGraph: {
    type: "website",
    title: "Nadeesh Malaka | Full Stack Developer",
    description:
      "Associate Software Engineer & Full Stack Developer — building scalable web applications with modern technologies.",
    siteName: "Nadeesh Malaka Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nadeesh Malaka | Full Stack Developer",
    description:
      "Associate Software Engineer & Full Stack Developer — building scalable web applications with modern technologies.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-[#0a0f1e] text-slate-100 antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
