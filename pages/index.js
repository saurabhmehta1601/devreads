import {gql, useQuery} from "@apollo/client"
import React from "react"
import Section from "../components/Section"
import Card from "../components/Card"
import { Spin , Alert,Row,Col ,Typography} from "antd"

const query = gql`
  query allDevroutes {
    devroutes {
      id
      name
      coursesByDevroute {
        id
        name
        description
        thumb_url
      }
    }
  }
`

export default function Home() {
  const {data,loading,error} =  useQuery(query)
  return (
  <>
      {data && data.devroutes.map(devroute => <>
        <Section>
          <Typography.Title level={3}>
            {devroute.name}
          </Typography.Title>
        </Section>
        <Row justify="space-around" gutter={[16,16] }>
          { devroute.coursesByDevroute.map(course => {
            return <Col key={course.id}> <Card course={course} /></Col> 
            }) 
          }
        </Row> 
      </>)
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

