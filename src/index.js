import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ItemsList from './Data/itemsList';
import Components from './Components/index';

ReactDOM.render(
  <React.StrictMode>
    <ItemsList>
      <Components/>
    </ItemsList>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
