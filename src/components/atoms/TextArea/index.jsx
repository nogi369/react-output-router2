import styles from "./styles.module.css";

export const TextArea = ({ placeholder, value, onChange }) => {
  return (
    <textarea
      className={styles.text}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};
