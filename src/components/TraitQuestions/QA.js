import React from 'react';

class QA extends React.Component {
  render () {
    return (
      <div className="qa">
        <span className="qa-question">{this.props.question}</span>
        <textarea className="qa-textarea" placeholder="Enter your answer here..."></textarea>
      </div>
    )
  }
}

export default QA;
