import { Typography } from 'antd'
import styles from "./styles.module.css"

export default function Title({children}){
  return <Typography.Title  className={styles.title} level={1}>{children}</Typography.Title>
}