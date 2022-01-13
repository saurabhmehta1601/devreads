import styles from "./styles.module.css";

export default function Output(props) {
  return (
    <code {...props} className={styles.code}>
      {props.children}
    </code>
  );
}
