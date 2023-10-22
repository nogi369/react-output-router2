/**
 * Navigation
 *
 * @package components
 */
import { NAVIGATION_PATH } from "../../../constants/navigations";
import { NavigationLink } from "../../atoms/NavigationLink";
import styles from "./styles.module.css";

/**
 * Navigation
 * @returns {JSX.Element}
 * @constructor
 */
export const Navigation = () => {
  return (
    <nav>
      <ul className={styles.ul}>
        <NavigationLink title={"Top"} linkPath={NAVIGATION_PATH.TOP} />
        <NavigationLink title={"Create"} linkPath={NAVIGATION_PATH.CREATE} />
      </ul>
    </nav>
  );
};
