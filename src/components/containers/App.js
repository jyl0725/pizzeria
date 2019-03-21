import React, { Component } from 'react';

import NavBar from '../../components/presentational/NavBar';
import './App.css'



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="pizzeria-header">
          <NavBar />
        </header>
      </div>
    );
  }
}

export default App;
