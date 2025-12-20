import LinkButton from "@/components/buttons/LinkButton";
import NavBar from "@/layouts/NavBar";
import Image from "next/image";
import styles from "@/app/page.module.css";
import Section from "@/layouts/Section";
import CheckCircle from "@/components/icons/CheckCircle";
import LocationMarker from "@/components/icons/LocationMarker";
import Footer from "@/layouts/Footer";
import CookiePolicy from "@/components/CookiePolicy";
import Services from "@/layouts/Services";

export default function Home() {
  return (
    <div className={styles.page}>
      <NavBar />
      <CookiePolicy />
      <section className={styles.hero}>
        <h1>
          Clear, practical legal advice, <br />
          delivered with care and professionalism
        </h1>
        <p>
          We are a firm of solicitors providing legal services to individuals
          and businesses. Our approach is professional, transparent, and
          client-focused, with an emphasis on clear advice and practical
          solutions.
        </p>

        <LinkButton label="Request  a consultation" path="/consultation" />
      </section>
      <Section
        title="About Us"
        image="/about_image.svg"
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
      {/* Services will go here */}
      <Services />
      <Section
        title="Why Choose Us"
        image="/why_choose_us_image.svg"
        content={
          <ul>
            {[
              "Regulated by the Solicitors Regulation Authority",
              "Clear communication and transparent costs",
              "Practical, outcome-focused advice",
              "Professional, discreet, and client-focused service",
            ].map((con, i) => (
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
                <CheckCircle /> {con}
              </li>
            ))}
          </ul>
        }
      />
      <Section
        title="Complaints Procedure"
        image="/complaints_image.svg"
        content={
          <div>
            <p
              style={{
                color: "var(--color-text)",
              }}
            >
              We are committed to providing a high-quality legal service. If you
              are unhappy with our service, please contact us in writing. <br />
              Complaints will be acknowledged within 5 working days and reviewed
              fairly. If unresolved, you may refer your complaint to Legal
              Ombudsman.
            </p>
            <div>
              <strong>Legal Obudsman</strong>
              {[
                {
                  icon: <LocationMarker />,
                  label: "PO Box 6860, Wolverhampton WV1 9WJ",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                  }}
                >
                  {item.icon}{" "}
                  <p
                    style={{
                      color: "var(--color-text)",
                    }}
                  >
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        }
      />
      <Section
        title="Pricing & Transparency"
        image="/pricing_image.svg"
        content={
          <div>
            <p>
              We aim to be transparent about our fees. Costs depend on the
              complexity of the matter. Fees may be fixed, hourly, or staged.
              Disbursements are charged separately. A personalised costs
              estimate will always be provided before work begins.
            </p>
          </div>
        }
      />
      <Section
        title="Terms of Business"
        image="/terms_image.svg"
        content={
          <div>
            <p>
              These Terms outline the basis on which we provide legal services.
            </p>
            <p>
              We act in accordance with the Solicitors Regulation Authority’s
              rules. Full engagement terms will be provided before we commences.
            </p>
            <p>All matters are governed by the law of England and Wales.</p>
          </div>
        }
      />
      <Section
        title="Privacy Policy"
        image="/privacy_image.svg"
        content={
          <div>
            <p>
              We collect and process personal data in accordance with UK GDPR
              and the Data Protection Act 2018.
            </p>
            <p>
              Personal data is used only to provide legal services, comply with
              legal obligations, and manage our practice.
            </p>
            <p>
              You have rights including access, correction, and erasure of your
              data.
            </p>
          </div>
        }
      />
      <Footer />
    </div>
  );
}
