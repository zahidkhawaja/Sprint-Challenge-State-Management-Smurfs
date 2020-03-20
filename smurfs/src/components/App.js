import React from "react";
import "./App.css";
import Smurfs from "./Smurfs";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { smurfReducer as reducer } from "../reducers/smurfReducer";
import SmurfForm from "./SmurfForm";

const store = createStore(reducer, applyMiddleware(thunk));

const App = () => {
    return (
      <Provider store = {store}>
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <SmurfForm/>
        <Smurfs/>
      </div>
      </Provider>
    );
  }

export default App;
