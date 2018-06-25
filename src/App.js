import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './app/components/Header'
import Footer from './app/components/Footer'
import Splashpage from './app/components/Splashpage'
import AboutMe from './app/components/AboutMe'
import Project from './app/componenets/Project'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div id="app">
          <Header />
          <Route exact path="/" component = { Splashpage } />
          <Route path="/" component = { AboutMe } />
          <Route path="/" component = { Project } />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
