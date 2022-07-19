import React from 'react'
import styled from 'styled-components'
// css-in-js : JSX 안에서 스타일 주는 기법 
// 스타일드 컴포넌트는 문자열 안에 그냥 CSS를 쓴다
// 스타일드 컴포넌트는 동적인 반응도 할 수 있다

const Box = styled.div`
width : 200px ;
height : 200px ;
background-color: ${(props)=> props.isTomato? "tomato":"orange"};
` 
//스타일이 지정된 div 만들어서 저장

const Heading = styled.h1`
color : white ;
background-color : black;
font-size : black ;
`

function Dragon(){
  return<>
  <Box isTomato={true}>  
  </Box>
  <Box isTomato={false}>  
  </Box>
  </>
}

export default Dragon;