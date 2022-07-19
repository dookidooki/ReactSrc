import './App.css';

function Books(){
  return <div>
      <ul>
          <li>갓슈벨</li>
          <li>원피스</li>
          <li>나루토</li>
      </ul>
</div>
}


// 리액트 앱에서는 함수가 DOM을 반환할 수 있다.
// 그 함수를 컴포넌트라고 한다.
function App() {
  

  return <div>
   
   <h1>내가 읽은 책들</h1>
   <Books>
   </Books>
 
  
  
  </div>
}

//App을 다른 파일에서 사용할 수 있게 내보낸다!
export default App; 








// import './App.css';

//  // 함수형 컴포넌트
// function Book(){
//   return <h1>붉은매2</h1>

// }

// // 리액트 앱에서는 함수가 DOM을 반환할 수 있다.
// // 그 함수를 컴포넌트라고 한다.
// function App() {
  
//   const myName = "조성래";
  
//   return <div>
   
   
//     {myName}
//     <div></div>
//     <Book></Book>
  
  
  
//   </div>
// ;
// }

// //App을 다른 파일에서 사용할 수 있게 내보낸다!
// export default App; 


