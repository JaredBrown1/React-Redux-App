import React from "react";
import "./App.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { amiiboReducer as reducer } from "./reducers/reducers";

import Amiibo from "./components/amiibo";

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>React Redux App</h1>
        <Amiibo />
      </div>
    </Provider>
  );
}

export default App;
