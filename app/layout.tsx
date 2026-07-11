import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.hotelaltana.com"),

  title: {
    default: "Hotel Altana | Hotel en San Antonio, Cali",
    template: "%s | Hotel Altana",
  },

  description:
    "Hotel Altana ofrece habitaciones cómodas en el tradicional barrio San Antonio de Cali. Reserva directa por WhatsApp, desayuno incluido, excelente ubicación y atención personalizada.",

  keywords: [
    "Hotel Altana",
    "Hotel en Cali",
    "Hotel San Antonio Cali",
    "Hotel cerca del Gato del Río",
    "Hotel cerca del Bulevar del Río",
    "Hotel boutique Cali",
    "Hotel económico Cali",
    "Hotel con desayuno",
    "Reserva hotel Cali",
  ],

  authors: [
    {
      name: "Hotel Altana",
    },
  ],

  creator: "Hotel Altana",

  publisher: "Hotel Altana",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Hotel Altana | Hotel en San Antonio, Cali",
    description:
      "Reserva directamente con Hotel Altana y disfruta de una excelente ubicación en el barrio San Antonio de Cali.",
    url: "https://www.hotelaltana.com",
    siteName: "Hotel Altana",
    locale: "es_CO",
    type: "website",
  },

  alternates: {
    canonical: "https://www.hotelaltana.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}