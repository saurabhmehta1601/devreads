import {gql, useQuery} from "@apollo/client"
import React from "react"
import Section from "../components/Section"
import Card from "../components/Card"
import { Spin , Alert,Row,Col } from "antd"

const query = gql`
  query allEbooks {
    ebook{
      id
      name
      description
      price
    }
}
`

export default function Home() {
  const {data,loading,error} =  useQuery(query)
  return (
  <>
    <Section title="All Ebooks"/>
    { data && (<Row justify="space-around" gutter={[16,16] }>
      {data.ebook.map(eb => <Col><Card key={eb.id} title={eb.name} description={eb.description} /></Col> ) }
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

