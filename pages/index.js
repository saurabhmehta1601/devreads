import {gql, useQuery} from "@apollo/client"
import React from "react"
import Section from "../components/Section"
import Card from "../components/Card"
import { Spin , Alert,Row,Col ,Typography} from "antd"
import { Carousel } from '@trendyol-js/react-carousel';

const query = gql`
  query allDevroutes {
    devroutes {
      id
      name
      coursesByDevroute (order_by: {added_at: asc}){
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
            {devroute.name  }
          </Typography.Title>
        </Section>
        <Carousel show={2} swiping={true} useArrowKeys={true} infinite={false}>
          { devroute.coursesByDevroute.map(course => {
            return  <Card course={course} /> 
            }) }
        </Carousel>
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

