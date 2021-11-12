import  React  from  "react"
import { Typography  } from 'antd';
import styles from "./styles.module.css"

export default function  Header (){
const { Title } = Typography;
  return (   
      <header>
              <Title level={1} className={styles.title}>DevReads</Title>
      </header>
)}
