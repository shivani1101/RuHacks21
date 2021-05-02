import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import InvestorPage from './pages/InvestorPage';
import CompanyPage from './pages/ComapanyPage';
import BusinessAccountPage from './pages/BusinessAccountPage';
import InvestorAccountPage from './pages/InvestorAccountPage'


function App() {
  return (
    
    <Router>
      <Switch>
      <Route exact path='/' component={LandingPage} />
        <Route path='/investor-page' component={InvestorPage} />
        <Route path='/company-page' component={CompanyPage} />
        <Route path='/business-account-page' component={BusinessAccountPage} />
        <Route path='/investor-account-page' component={InvestorAccountPage} />
      </Switch>
      
    </Router>
  );
}

export default App;
