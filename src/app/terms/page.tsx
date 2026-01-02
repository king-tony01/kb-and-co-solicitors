import type { Metadata } from "next";
import NavBar from "@/layouts/NavBar";
import Footer from "@/layouts/Footer";
import Section from "@/layouts/Section";
import styles from "@/app/page.module.css";

export const metadata: Metadata = {
  title: "Terms of Business | KB & Co Solicitors",
  description:
    "Our Terms of Business outline the basis on which we provide legal services, in accordance with SRA rules.",
  keywords: ["terms of business", "terms and conditions", "SRA rules", "legal"],
  openGraph: {
    title: "Terms of Business | KB & Co Solicitors",
    description:
      "Understand the terms and conditions under which we provide legal services.",
    type: "website",
    url: "https://kbsolicitors.com/terms",
  },
};

export default function Terms() {
  return (
    <div className={styles.page}>
      <NavBar hideActions />
      <section className={styles.hero}>
        <h1>Terms of Business</h1>
        <p>These Terms outline the basis on which we provide legal services.</p>
      </section>
      <Section
        title="Engagement Terms"
        image="/terms_image.svg"
        content={
          <div
            style={{
              color: "var(--color-text)",
            }}
          >
            <p>
              We act in accordance with the Solicitors Regulation Authority's
              rules. Full engagement terms will be provided before work
              commences.
            </p>
            <p>All matters are governed by the law of England and Wales.</p>
            <p>
              By instructing us, you agree to these terms and acknowledge that
              you understand the scope of our services and our fees.
            </p>
          </div>
        }
      />
      <Footer />
    </div>
  );
}
