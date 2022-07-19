import React from "react";

class Counter extends React.Component{

  constructor(props){
    super(props)
    this.num = 0
    this.state = {
      num:0
    }
  }

  increase = () => {
    this.setState({
    num : this.state.num == 5 ? this.state.num : this.state.num+1
      })
  }

  decrease = () => {
    this.setState({
      num : this.state.num == -5 ? this.state.num : this.state.num-1
      })
  }


  render(){
    return<>
      <h1>Counter</h1>
      <h1>{this.state.num}</h1>
      <button onClick={this.decrease}>-</button>
      <button onClick={this.increase}>+</button>
    </>
  
  }

}

export default Counter


/* 
이름만 Counter 인, Baby와 동일한 내용의 컴포넌트를 만들어 보자.
그리고 여기 에 기능을 하나만 더 추가해보자

추가할 기능 : 증가의 최대치를 5로 최소치를 -5로 추가해보자
*/