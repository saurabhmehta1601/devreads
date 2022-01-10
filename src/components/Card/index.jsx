import { Card } from "antd";
import Image from "next/image";
import styles from "./styles.module.css";

const transformName = (name) => name.split("-").join(" ").toUpperCase();

export default function AntCard(props) {
  const { name, description, thumb_url } = props.course;
  return (
    <Card
      style={{
        width: 300,
        boxShadow: "0 0 16px 4px rgba(0,0,0,0.4)",
      }}
      className={styles.card}
      cover={
        <Image
          alt={name}
          width={300}
          height={250}
          layout="responsive"
          src={thumb_url}
        />
      }
      {...props}
    >
      <Card.Meta
        title={name ? transformName(name) : name}
        description={description}
      />
    </Card>
  );
}
