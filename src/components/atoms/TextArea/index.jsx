import styles from "./styles.module.css";

export const TextArea = ({
  disabled = false,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <textarea
      disabled={disabled}
      className={styles.text}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};
