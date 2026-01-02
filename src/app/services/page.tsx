import type { Metadata } from "next";
import Image from "next/image";
import NavBar from "@/layouts/NavBar";
import Footer from "@/layouts/Footer";
import LinkButton from "@/components/buttons/LinkButton";
import styles from "@/app/page.module.css";
import serviceStyles from "@/layouts/styles/style.module.css";

export const metadata: Metadata = {
  title: "Our Services | KB & Co Solicitors",
  description:
    "Explore our legal services including Employment Law, Immigration Law, Family Law, and Commercial & Business Law.",
  keywords: [
    "legal services",
    "employment law",
    "immigration law",
    "family law",
    "commercial law",
    "business law",
  ],
  openGraph: {
    title: "Our Services | KB & Co Solicitors",
    description:
      "Expert legal services across multiple practice areas. From employment to immigration, family to commercial law.",
    type: "website",
    url: "https://kbsolicitors.com/services",
  },
};

export default function Services() {
  const services = [
    {
      image: "/employment_law.svg",
      title: "Employment Law",
      description:
        "Advice on workplace rights, disputes, and employment issues",
    },
    {
      image: "/immigration_law.svg",
      title: "Immigration Law",
      description: "Clear guidance on UK immigration applications and status",
    },
    {
      image: "/family_law.svg",
      title: "Children & Family Law",
      description: "Sensitive support in family and children matters",
    },
    {
      image: "/commercial_law.svg",
      title: "Commercial & Business Law",
      description: "Practical legal advice for businesses and entrepreneurs",
    },
  ];

  return (
    <div className={styles.page}>
      <NavBar hideActions />
      <section className={styles.hero}>
        <h1>Our Services</h1>
        <p>
          We provide expert legal advice across multiple practice areas,
          tailored to your needs.
        </p>
      </section>
      <section className={serviceStyles.services}>
        <div className={serviceStyles.cards}>
          {services.map((service, i) => (
            <div key={i} className={serviceStyles.card}>
              <Image
                src={service.image}
                alt={service.title + " illustration"}
                width={100}
                height={100}
              />
              <strong>{service.title}</strong>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section
        style={{
          padding: "4rem 2rem",
          textAlign: "center",
        }}
      >
        <LinkButton label="Request a Consultation" path="/consultation" />
      </section>
      <Footer />
    </div>
  );
}
