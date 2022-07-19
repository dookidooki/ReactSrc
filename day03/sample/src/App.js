import React from "react";

//리액트 컴포넌트 : 1. 함수형 컴포턴트 : 함수인데 돔요소를 생산해낸다
//2. 클래스 기반의 컴포넌트


// map 함수를 인자로 받는다, 화살표 함수, 요소수만큼 호출이된다
// 짜장면 1, 짬뽕 2, 탕수육 3, 볶음밥 4
// key 반복적으로 데이터를 내보낼때 요구되는 데이터!


function FoodList(){
    
  const foods = ["짜장면", "짬뽕", "탕수육", "볶음밥"]

  return <ul>
  {foods.map( (aFood, index) => <li key={index}>{aFood}</li> )}
  </ul>
}


export default FoodList

