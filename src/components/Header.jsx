import styles from "./components.module.css";

export function Header(props) {
  return <h1 className={styles.heading}>{props.text}</h1>;
}
