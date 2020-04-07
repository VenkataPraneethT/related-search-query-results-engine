import React, { PureComponent } from "react";
import './App.css';
import HomePage from './HomePage/HomePage';

export default class App extends PureComponent {
  

  render() {
    return (
      <div className="app-container">
        <HomePage />
      </div>
    );
  }
}
