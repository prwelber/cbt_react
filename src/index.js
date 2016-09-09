import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';


import './index.css';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap-theme.css';
import './App.css';

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

// ReactDOM.render(
//   <Router history={browserHistory}>
//     <Route component={ Navbar }>
//       <Route path="/" component={ App }></Route>
//     </Route>
//   </Router>, document.getElementById('root'));
  ReactDOM.render(<Router history={browserHistory}>{routes}</Router>, document.getElementById('root'));
