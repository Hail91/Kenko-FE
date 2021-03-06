import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/app/app.js";
import * as serviceWorker from "./serviceWorker";
// Redux imports
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "../src/store/reducers/rootReducer";
import thunk from "redux-thunk";
// Utility imports
import {
  loadFromLocalStorage,
  saveToLocalStorage,
} from "./utilities/persistence/localStoragePersist";
// External libraries
import throttle from "lodash/throttle";

const persistedState = loadFromLocalStorage();

const store = createStore(rootReducer, persistedState, applyMiddleware(thunk));

store.subscribe(
  throttle(() => {
    saveToLocalStorage(store);
  }, 1000)
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
