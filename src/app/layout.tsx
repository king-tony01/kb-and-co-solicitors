import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "KB and Co Solicitors | Legal Services",
  description:
    "Clear, practical legal advice, delivered with care and professionalism. We provide solicitor-led legal services with a strong focus on personal attention and high professional standards. Regulated by the Solicitors Regulation Authority (SRA).",
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
