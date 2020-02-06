import React from "react";
import "./App.css";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { amiiboReducer as reducer } from "./reducers/reducers";
import thunk from "redux-thunk";

import AmiiboForm from "./components/amiibo";

const store = createStore(reducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Amiibos</h1>
        <AmiiboForm />
      </div>
    </Provider>
  );
}

export default App;
