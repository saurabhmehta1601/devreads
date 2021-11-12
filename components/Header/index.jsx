import  React  from  "react"
import { Layout,Typography  } from 'antd';
import styles from "./styles.module.css"

export default function  Header (){
const { Content ,Header} = Layout;
const { Title } = Typography;
  return (   
  <Layout>
      <Header>
            <Content> 
              <Title level={1} className={styles.title}>DevReads</Title>
            </Content>
      </Header>
  </Layout>
)}
