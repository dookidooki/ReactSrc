import React from "react";

class Baby extends React.Component{

  constructor(props){
    super(props) //부모를 만들고
    this.num = 0 //나를 초기화
    this.state = {
      num: 0
    }
  }

  //상태 관리를 위해 만든 메소드들
  increase = () => {
    this.setState({
      num: this.state.num + 2
    })
  }

  decrease = () => {
    this.setState({
      num: this.state.num - 1
    })
  }



  render(){
    return <> 
    <h1>{this.state.num}</h1>
    <button onClick={this.decrease}>-</button>
    <button onClick={this.increase}>+</button>
    </>
  }

}

export default Baby;