import styled from "styled-components"

export default function  Footer(){
  return <StyledFooter>
    <hr />
    <p>
      Made  with ❤️   by  <a target="_blank"  rel="noreferrer"  href="https://saurabhmehta.vercel.app">Saurabh </a>
    </p>
  </StyledFooter>
}

const StyledFooter =  styled.div`
  margin-top:2em ;
  background-color:#eee;
  text-align:center ;
  font-weight:900 ;
  p {
  padding:0.4em ;
  padding-bottom:1em  ;
  margin:0 ;
  }
`
