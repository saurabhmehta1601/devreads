import {gql, useQuery} from "@apollo/client"
import React from "react"
import Section from "../components/Section"
import { Spin } from "antd"

const query = gql`
  query allEbooks {
    ebook{
      id
      name
      price
    }
}
`

export default function Home() {
  const {data,loading,error} =  useQuery(query)
  return (
  <>
    <Section  title="All Ebooks"/>
      {data && JSON.stringify(data,null,2)}
      {loading && <Spin size="large"  />}
      {error && JSON.stringify(error ,null,2)}
    {`NEXT_PUBLIC_NAME  ${process.env.NEXT_PUBLIC_NAME}`}
  </>)
}

