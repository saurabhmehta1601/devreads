import { gql, useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { Section, Card, Carousel, LoadingPage } from "../components/exports";
import { Alert, Typography } from "antd";
import { useRouter } from "next/router";

const query = gql`
  query allDevroutes {
    devroutes {
      id
      name
      coursesByDevroute(order_by: { added_at: asc }) {
        id
        name
        description
        thumb_url
      }
    }
  }
`;

export default function Home() {
  const { data, loading, error } = useQuery(query);
  const router = useRouter();
  const [loadingCourse, setLoadingCourse] = useState(false);
  const handleCardClick = (name) => {
    router.push(`/courses/${name}`);
    setLoadingCourse(true);
  };

  useEffect(() => {
    return () => {
      setLoadingCourse(false);
    };
  }, []);

  return (
    <>
      {data &&
        data.devroutes.map((devroute, idx) => (
          <div key={idx}>
            <Section>
              <Typography.Title level={3}>{devroute.name}</Typography.Title>
            </Section>
            {/* Show 1 slide on mobile */}
            <Carousel>
              {devroute.coursesByDevroute.map((course) => {
                return (
                  <Card
                    onClick={() => handleCardClick(course.name)}
                    key={course.id}
                    course={course}
                  />
                );
              })}
            </Carousel>
          </div>
        ))}

      {(loading || loadingCourse) && <LoadingPage />}

      {error && (
        <Alert
          message="Cannot load ebooks"
          description="Please reload the page."
          type="error"
          closable
        />
      )}
    </>
  );
}
