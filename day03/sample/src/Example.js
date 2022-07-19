import React, {useState} from 'react'


function Example(){

  const [text, changeText] = useState(" ")
  const [color, changeColor] = useState("black")

  const handleChange = (e) => {
    changeText(e.target.value)
  }

  const handleChangeColor = (e) =>{
    changeColor(e.target.value)
  }

  return <>
  
    <h1> 아무 말이나 쓰기 </h1>
    <input onChange={handleChange} 
    type="text" 
    placeholder='하고 싶은 말' 
    />
      <input onChange={handleChangeColor} 
    type="text" 
    placeholder='좋아하는 색깔' 
    />
    <p>{text}</p>
    <div style={{
      width: 100, height :100, backgroundColor: color
    }}></div>
  </>

}
export default Example