import React, { useState } from "react";
import styles from "@/components/inputs/styles/style.module.css";

function Input({
  label,
  value,
  placeholder = "Placeholder here...",
  onChange,
  type,
}: {
  label: string;
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
  type: string;
}) {
  const [input, setInput] = useState<string>(value);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    setInput(value);
    onChange(value);
  }
  return (
    <div className={styles.input}>
      <label htmlFor={label}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
        value={input}
      />
    </div>
  );
}

export default Input;
