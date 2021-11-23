import  React  from  "react"
import { Typography  } from 'antd';
import styles from "./styles.module.css"


export default function Section({title}){
  return (   
      <div className={styles.section}>
        <Typography.Title  level={3}  className={styles.title}>{title}</Typography.Title>
      </div>
)}

