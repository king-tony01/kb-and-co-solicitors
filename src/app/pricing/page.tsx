import type { Metadata } from "next";
import NavBar from "@/layouts/NavBar";
import Footer from "@/layouts/Footer";
import Section from "@/layouts/Section";
import styles from "@/app/page.module.css";

export const metadata: Metadata = {
  title: "Pricing & Transparency | KB & Co Solicitors",
  description:
    "Our transparent pricing approach. We provide clear costs estimates before work begins.",
  keywords: ["pricing", "costs", "fees", "transparent", "estimates"],
  openGraph: {
    title: "Pricing & Transparency | KB & Co Solicitors",
    description:
      "Understand our transparent approach to pricing and costs for legal services.",
    type: "website",
    url: "https://kbsolicitors.com/pricing",
  },
};

export default function Pricing() {
  return (
    <div className={styles.page}>
      <NavBar hideActions />
      <section className={styles.hero}>
        <h1>Pricing & Transparency</h1>
        <p>
          We aim to be transparent about our fees and provide clear costs
          estimates before work begins.
        </p>
      </section>
      <Section
        title="How We Charge"
        image="/pricing_image.png"
        content={
          <div
            style={{
              color: "var(--color-text)",
            }}
          >
            <p>
              Costs depend on the complexity of the matter. Fees may be fixed,
              hourly, or staged. Disbursements are charged separately.
            </p>
            <p>
              A personalised costs estimate will always be provided before work
              begins, so you know exactly what to expect.
            </p>
            <p>
              We believe in transparent costs and clear communication throughout
              your matter.
            </p>
          </div>
        }
      />
      <Footer />
    </div>
  );
}
