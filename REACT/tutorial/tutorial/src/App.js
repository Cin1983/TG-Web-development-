import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/Pages/Home'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <>
    <Router>
        <Navbar />
        <Home />
      <Switch>

          <Route path='/' exact components=
            {Home} />
      </Switch>
      </Router>
    </>
  );
}

export default App;
