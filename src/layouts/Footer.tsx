import styles from "./styles/style.module.css";
import Link from "next/link";

function Footer() {
  const footerLinks = [
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Why Choose Us", path: "/why-choose-us" },
    { label: "Pricing", path: "/pricing" },
    { label: "Complaints", path: "/complaints" },
    { label: "Terms", path: "/terms" },
    { label: "Privacy", path: "/privacy" },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.footer_links}>
        {footerLinks.map((link) => (
          <Link key={link.path} href={link.path} className={styles.footer_link}>
            {link.label}
          </Link>
        ))}
      </div>
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
