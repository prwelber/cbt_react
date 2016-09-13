import React from 'react';

class Trait extends React.Component {
  render() {
    return (
      <div className="trait-container">
        <div className="trait-container-img">

        </div>
        <div className="trait-container-text">
          <span className="trait-title">{this.props.title}</span>
          <p className="trait-description">{this.props.text}</p>
        </div>

      </div>
    )
  }
}

export default Trait;
