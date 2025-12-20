import React, { useState } from "react";
import styles from "@/components/inputs/styles/style.module.css";

function TextArea({
  label,
  value,
  placeholder = "Placeholder here...",
  onChange,
}: {
  label: string;
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
}) {
  const [input, setInput] = useState<string>(value);

  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    const { value } = e.target;
    setInput(value);
    onChange(value);
  }
  return (
    <div className={styles.input}>
      <label htmlFor={label}>{label}</label>
      <textarea
        name=""
        id=""
        placeholder={placeholder}
        onChange={handleChange}
        value={input}
      ></textarea>
    </div>
  );
}

export default TextArea;
