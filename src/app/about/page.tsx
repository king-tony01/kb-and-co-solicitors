import type { Metadata } from "next";
import NavBar from "@/layouts/NavBar";
import Footer from "@/layouts/Footer";
import Section from "@/layouts/Section";
import styles from "@/app/page.module.css";

export const metadata: Metadata = {
  title: "About Us | KB & Co Solicitors",
  description:
    "Learn about KB & Co Solicitors. We provide solicitor-led legal services with a strong focus on personal attention and high professional standards.",
  keywords: [
    "about us",
    "law firm",
    "solicitors",
    "legal services",
    "professional standards",
  ],
  openGraph: {
    title: "About Us | KB & Co Solicitors",
    description:
      "Learn about KB & Co Solicitors and our commitment to professional legal services.",
    type: "website",
    url: "https://kbsolicitors.com/about",
  },
};

export default function About() {
  return (
    <div className={styles.page}>
      <NavBar hideActions />
      <section className={styles.hero}>
        <h1>About Us</h1>
        <p>
          We are a firm of solicitors providing legal services to individuals
          and businesses with professionalism and care.
        </p>
      </section>
      <Section
        title="Who We Are"
        image="/about_image.png"
        content={
          <p
            style={{
              color: "var(--color-text)",
            }}
          >
            We provide solicitor-led legal services with a strong focus on
            personal attention and high professional standards, regardless of
            the nature or value of the matter. <br /> We advise both individuals
            and businesses across legal areas, including sensitive or
            life-changing matters handled with care and discretion.
          </p>
        }
      />
      <Section
        title="Our Commitment"
        image="/why_choose_us_image.png"
        content={
          <div
            style={{
              color: "var(--color-text)",
            }}
          >
            <p>
              We are committed to providing clear, practical legal advice
              delivered with care and professionalism. Our approach is
              transparent, client-focused, and outcome-oriented.
            </p>
            <p>
              Every matter is treated with the attention it deserves, with
              regular communication and clear explanations of your options.
            </p>
          </div>
        }
      />
      <Footer />
    </div>
  );
}
