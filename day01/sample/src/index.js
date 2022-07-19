import React from 'react'; //=const React = require('react')
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Carrot from './Carrot'


// 여기에서부터 렌더링을 뻗어나가기 시작하겠다!
const root = ReactDOM.createRoot(document.getElementById('root'));
// 실제 렌더링 하는 부분
// 리액트로 만든 App 이라는 컴포넌트를 렌더링한다는 뜻
root.render(
<Carrot />
);

