import Image from "next/image";
import React from "react";
import styles from "@/layouts/styles/style.module.css";

function Services() {
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
    <section className={styles.services}>
      <h2>Services</h2>
      <div className={styles.cards}>
        {services.map((service, i) => (
          <div key={i} className={styles.card}>
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
  );
}

export default Services;
