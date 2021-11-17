import  React,{useEffect} from  "react"
import { useRouter } from "next/router";
import  { gql, useLazyQuery } from "@apollo/client"

const  SingleEbookQuery =  gql`
  query SingleEbook($id: uuid! ) {
    ebook_by_pk(id: $id) {
      id
      name
      description
    }
  }
`

export default function Ebook(){
  const { query } = useRouter();
  const [runQuery,{loading,error,data}] =  useLazyQuery(SingleEbookQuery)


  useEffect(() => {
    if(query.id){
      runQuery({variables:  {id: query.id}})
    }
  },[query])

  return <>
    {loading &&  "Loading"}
    {error && "error" }
    {data &&  `data is  ${JSON.stringify(data,null,2)}`}
    </>
}
