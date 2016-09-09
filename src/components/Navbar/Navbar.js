import React from 'react';
import { Link } from 'react-router';

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <div className='navbar'>
          <div className='navbar-logo'>
            <Link to="/"><img src='../images/logo_white.png' className='navbar-logo-img' role='presentation'></img></Link>
          </div>
          <div className='navbar-link-container'>
            <span className='navbar-link'>SETTINGS | LOG IN</span>
          </div>
        </div>
        <div className='navbar-bottom'></div>
        {/* pass in this.props.children so it will take props from Router*/}
        {this.props.children}
      </div>
    );
  }
}

export default Navbar;
