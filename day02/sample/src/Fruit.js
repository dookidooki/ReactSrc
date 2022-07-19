import React from "react";
import styled from "styled-components";
import "./Fruit.css"


function Fruit(props){
  const { isBig, fruitList } = props
  return <>
    <ul>
      {fruitList.map((aFruit, index) => {
        return <li key={index}>{aFruit}</li>
      })}
    </ul>
  </>
}

export default Fruit;


// jsx 에서는 class를 className이 대신한다!
// 배열의 멤버를 map()/배열의 기능/을 통해 출력하기
// 배열의 요소를 내보낼때, 리액트에서는 key를 추가해야한다!