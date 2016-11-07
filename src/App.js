import React, { Component } from 'react';
import { createStore } from 'redux';
import FilterReducer from './reducers/FilterReducer';
import FilterInput from './FilterInput';
import logo from './logo.svg';
import './App.css';

const store = createStore(FilterReducer);

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          <FilterInput store={store}/>
        </div>
      </div>
    );
  }
}

export default App;
