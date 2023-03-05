import styles from "./components.module.css";

export function Input(props) {
  return (
    <div className={styles.inputBox}>
      <label>{props.label}</label>
      <input value={props.value} type="text" onChange={(e) => props.onChange(e.target.value)} />
    </div>
  );
}
