import {gql, useQuery} from "@apollo/client"
import React from "react"
import Section from "../components/SectionTitle"
import Card from "../components/Card"
import { Spin , Alert,Row,Col } from "antd"

const query = gql`
  query allEbooks {
    ebook{
      id
      name
      description
      price
      thumb_url
    }
}
`

export default function Home() {
  const {data,loading,error} =  useQuery(query)
  return (
  <>
    <Section title="All Ebooks"/>
    { data && (<Row justify="space-around" gutter={[16,16] }>
      {data.ebook.map(eb => <Col key={eb.id}><Card ebook={eb} /></Col> ) }
      </Row>)
    }

    {loading && ( <Spin size="large"  />)}

      {error && ( <Alert
      message="Cannot loading ebooks "
      description="Please reload the page. "
      type="error"
      closable
    />)}
  </>)
}

