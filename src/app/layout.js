import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://binebianni.vercel.app"),

  title: "Consultoría Social Bi Ne Bianni | Gestión social y sostenibilidad",
  description:
    "Consultoría especializada en gestión social, sostenibilidad, desarrollo comunitario y relacionamiento territorial para proyectos en México.",
  keywords: [
    "Consultoría Social Bi Ne Bianni",
    "gestión social",
    "sostenibilidad",
    "desarrollo comunitario",
    "gestión territorial",
    "impacto social",
    "relacionamiento comunitario",
    "ESG",
  ],
  authors: [{ name: "Consultoría Social Bi Ne Bianni" }],
  creator: "Consultoría Social Bi Ne Bianni",

  icons: {
    icon: "/images/image.png",
    shortcut: "/images/image.png",
    apple: "/images/image.png",
  },

  openGraph: {
    title: "Consultoría Social Bi Ne Bianni | Gestión social y sostenibilidad",
    description:
      "Construimos confianza. Generamos sostenibilidad. Consultoría especializada en gestión social, sostenibilidad y desarrollo comunitario.",
    url: "https://binebianni.vercel.app",
    type: "website",
    locale: "es_MX",
    siteName: "Consultoría Social Bi Ne Bianni",
    images: [
      {
        url: "/images/image.png",
        width: 1200,
        height: 630,
        alt: "Consultoría Social Bi Ne Bianni",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Consultoría Social Bi Ne Bianni | Gestión social y sostenibilidad",
    description:
      "Construimos confianza. Generamos sostenibilidad. Consultoría especializada en gestión social, sostenibilidad y desarrollo comunitario.",
    images: ["/images/image.png"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="es-MX"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-white text-[#1f2937] antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}