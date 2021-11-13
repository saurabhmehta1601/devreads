import { Card } from 'antd';
import styles from  "./styles.module.css"

export default function EbookCard({title,description}){
const { Meta } = Card;
  return  (
  <Card
    style={{ width: 300 ,boxShadow: '0 0 16px 4px rgba(0,0,0,0.4)' }}
    className={styles.card}
    cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
  >
    <Meta
      title={title}
      description={description}
    />
  </Card>
  )
}
