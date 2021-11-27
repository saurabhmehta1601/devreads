import { Card } from 'antd';
import  Image from  "next/image"
import styles from  "./styles.module.css"

export default function CourseCard({onClick,course: {name,description,thumb_url} }){
const { Meta } = Card;


  const transformName = (name) => name.split("-").join(" ").toUpperCase() 

  return  ( <Card
    style={{ width: 300,boxShadow: '0 0 16px 4px rgba(0,0,0,0.4)' }}
    className={styles.card}
    onClick={onClick}
    cover={
      <Image
        alt={name}
        width={300}
        height={250}
        src={thumb_url}
      />
    }
  >
    <Meta
      title={name ? transformName(name) : name}
      description={description}
    />
  </Card>
  )
}
