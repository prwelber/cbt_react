import React from 'react';
import { Route } from 'react-router';
import Navbar from './components/Navbar/Navbar';
import App from './components/WelcomePage/App';
import Traits from './components/Traits/Traits'


export default (
  <Route component={ Navbar }> // this holds the header and footer
    <Route path='/' component={ App }></Route>
    <Route path="/traits" component={ Traits }></Route>
  </Route>
)
