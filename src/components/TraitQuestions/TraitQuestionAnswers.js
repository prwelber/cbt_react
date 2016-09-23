import React from 'react';
import QA from './QA';

class TraitQuestionAnswers extends React.Component {
  submitAnswers = () => {
    console.log('submitAnswers');
    this.props.handleSubmit();
  }
  render () {
    // var divStyle = {
    //   display: 'flex',
    //   justifyContent: 'center'
    // }
    var questions = this.props.questions.map((el, index) => {
      return <QA key={el.id} number={index} question={el.question} onSave={this.submitAnswers}></QA>
    });
    return (
      <div className="QA-container">
        {questions}
        {/*<div style={divStyle}>
          <button onClick={this.submitAnswers}>Submit Answers</button>
        </div>*/}
      </div>
    )
  }
}

export default TraitQuestionAnswers;
