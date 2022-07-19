function Title(props){
  
  return <ul><li style={{
    color : "teal",
    backgroundColor: "tomato",
    fontSize : "2em"
  }}>{props.text}</li>
  </ul>
}


 
function Carrot(){

  const books = ["어린왕자", "여린왕자", "어린환자"]
  
  return <div>
  <Title text={books[0]} /> 
  <Title text={books[1]} />
  <Title text={books[2]} />
  </div>
  
}
export default Carrot