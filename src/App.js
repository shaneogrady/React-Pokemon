import React, { Component } from 'react';

import './App.css';
import NavBar from './components/layout/navbar';

import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/layout/dashboard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="container">
          <Dashboard />
        </div>
      </div>
    );
  }
}

export default App;
