import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './app/components/Header'
import Footer from './app/components/Footer'
import Splashpage from './app/components/Splashpage'
import AboutMe from './app/components/AboutMe'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div id="app">
          <Header />
          <Route exact path="/" component = { Splashpage } />
          <Route path="/" component = { AboutMe } />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
