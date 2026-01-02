"use client";
import Email from "@/components/icons/Email";
import Logo from "@/components/icons/Logo";
// import Phone from "@/components/icons/Phone";
import styles from "./styles/style.module.css";
import LinkButton from "@/components/buttons/LinkButton";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

function NavBar({ hideActions }: { hideActions?: boolean }) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Pricing", path: "/pricing" },
  ];

  const contacts = [
    // {
    //   type: "phone",
    //   value: "0300 555 0333",
    //   icon: <Phone />,
    // },

    {
      type: "email",
      value: "enquiries@kbcosolicitors.com",
      icon: <Email />,
    },
  ];
  return (
    <nav className={styles.nav_bar}>
      <Link href={"/"} className={styles.flex}>
        <Logo />
        <h3 className={styles.logo}>
          KB and <span>Co Solicitors</span>
        </h3>
      </Link>

      {/* Hamburger Menu Button */}
      <button
        className={styles.hamburger}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <span className={isMenuOpen ? styles.open : ""}></span>
        <span className={isMenuOpen ? styles.open : ""}></span>
        <span className={isMenuOpen ? styles.open : ""}></span>
      </button>

      <div
        className={`${styles.nav_links} ${
          isMenuOpen ? styles.nav_links_open : ""
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.path}
            href={link.path}
            className={`${styles.nav_link} ${
              pathname === link.path ? styles.active : ""
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </div>
      <div className={styles.flex}>
        <div className={styles.contacts}>
          {contacts.map((contact) => (
            <div key={contact.type} className={styles.contact_info}>
              {contact.icon}
              <a href={`mailto:${contact.value}`}>{contact.value}</a>
            </div>
          ))}
        </div>
        {!hideActions && (
          <LinkButton label="Request a consultation" path="/consultation" />
        )}
      </div>
    </nav>
  );
}

export default NavBar;
