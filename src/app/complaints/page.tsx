import type { Metadata } from "next";
import NavBar from "@/layouts/NavBar";
import Footer from "@/layouts/Footer";
import Section from "@/layouts/Section";
import LocationMarker from "@/components/icons/LocationMarker";
import styles from "@/app/page.module.css";

export const metadata: Metadata = {
  title: "Complaints Procedure | KB & Co Solicitors",
  description:
    "Our complaints procedure. We are committed to providing high-quality service and handling complaints fairly.",
  keywords: [
    "complaints",
    "complaints procedure",
    "legal ombudsman",
    "service",
  ],
  openGraph: {
    title: "Complaints Procedure | KB & Co Solicitors",
    description:
      "Understand our complaints procedure and how we handle service issues.",
    type: "website",
    url: "https://kbsolicitors.com/complaints",
  },
};

export default function Complaints() {
  return (
    <div className={styles.page}>
      <NavBar hideActions />
      <section className={styles.hero}>
        <h1>Complaints Procedure</h1>
        <p>
          We are committed to providing a high-quality legal service. If you are
          unhappy with our service, we have a clear complaints procedure.
        </p>
      </section>
      <Section
        title="How We Handle Complaints"
        image="/complaints_image.png"
        content={
          <div>
            <p
              style={{
                color: "var(--color-text)",
                marginBottom: "1.5rem",
              }}
            >
              If you are unhappy with our service, please contact us in writing.
              <br />
              Complaints will be acknowledged within 5 working days and reviewed
              fairly. If unresolved, you may refer your complaint to Legal
              Ombudsman.
            </p>
            <div>
              <strong style={{ color: "var(--color-text)" }}>
                Legal Ombudsman
              </strong>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  marginTop: "1rem",
                  color: "var(--color-text)",
                }}
              >
                <LocationMarker />
                <p style={{ margin: 0 }}>PO Box 6860, Wolverhampton WV1 9WJ</p>
              </div>
            </div>
          </div>
        }
      />
      <Footer />
    </div>
  );
}
