import type { Metadata } from "next";
import NavBar from "@/layouts/NavBar";
import Footer from "@/layouts/Footer";
import Section from "@/layouts/Section";
import CheckCircle from "@/components/icons/CheckCircle";
import styles from "@/app/page.module.css";

export const metadata: Metadata = {
  title: "Why Choose Us | KB & Co Solicitors",
  description:
    "Discover why KB & Co Solicitors is the right choice for your legal needs. SRA regulated, transparent costs, and client-focused service.",
  keywords: [
    "why choose us",
    "SRA regulated",
    "transparent costs",
    "client-focused",
    "professional service",
  ],
  openGraph: {
    title: "Why Choose Us | KB & Co Solicitors",
    description:
      "Choose KB & Co Solicitors for professional, regulated legal services with transparent costs and client-focused advice.",
    type: "website",
    url: "https://kbsolicitors.com/why-choose-us",
  },
};

export default function WhyChooseUs() {
  const reasons = [
    "Regulated by the Solicitors Regulation Authority",
    "Clear communication and transparent costs",
    "Practical, outcome-focused advice",
    "Professional, discreet, and client-focused service",
  ];

  return (
    <div className={styles.page}>
      <NavBar hideActions />
      <section className={styles.hero}>
        <h1>Why Choose Us</h1>
        <p>
          We are committed to providing professional, ethical legal services
          that prioritise your needs.
        </p>
      </section>
      <Section
        title="Our Strengths"
        image="/why_choose_us_image.svg"
        content={
          <ul>
            {reasons.map((reason, i) => (
              <li
                key={i}
                style={{
                  listStyle: "none",
                  display: "flex",
                  alignItems: "center",
                  margin: "1.5rem 0",
                  gap: "1rem",
                  color: "var(--color-text)",
                }}
              >
                <CheckCircle /> {reason}
              </li>
            ))}
          </ul>
        }
      />
      <Footer />
    </div>
  );
}
