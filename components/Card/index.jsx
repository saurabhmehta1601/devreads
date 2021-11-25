import { Card } from 'antd';
import  Image from  "next/image"
import styles from  "./styles.module.css"
import { useRouter } from 'next/router'

export default function CourseCard({course: {name,description,thumb_url} }){
const { Meta } = Card;
const router = useRouter()

  const handleClick = () =>{
    router.push(`/courses/${name}`)
  }
  return  (
  <Card
    style={{ width: 300,boxShadow: '0 0 16px 4px rgba(0,0,0,0.4)' }}
    className={styles.card}
    onClick={handleClick}
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
