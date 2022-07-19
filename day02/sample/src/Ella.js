import React from 'react'
import styled from "styled-components"

const Box = styled.p`
margin : 0 auto ;
padding : 0 ;
background-color: red ;
width :  ${(props) => props.isBig? "200px" : "100px"} ;
height : ${(props) => props.isBig? "200px" : "100px"};
`

  function Ella(){
    return <>
      <Box isBig={true}>  
      </Box>
      <Box isBig={false}>
      </Box>    
    </>
  }

  export default Ella;