import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Jamuna T G | Full-Stack Engineer & AI/Agentic Systems Developer",
  description:
    "Personal engineering portfolio of Jamuna T G. Information Science undergraduate at Sir MVIT Bengaluru, full-stack developer, and open-source contributor. Explore VendorRisk AI, SILENT SOS, and AI systems.",
  keywords: [
    "Jamuna T G",
    "Sir MVIT Bengaluru",
    "Information Science",
    "Full-Stack Developer",
    "Software Engineer",
    "AI Engineer",
    "Agentic AI",
    "RAG",
    "VendorRisk AI",
    "SILENT SOS",
    "CivicTrack",
    "Node.js",
    "Express.js",
    "REST APIs",
    "React",
    "Next.js",
    "Machine Learning"
  ],
  authors: [{ name: "Jamuna T G" }],
  creator: "Jamuna T G",
  metadataBase: new URL("https://jamunatg.dev"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jamunatg.dev",
    title: "Jamuna T G | Full-Stack Engineer & AI Systems Developer",
    description:
      "Building resilient full-stack systems, architecting agentic workflows, and turning complex ideas into production-ready software.",
    siteName: "Jamuna T G Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jamuna T G | Full-Stack & AI Engineer",
    description: "Full-stack developer, AI/ML architect, and hackathon winner.",
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#080a0f" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${plusJakarta.variable} antialiased selection:bg-cyan-500 selection:text-black font-sans`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={true}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
