import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import App from "./components/App";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk));

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
