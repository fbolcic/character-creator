import styles from "./components.module.css";

export function Textarea(props) {
  return (
    <div className={styles.inputBox}>
      <label>{props.label}</label>
      <textarea cols="30" rows="5" value={props.value} onChange={(e) => props.onChange(e.target.value)} />
    </div>
  );
}
