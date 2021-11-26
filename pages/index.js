import {gql, useQuery} from "@apollo/client"
import React from "react"
import Section from "../components/Section"
import Card from "../components/Card"
import { Spin , Alert ,Typography} from "antd"
import { Carousel } from '@trendyol-js/react-carousel';
import {useMediaQuery} from "react-responsive"
import {MAX_WIDTH_MOBILE, MAX_WIDTH_TABLET} from "../utils/constants"

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
  const isMobile = useMediaQuery({ query: `(max-width:${MAX_WIDTH_MOBILE})` })
  const isTablet= useMediaQuery({ query: `(max-width:${MAX_WIDTH_TABLET})` })
  console.warn("is mobile is ",isMobile)
  return ( <>
      {data && data.devroutes.map((devroute,idx )=> (<div key={idx}>
        <Section >
          <Typography.Title level={3}>
            {devroute.name  }
          </Typography.Title>
        </Section>
        <Carousel show={ isMobile ? 1 : isTablet ? 2: 3} swiping={true} useArrowKeys={true} infinite={false}>
          { devroute.coursesByDevroute.map(course => {
            return  <Card key={course.id} course={course} /> 
            }) }
        </Carousel>
      </div>)
      )
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

