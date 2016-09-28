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
    var question = this.refs.question.textContent;
    var answer = this.refs.textarea.value;
    console.log('refs', question, answer);
    this.props.onSave(question, answer);
  }
  render () {
    var buttonStyle;
    if (this.state.hover) {
      buttonStyle = {backgroundColor: '#00BFFF'}
    }
    return (
      <div className="qa">
        <p className="qa-question">{this.addOne(this.props.number)}) <span className="qa-question" ref="question">{this.props.question}</span></p>
        <textarea className="qa-textarea" placeholder="Enter your answer here..." ref="textarea"></textarea>
        <button className="qa-save-answer" onMouseOver={this.buttonHover} onMouseOut={this.buttonOut} onClick={this.saveAnswer} style={buttonStyle}>
          Save Answer #{this.addOne(this.props.number)}
        </button>
      </div>
    )
  }
}

export default QA;
