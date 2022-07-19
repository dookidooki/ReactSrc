/*
JSX에서의 스타일 다루기 (css-in-js)
- 객체의 키와 밸류로 속성과 속성값을 구분한다.
- 마이너스는 js에서는 카멜표기법
- 속성값 지정시 키워드는 문자열로, 수치는 숫자형 데이터로
*/ 
function Title(props){
  
  return <h2 style={{
    color : "red",
    backgroundColor: "yellow",
    fontSize : "2em"
  }}>{props.text}</h2>
}
  

function Base(){
  return <div>
    <Title text={"엘리먼트 만들기"} /> 
    <Title text={"JSX 이해하기"} />
    <Title text={"프로젝트 구조 이해하기"} />
    
  </div>
}

export default Base;