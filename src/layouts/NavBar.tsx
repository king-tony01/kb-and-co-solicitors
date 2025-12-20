import Email from "@/components/icons/Email";
import Logo from "@/components/icons/Logo";
// import Phone from "@/components/icons/Phone";
import styles from "./styles/style.module.css";
import LinkButton from "@/components/buttons/LinkButton";

function NavBar({ hideActions }: { hideActions?: boolean }) {
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
      <div className={styles.flex}>
        <Logo />
        <h3 className={styles.logo}>
          KB and <span>Co Solicitors</span>
        </h3>
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
