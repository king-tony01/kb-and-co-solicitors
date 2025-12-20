import React from "react";
import styles from "./styles/style.module.css";

function Button({
  label = "Click me",
  onClick,
  loading,
  disabled,
}: {
  label: string;
  onClick: () => void;
  loading: boolean;
  disabled: boolean;
}) {
  return (
    <button
      className={`${styles.button} ${disabled ? styles.disabled : ""} ${
        loading ? styles.loading : ""
      }`}
      disabled={disabled || loading}
      onClick={onClick}
    >
      {loading ? <span></span> : label}
    </button>
  );
}

export default Button;
