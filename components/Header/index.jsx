import  React  from  "react"
import { Typography , List } from 'antd';
import styles from "./styles.module.css"

const  data = [
  "Link 1",
  "Link 2"
]

export default function  Header (){
  return (   
        <Typography.Title level={1} className={styles.title}>DevReads</Typography.Title>
)}
