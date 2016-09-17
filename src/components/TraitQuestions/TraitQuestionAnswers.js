import React from 'react';
import QA from './QA';

class TraitQuestionAnswers extends React.Component {

  render () {
    var questions = this.props.questions.map(el => {
      return <QA key={el.id} question={el.question}></QA>
    });
    return (
      <div className="QA-container">
        {questions}
      </div>
    )
  }
}

export default TraitQuestionAnswers;
