import { gql, useQuery } from "@apollo/client"
import React, {useEffect, useState} from "react"
import Section from "../components/Section"
import Card from "../components/Card"
import {  Alert ,Typography} from "antd"
import Carousel from "react-multi-carousel";
import LoadingPage from "../components/LoadingPage"
import { useRouter } from 'next/router'

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
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

export default function Home() {
  const { data,loading,error } =  useQuery(query)
  const router = useRouter()
  const [loadingCourse,setLoadingCourse] = useState(false)
  const handleCardClick = (name) => { 
    router.push(`/courses/${name}`)
    setLoadingCourse(true)
  }
  
  useEffect(() => {
    return () => {
      setLoadingCourse(false)
    }
  },[])

  return ( <>
      {data && data.devroutes.map((devroute,idx )=> (<div key={idx}>
        <Section >
          <Typography.Title level={3}>
            {devroute.name  }
          </Typography.Title>
        </Section>
        {/* Show 1 slide on mobile */}
        <Carousel responsive={responsive} 
          ssr={true} 
          keyBoardControl={true}    
          containerClass="carousel-container" 
          itemClass="carousel-item-padding-40-px">
            { devroute.coursesByDevroute.map(course => {
              return  <Card onClick={() => handleCardClick(course.name)} key={course.id} course={course} /> 
              }) }
        </Carousel>
      </div>)
      )
    }

    {(loading || loadingCourse)&& ( <LoadingPage   />)}

      {error && ( <Alert
      message="Cannot loading ebooks"
      description="Please reload the page."
      type="error"
      closable
    />)}
  </>)
}

