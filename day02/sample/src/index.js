import React from 'react'; //내장 모듈
import ReactDOM from 'react-dom/client';
import App from './App'; //외장 모듈 == 커스텀 모듈
import Clock from './Clock'
import Banana from './Banana';
import Base from './Banana';
import Dragon from './Dragon';
import Ella from './Ella';
import Fruit from './Fruit';
import Golf from './Golf';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
     
    <Golf />

  </React.StrictMode>
);

{/* <Fruit isBig={false} 
fruitList ={["바나나", "복숭아", "사과", "오렌지", "아보카도"]} /> */}