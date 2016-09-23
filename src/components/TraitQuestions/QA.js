import React from 'react';

class QA extends React.Component {
  state = {
    hover: false
  }
  addOne (num) {
    return num + 1;
  }
  buttonHover = () => {
    this.setState({hover: !this.state.hover})
  }
  buttonOut = () => {
    this.setState({hover: false})
  }
  saveAnswer = () => {
    console.log('saveAnswer')
    this.props.onSave();
  }
  render () {
    var buttonStyle;
    if (this.state.hover) {
      buttonStyle = {backgroundColor: '#00BFFF'}
    }
    return (
      <div className="qa">
        <span className="qa-question">{this.addOne(this.props.number)}) {this.props.question}</span>
        <textarea className="qa-textarea" placeholder="Enter your answer here..."></textarea>
        <button className="qa-save-answer" onMouseOver={this.buttonHover} onMouseOut={this.buttonOut} onClick={this.saveAnswer} style={buttonStyle}>Save Answer #{this.addOne(this.props.number)}</button>
      </div>
    )
  }
}

export default QA;
