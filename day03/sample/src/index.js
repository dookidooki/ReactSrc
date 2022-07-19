import React from 'react';
import ReactDOM from 'react-dom/client';
import Fila from './Fila';
import Doll from './Doll';
import FoodList from './App';
import Baby from './Baby';
import Counter from './Counter';
import Example from './Example';

function Heading(){
  return <h1>맛있는 음식들</h1>
}



// <React.StrictMode> : 리엑트에서 요구하는 문법으로 작성하고 있다 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Fila />
  </React.StrictMode>
);
