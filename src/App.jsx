import React, { useState } from 'react'
import './App.css'
import About from './pages/about'
import Portfolio from './pages/portfolio'
import Home from './pages/home'
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Router>
      <Switch>
      <Route exact path ="/"><Home /> </Route>
      <Route exact path = "/portfolio"> <Portfolio /></Route>
      <Route exact path = "/about"> <About /></Route>
      </Switch>
      

      


      </Router>
    
    </div>
  )
}

export default App
