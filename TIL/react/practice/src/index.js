import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Pt1/App';
import ReducerApp from './Pt1/ReducerApp'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import ContextApp from './Pt1/Context/ContextApp';
import Hello from './Hello';
import Counter from './Pt1/Counter';
import CounterClass from './Pt1/CounterClass';
import ErrorBoundary from './Pt1/Class/ErrorBoundary';
import ClassUser from './Pt1/Class/ClassUser';
ReactDOM.render(
  <BrowserRouter>
    <ErrorBoundary>
      <ClassUser/>
    </ErrorBoundary>
  </BrowserRouter>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
