import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App/App";
import { store } from "./App/store";
import reportWebVitals from "./reportWebVitals";

const render = () => {
  ReactDOM.render(
    <App state={store.getState()} dispatch={store.dispatch} />,
    document.getElementById("root")
  );
};

render();

store.subscribe(render);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
