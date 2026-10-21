import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import Chatbot from "@/components/Chatbot";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nadeesh Malaka | Software Engineer · Full-Stack & AI Solutions",
  description:
    "Portfolio of Nadeesh Malaka Chathuranga, a Software Engineer specializing in scalable full-stack web applications (React, Next.js, Node.js, Laravel, Python, FastAPI), cloud deployment (AWS, GCP, Docker), and AI-powered solutions.",
  keywords: [
    "Nadeesh Malaka",
    "Nadeesh Malaka Chathuranga",
    "Software Engineer",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Laravel Developer",
    "Python Developer",
    "FastAPI",
    "AI Machine Learning",
    "Docker AWS GCP",
    "Sri Lanka Software Engineer",
    "Portfolio",
  ],
  authors: [{ name: "Nadeesh Malaka Chathuranga" }],
  creator: "Nadeesh Malaka Chathuranga",
  openGraph: {
    type: "website",
    title: "Nadeesh Malaka | Software Engineer · Full-Stack & AI Solutions",
    description:
      "Explore the portfolio of Nadeesh Malaka, featuring full-stack web applications, AI/ML systems, cloud deployments (AWS, Docker), and professional engineering experience.",
    siteName: "Nadeesh Malaka Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nadeesh Malaka | Software Engineer · Full-Stack & AI Solutions",
    description:
      "Explore the portfolio of Nadeesh Malaka, featuring full-stack web applications, AI/ML systems, cloud deployments (AWS, Docker), and professional engineering experience.",
  },
  icons: {
    icon: "/favicon.ico",
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
    >
      <body
        suppressHydrationWarning
        className="bg-[#0a0f1e] text-slate-100 antialiased overflow-x-hidden"
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
          <Chatbot />
        </ThemeProvider>
      </body>
    </html>
  );
}
