import logo from './logo.svg';
import './App.css';
import React, { useContext, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
import LoginPage from './components/login-page';

function App() {
  return (
    
    <Router>
      <Switch>
        <Route exact path="/login" component={LoginPage} />
      </Switch>
      
    </Router>
  );
}

export default App;
