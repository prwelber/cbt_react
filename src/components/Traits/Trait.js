import React from 'react';
import { Link } from 'react-router';

class Trait extends React.Component {
  makeLink(title) {
    return `prompts/${title.replace(/ /g, "")}`.toLowerCase();
  }
  render() {
    return (
      <div className="trait-container">
        <div className="trait-container-img">

        </div>
        <div className="trait-container-text">
          <Link to={this.makeLink(this.props.title)} className="trait-link"><span className="trait-title">{this.props.title}</span></Link>
          <p className="trait-description">{this.props.text}</p>
        </div>

      </div>
    )
  }
}

export default Trait;
