import styles from "./styles.module.css";

/**
 * CommonButton
 * @param type
 * @param label
 * @param onClick
 * @returns {JSX.Element}
 * @constructor
 */
export const CommonButton = ({ label, type, onClick }) => (
  <button className={styles.button} type={type} onClick={onClick}>
    {label}
  </button>
);
