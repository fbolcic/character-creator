export function Input(props) {
  return <input value={props.value} type="text" onChange={(e) => props.onChange(e.target.value)} />;
}
