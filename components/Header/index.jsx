import  React  from  "react"
import { Typography } from 'antd';
import styles from "./styles.module.css"

export default function  Header (){
  return (   
    <header className={styles.header}>
        <Typography.Title level={1} >
          <h1 className={styles.title}>DevReads</h1>
        </Typography.Title>  
    </header>
)}
