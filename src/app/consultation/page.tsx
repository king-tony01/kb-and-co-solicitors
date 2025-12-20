"use client";
import Footer from "@/layouts/Footer";
import Form from "@/layouts/Form";
import NavBar from "@/layouts/NavBar";
import Image from "next/image";
import React from "react";
import styles from "@/app/consultation/styles/style.module.css";

function Consultation() {
  return (
    <section>
      <NavBar hideActions />
      <div className={styles.consultation}>
        <Image
          width={100}
          height={100}
          src={"/consultation.svg"}
          alt={"Consultation illustration"}
          className={styles.image}
        />
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
