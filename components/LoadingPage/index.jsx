import React from "react"
import styled from "styled-components"
import ClimbingBoxLoader  from  "react-spinners/ClimbingBoxLoader"

export  default  function LoadingPage(){
  return <LoadingContainer>
      <ClimbingBoxLoader color={"#36B7D7"} size={50} />
    </LoadingContainer>
}

const LoadingContainer =  styled.div`
  position:fixed;
  top:0;
  background-color:#ddd ;
  bottom:0;
  left:0;
  right:0;
  display:grid;
  place-items:center ;
`
