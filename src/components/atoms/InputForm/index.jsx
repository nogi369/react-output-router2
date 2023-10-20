import styles from "./styles.module.css";

export const InputForm = ({ onChange, onKeyDown, value, placeholder }) => {
  return (
    <input
      className={styles.input}
      type="text"
      onChange={onChange}
      onKeyDown={onKeyDown}
      value={value}
      placeholder={placeholder}
    />
  );
};
