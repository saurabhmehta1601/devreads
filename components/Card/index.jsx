import { Card } from 'antd';
import  Image from  "next/image"
import styles from  "./styles.module.css"

export default function EbookCard({ebook : {name,description,thumb_url} }){
const { Meta } = Card;
  return  (
  <Card
    style={{ width: 300,boxShadow: '0 0 16px 4px rgba(0,0,0,0.4)' }}
    className={styles.card}
    cover={
      <Image
        alt={name}
        width={300}
        height={350}
        src={thumb_url}
      />
    }
  >
    <Meta
      title={name}
      description={description}
    />
  </Card>
  )
}
