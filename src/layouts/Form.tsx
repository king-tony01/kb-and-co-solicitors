import Button from "@/components/buttons/Button";
import Input from "@/components/inputs/Input";
import { useState } from "react";
import styles from "./styles/style.module.css";
import TextArea from "@/components/inputs/TextArea";

function Form() {
  const [consultation, setConsultation] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    summary: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  // Check if all fields are filled
  const isFormValid = Object.values(consultation).every(
    (val) => val.trim() !== ""
  );
  const disabled = loading || !isFormValid;

  async function sendRequest(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!isFormValid) {
      setError("Please fill in all fields");
      return;
    }

    try {
      setLoading(true);
      setError(null);
      setSuccess(false);

      // Replace with your API endpoint
      const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT || "";

      if (!API_ENDPOINT) {
        setError("API endpoint not configured");
        return;
      }

      const res = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(consultation),
      });

      if (!res.ok) {
        throw new Error(`API error: ${res.status}`);
      }

      const data = await res.json();

      console.log("Success:", data);
      setSuccess(true);

      // Reset form
      setConsultation({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        summary: "",
      });

      // Clear success message after 3 seconds
      setTimeout(() => setSuccess(false), 3000);
    } catch (err: any) {
      console.error("Error:", err);
      setError(err.message || "Failed to send request. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className={styles.form} onSubmit={sendRequest}>
      {error && (
        <div style={{ color: "red", marginBottom: "1rem", fontSize: "0.9rem" }}>
          {error}
        </div>
      )}
      {success && (
        <div
          style={{ color: "green", marginBottom: "1rem", fontSize: "0.9rem" }}
        >
          ✓ Consultation request sent successfully! We'll contact you soon.
        </div>
      )}
      <div className={styles.grid}>
        <Input
          value={consultation.firstName}
          type="text"
          label="First name"
          placeholder="e.g John"
          onChange={(val) => {
            setConsultation((prev) => ({ ...prev, firstName: val }));
          }}
        />
        <Input
          value={consultation.lastName}
          type="text"
          label="Last name"
          placeholder="e.g Doe"
          onChange={(val) => {
            setConsultation((prev) => ({ ...prev, lastName: val }));
          }}
        />
      </div>
      <div className={styles.grid}>
        <Input
          value={consultation.email}
          type="email"
          label="Email"
          placeholder="e.g john.doe@example.com"
          onChange={(val) => {
            setConsultation((prev) => ({ ...prev, email: val }));
          }}
        />
        <Input
          value={consultation.phone}
          type="tel"
          label="Phone"
          placeholder="e.g +123 456 7890"
          onChange={(val) => {
            setConsultation((prev) => ({ ...prev, phone: val }));
          }}
        />
      </div>
      <TextArea
        value={consultation.summary}
        label="Brief Summary"
        placeholder="Briefly explain the services you need..."
        onChange={(val) => {
          setConsultation((prev) => ({ ...prev, summary: val }));
        }}
      />
      <br />
      <Button
        label={loading ? "Sending..." : "Request"}
        onClick={() => {}}
        disabled={disabled}
        loading={loading}
      />
    </form>
  );
}

export default Form;
