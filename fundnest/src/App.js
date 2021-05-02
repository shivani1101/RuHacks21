import logo from './logo.png';
import './App.css';
import React, { useContext, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
import LoginPage from './components/login-page';
import DashboardPage from './components/dashboard-page';

function App() {
  return (
    
    <Router>
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/dashboard" component={DashboardPage} />
      </Switch>
      
    </Router>
  );
}

export default App;
