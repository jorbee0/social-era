import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import WhatsAppButton from "@/components/WhatsAppButton"; // ✅ ADD THIS

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Social Era | Premium Corporate Digital Growth Partner",
  description:
    "The Social Era Digital Pvt. Ltd. provides structured, process-driven digital growth strategies for modern corporations.",
  keywords: [
    "digital marketing",
    "seo services",
    "web development",
    "social media marketing",
    "corporate digital growth",
    "Social Era Digital"
  ],
  authors: [{ name: "Social Era Digital Pvt. Ltd." }],
  creator: "Social Era Digital",
  publisher: "Social Era Digital",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Social Era | Digital Growth Partner",
    description:
      "Process-driven digital growth strategies for modern corporations.",
    url: "https://social-era.vercel.app/",
    siteName: "Social Era",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
  verification: {
    google: "ls_Qm2zL2mxklJuQRqIjljcodiljz_OS7m6IWlctAZE",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${outfit.variable} font-inter antialiased transition-colors duration-300`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />

          {/* ✅ WHATSAPP BUTTON (GLOBAL) */}
          <WhatsAppButton />

        </ThemeProvider>
      </body>
    </html>
  );
}