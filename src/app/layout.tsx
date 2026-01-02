import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "KB & Co Solicitors | Expert Legal Services & Consultation",
  description:
    "Clear, practical legal advice delivered with care and professionalism. KB & Co Solicitors provides expert legal counsel and representation with a strong focus on personal attention and high professional standards. Regulated by the Solicitors Regulation Authority (SRA).",
  keywords: [
    "solicitors",
    "legal services",
    "legal advice",
    "legal consultation",
    "legal representation",
    "SRA regulated",
  ],
  authors: [{ name: "KB & Co Solicitors" }],
  creator: "KB & Co Solicitors",
  publisher: "KB & Co Solicitors",
  formatDetection: {
    email: false,
    telephone: true,
    address: true,
  },
  // viewport: {
  //   width: "device-width",
  //   initialScale: 1,
  //   maximumScale: 5,
  // },
  openGraph: {
    title: "KB & Co Solicitors | Expert Legal Services",
    description:
      "Professional legal services with expert counsel and representation. We provide solicitor-led advice with a focus on personal attention.",
    type: "website",
    locale: "en_GB",
    siteName: "KB & Co Solicitors",
    url: "https://kbsolicitors.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://kbsolicitors.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.variable}>
        {children}
        {/* <RootLayout>{children}</RootLayout> */}
      </body>
    </html>
  );
}
