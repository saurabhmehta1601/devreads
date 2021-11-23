import {gql, useQuery} from "@apollo/client"
import React from "react"
import Section from "../components/Section"
import Card from "../components/Card"
import { Spin , Alert,Row,Col ,Typography} from "antd"

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
    <Section>
      <Typography.Title level={3}>
        All courses
      </Typography.Title>
    </Section>
    { data && (<Row justify="space-around" gutter={[16,16] }>
      {data.ebook.map(eb => <Col key={eb.id}><Card ebook={eb} /></Col> ) }
      </Row>)
    }

    {loading && ( <Spin size="large"  />)}

      {error && ( <Alert
      message="Cannot loading ebooks"
      description="Please reload the page."
      type="error"
      closable
    />)}
  </>)
}

