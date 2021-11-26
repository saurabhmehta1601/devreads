import  React  from  "react"
import { Typography } from 'antd';
import styles from "./styles.module.css"
import  Link from "next/link"


export default function  Header (){
  return (   
    <header className={styles.header}>
        <Typography.Title level={1} >
          <div className={styles.title}>
            <Link href="/"> DevReads </Link>
          </div>
        </Typography.Title>  
    </header>
)}
