import React from 'react'
import styles from "./styles.module.css"

const Command = (props) => {
    return (
        <code {...props} className={styles.code}>
            <span className={styles.sign}> {">"} </span>{props.children}
        </code>
    )
}

export default Command 
