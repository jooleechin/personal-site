import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Header from './app/components/Header'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
