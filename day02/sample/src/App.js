
  function sayHello(){}// 함수

  const foods = ["치킨", "피자", "햄버거"]


  function Food(props){
    
  const { fg, bg } = props
    return <ul style={{color:fg, backgroundColor:bg}}>
      <li>{foods[0]}</li>
      <li>{foods[1]}</li>
      <li>{foods[2]}</li>
    </ul>

  }



  function App(){
      return <div>

      <Food fg="red" bg="skyblue" />
      
      </div>
  }

  export default App;