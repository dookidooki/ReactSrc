import React, {useState} from 'react'

function Doll(){
  

  // [상태, 상태변경함수]
  const [num, changeNum] = useState(0)
  
  return<>
  <h1>{num}</h1>
  <button onClick={() =>changeNum(num-1)}>-</button>
  <button onClick={() =>changeNum(num+1)}>+</button>
  </>
}

export default Doll