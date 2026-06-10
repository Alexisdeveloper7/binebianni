import { Geist, Geist_Mono } from "next/font/google";
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
  openGraph: {
    title: "Consultoría Social Bi Ne Bianni",
    description:
      "Construimos confianza. Generamos sostenibilidad. Consultoría especializada en gestión social, sostenibilidad y desarrollo comunitario.",
    type: "website",
    locale: "es_MX",
    siteName: "Consultoría Social Bi Ne Bianni",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#30435D",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="es-MX"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-white text-[#1f2937] antialiased">
        {children}
      </body>
    </html>
  );
}