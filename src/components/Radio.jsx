import styles from "./components.module.css";

export function Radio(props) {
  return (
    <div className={styles.inputBox}>
      <label>{props.label}</label>
      <div className={styles.radioGroup}>
        {props.options.map((option) => (
          <div key={option} className={styles.radioBox}>
            <label htmlFor={option}>{option}</label>
            <input
              type="radio"
              name={option}
              id={option}
              checked={props.value === option}
              onChange={() => props.onChange(option)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
