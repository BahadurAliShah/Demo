import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ItemsList from './Data/itemsList';
import Input from './Components/input';
import InputListTable from './Components/itemTableList/inputListTable'

ReactDOM.render(
  <React.StrictMode>
    <ItemsList>
      <Input/>
      <InputListTable/>
    </ItemsList>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
