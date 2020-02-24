import React from "react";
import "./App.css";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { amiiboReducer as reducer } from "./reducers/reducers";
import thunk from "redux-thunk";
import styled from "styled-components";

import AmiiboForm from "./components/amiiboForm";
import AmiiboList from "./components/amiiboList";

const store = createStore(reducer, applyMiddleware(thunk));

const Background = styled.div`
  background-color: black;
`;

function App() {
  return (
    <Provider store={store}>
      <Background className="App">
        <h1>Amiibos</h1>
        <AmiiboForm />
        <AmiiboList />
      </Background>
    </Provider>
  );
}

export default App;
