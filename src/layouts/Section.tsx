import Image from "next/image";
import React from "react";
import styles from "./styles/style.module.css";

function Section({
  image,
  title,
  content,
}: {
  image: string;
  title: string;
  content: React.ReactNode;
}) {
  return (
    <section className={styles.section}>
      <Image
        width={100}
        height={100}
        src={image}
        alt={title + " Illustration"}
        className={styles.section_image}
      />
      <div className={styles.section_right}>
        <h2>{title}</h2>
        <div>{content}</div>
      </div>
    </section>
  );
}

export default Section;
