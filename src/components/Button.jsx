import styles from "./components.module.css";

export function Button(props) {
  return (
    <button onClick={props.onClick} className={styles.button}>
      {props.text}
    </button>
  );
}
