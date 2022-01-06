import React from "react";
import styles from "./styles.module.css";

export default function Section(props) {
  return (
    <section className={styles.section} {...props}>
      {props.children}
    </section>
  );
}
