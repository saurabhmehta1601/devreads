import  React  from  "react"
import { Typography  } from 'antd';
import styles from "./styles.module.css"


export default function Section({children}){
  return (   
      <div className={styles.section}>
        {children}
      </div>
)}

