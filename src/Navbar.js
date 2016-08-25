import React from 'react';

class Navbar extends React.Component {
  render() {
    return (
      <div>
      <div className='navbar'>
        <div className='navbar-logo'>
          <img src='../images/logo_white.png' className='navbar-logo-img' role='presentation'></img>
        </div>
        <div className='navbar-link-container'>
          <span className='navbar-link'>SETTINGS | LOG IN</span>
        </div>
      </div>
      <div className='navbar-bottom'></div>
      </div>
    );
  }
}

export default Navbar;
