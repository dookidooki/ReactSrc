import React from 'react'

class Fila extends React.Component{
  
  constructor(){
    super()
    this.state ={ color: "" }
  }

  handleChange = (e) => this.setState({ color :e.target.value })
  
  render(){

    const { color } = this.state

    return<>
    <input type="text" onChange={this.handleChange} />
    <div style={{ 
      width : 100, height : 100, backgroundColor: color
    }}></div>
    </>
  }
}


export default Fila