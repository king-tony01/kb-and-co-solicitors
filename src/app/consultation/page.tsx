import type { Metadata } from "next";
import Footer from "@/layouts/Footer";
import Form from "@/layouts/Form";
import NavBar from "@/layouts/NavBar";
import Image from "next/image";
import React from "react";
import styles from "@/app/consultation/styles/style.module.css";

export const metadata: Metadata = {
  title: "Request a Consultation | KB & Co Solicitors",
  description:
    "Book your legal consultation with KB & Co Solicitors. Discuss your case with our expert solicitors and get professional legal advice tailored to your needs.",
  keywords: [
    "legal consultation",
    "book consultation",
    "legal advice",
    "solicitor consultation",
    "free consultation",
  ],
  openGraph: {
    title: "Request a Consultation | KB & Co Solicitors",
    description:
      "Book your legal consultation with KB & Co Solicitors. Discuss your case with our expert solicitors.",
    type: "website",
    url: "https://kbsolicitors.com/consultation",
  },
};

function Consultation() {
  return (
    <section>
      <NavBar hideActions />
      <div className={styles.consultation}>
        <div className={styles.image}>
          <Image
            width={1000}
            height={700}
            src={"/consultation.png"}
            alt={"Consultation illustration"}
          />
        </div>
        <div>
          <h1>Request a Consultation</h1>
          <p>Fill in this form to get started</p>
          <Form />
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Consultation;
