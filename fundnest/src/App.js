import logo from './logo.svg';
import './App.css';
import React, { useContext, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import InvestorPage from './pages/InvestorPage';
import CompanyPage from './pages/ComapanyPage';

function App() {
  return (
    
    <Router>
      <Switch>
      <Route exact path='/' component={LandingPage} />
        <Route path='/investor-page' component={InvestorPage} />
        <Route path='/company-page' component={CompanyPage} />
      </Switch>
      
    </Router>
  );
}

export default App;
