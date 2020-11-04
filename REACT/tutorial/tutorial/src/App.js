import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch,
Route} from 'react-router-dom'
import './App.css';
import Home from './components/Pages/Home'


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>

          <Route path='/' exact components=
            {Home}/>
      </Switch>
      </Router>
    </>
  );
}

export default App;
