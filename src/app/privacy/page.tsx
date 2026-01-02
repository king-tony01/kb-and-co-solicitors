import type { Metadata } from "next";
import NavBar from "@/layouts/NavBar";
import Footer from "@/layouts/Footer";
import Section from "@/layouts/Section";
import styles from "@/app/page.module.css";

export const metadata: Metadata = {
  title: "Privacy Policy | KB & Co Solicitors",
  description:
    "Our Privacy Policy. We collect and process personal data in accordance with UK GDPR and the Data Protection Act 2018.",
  keywords: [
    "privacy policy",
    "GDPR",
    "data protection",
    "personal data",
    "privacy",
  ],
  openGraph: {
    title: "Privacy Policy | KB & Co Solicitors",
    description:
      "Understand how we collect, use, and protect your personal data.",
    type: "website",
    url: "https://kbsolicitors.com/privacy",
  },
};

export default function Privacy() {
  return (
    <div className={styles.page}>
      <NavBar hideActions />
      <section className={styles.hero}>
        <h1>Privacy Policy</h1>
        <p>
          We collect and process personal data in accordance with UK GDPR and
          the Data Protection Act 2018.
        </p>
      </section>
      <Section
        title="Your Data Rights"
        image="/privacy_image.svg"
        content={
          <div
            style={{
              color: "var(--color-text)",
            }}
          >
            <p>
              Personal data is used only to provide legal services, comply with
              legal obligations, and manage our practice.
            </p>
            <p>
              You have rights including access, correction, and erasure of your
              data.
            </p>
            <p>
              We take the security and confidentiality of your information
              seriously and implement appropriate safeguards to protect your
              personal data.
            </p>
          </div>
        }
      />
      <Footer />
    </div>
  );
}
