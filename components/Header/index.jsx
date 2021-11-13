import  React  from  "react"
import { Typography } from 'antd';
import styles from "./styles.module.css"

export default function  Header (){
  return (   
    <header className={styles.header}>
        <Typography.Title level={1} >
          <div className={styles.title}>DevReads</div>
        </Typography.Title>  
    </header>
)}
