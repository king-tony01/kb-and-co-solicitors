import styles from "./styles/style.module.css";
function Footer() {
  return (
    <footer className={styles.footer}>
      <p style={{ color: "#9E9E9E" }}>
        KBCO Solicitors is authorised and regulated by the Solicitors Regulation
        Authority (SRA). <br />
        SRA number: 659757
      </p>
      <div>
        <strong style={{ color: "var(--color-white)" }}>
          Professional Indemnity Insurance
        </strong>
        <p style={{ color: "#9E9E9E", maxWidth: "50rem" }}>
          We maintain professional indemnity insurance in accordance with SRA’s
          requirements. Details of our insurer and territorial coverage are
          available on request.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
