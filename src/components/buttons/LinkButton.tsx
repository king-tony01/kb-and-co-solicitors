import Link from "next/link";
import styles from "./styles/style.module.css";

function LinkButton({ path, label }: { path: string; label: string }) {
  return (
    <Link className={styles.link} href={path}>
      {label}
    </Link>
  );
}

export default LinkButton;
