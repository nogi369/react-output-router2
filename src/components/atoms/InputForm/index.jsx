import styles from "./styles.module.css";

export const InputForm = ({
  disabled = false,
  onChange,
  onKeyDown,
  value,
  placeholder,
}) => (
  <input
    disabled={disabled}
    className={styles.input}
    type="text"
    onChange={onChange}
    onKeyDown={onKeyDown}
    value={value}
    placeholder={placeholder}
  />
);
