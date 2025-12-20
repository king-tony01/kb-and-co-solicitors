"use client";

import { useEffect, useState } from "react";
import styles from "./styles/cookie-policy.module.css";

function CookiePolicy() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if cookie has been accepted
    const cookieAccepted = localStorage.getItem("cookiePolicy");

    if (!cookieAccepted) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    // Store in localStorage
    localStorage.setItem("cookiePolicy", "accepted");

    // Also set an actual cookie (optional, for backend use)
    const expiryDate = new Date();
    expiryDate.setFullYear(expiryDate.getFullYear() + 1);
    document.cookie = `cookiePolicy=accepted; expires=${expiryDate.toUTCString()}; path=/`;

    // Fade out effect
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className={styles.cookieOverlay}>
      <div className={styles.cookieCard}>
        <div className={styles.content}>
          <h2 className={styles.title}>COOKIE POLICY</h2>
          <p className={styles.text}>
            This website uses cookie to ensure functionality and analyse usage.
          </p>
          <p className={styles.text}>
            You can manage cookie through your browser settings.
          </p>
        </div>
        <button className={styles.button} onClick={handleAccept}>
          OK
        </button>
      </div>
    </div>
  );
}

export default CookiePolicy;
