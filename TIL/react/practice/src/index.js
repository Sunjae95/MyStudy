import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
// import App from "./Pt1/App";
// import ReducerApp from "./Pt1/ReducerApp";
// import { BrowserRouter } from "react-router-dom";
// import ContextApp from "./Pt1/Context/ContextApp";
// import Hello from "./Hello";
// import Counter from "./Pt1/Counter";
// import CounterClass from "./Pt1/CounterClass";

import StyleApp from "./Styling-with-sass/StyleApp";

ReactDOM.render(<StyleApp />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
