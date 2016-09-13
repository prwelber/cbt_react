import React from 'react';
// import { Link } from 'react-router';

import TraitList from './TraitList';

class Traits extends React.Component {

  render() {
    return (
      <div className="traits-background">
        <div className="traits-header-container">
          <h2>SELECT A CHARACTER TRAIT TO BEGIN...</h2>
          <hr className='traits-hr'></hr>
        </div>
        <div className="traits-container">
          <TraitList />
        </div>
      </div>
    )
  }
}


export default Traits
