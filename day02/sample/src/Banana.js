import PropTypes from 'prop-types'
/*
prop-types 는 컴포넌트에 주어진 속성을 확인해주는 부가 기능이다.
=> 에러가 나지는 않지만, 메시지 정도는 전달해준다. 나름 도움이 됨!
*/

function Banana(props){
  return <div>
    <h1> 내 바나나 색깔은 {props.color}</h1>
  </div>
}

function Base(){
  return <Banana color={1}></Banana>
}


// 익스포트 하기 전에 속성 관련 세팅해서 내보내자!

Banana.propTypes = {
  color:PropTypes.string.isRequired
}

export default Banana;