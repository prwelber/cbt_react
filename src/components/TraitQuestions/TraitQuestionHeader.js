import React from 'react';

class TraitQuestionHeader extends React.Component {
  titleFormat(word) {
    return word.replace(/_/g, " ").toUpperCase();
  }
  render () {
    return (
      <div className="trait-questions-header">
        <span className="trait-question-header-title">{this.titleFormat(this.props.name)}</span>
        {/*<br />*/}
        <div className="description-container">
          <p className="trait-question-header-description">{this.props.description}</p>
        </div>
      </div>
    )
  }
}

export default TraitQuestionHeader;
