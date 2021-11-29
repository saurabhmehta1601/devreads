import { Typography } from 'antd'
export default function Title({children}){
  return <Typography.Title  style={{textAlign:'center',textDecoration:'underline'}} level={1}>{children}</Typography.Title>
}

