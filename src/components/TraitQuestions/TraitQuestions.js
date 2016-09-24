import React from 'react';
import TraitQuestionHeader from './TraitQuestionHeader';
import TraitQuestionAnswers from './TraitQuestionAnswers';

var data = [
  {
    name: 'humility',
    description: "True humility is to have a modest or even low view of one's own importance: manifestations of this include gratefulness for good fortune in one's own life, being willing to step out of the limelight and let someone else step in, admitting when we are wrong about something, and forgiving someone who has done something wrong to us.",
    questions: [
      {id: 1, question: 'What is humility?'},
      {id: 2, question: 'Are you humility enough sir?'},
      {id: 3, question: 'What is the point of humility?'}
    ]
  },
  {
    name: 'love_of_learning',
    description: "Love of learning is the act of loving learning. Loving to learn is the feeling you get when you found out that one plus one equaled two. Love of learning is like loving your dog, except it's learning. Love of learning is like loving a fresh plate of crisp bacon, except it's learning.",
    questions: [
      {id: 1, question: 'What is learning?'},
      {id: 2, question: 'Do you love learning?'},
      {id: 3, question: 'What is something you would like to learn?'}
    ]
  },
  {
    name: 'idealogical_openness',
    description: 'Being idealogically open means you are open to hearing new ideas. This does not mean that you would vote for Donald Trump, because he is a raging asshole who will destroy everything that is good and decent. Being open to other idealogical views means you are mature, but you should still not be a Republican, because all of their ideas are shit.',
    questions: [
      {id: 1, question: 'Are you open to hearing other view points?'},
      {id: 2, question: 'Do you often argue with others who disagree with your opinions?'},
      {id: 3, question: 'If you vote for Trump and he wins, how will you live with yourself?'}
    ]
  }
]


class TraitQuestions extends React.Component {
  componentWillMount () {
    console.log('componentWillMount and props', this.props.params.trait);
    var info = data.map(el => {
      console.log('el.name', el.name)
      if (el.name === this.props.params.trait) {

        this.setState({
          data: el
        });
        return el;
      }
    });
    // this.setState({
    //   data: info[0]
    // });
  }
  componentDidMount () {
  }

  sendAnswerToServer () {
    console.log('sendAnswerToServer');
    // submit answer to server
  }

  render () {
    return (
      <div className="background">
        <div className="trait-questions-wrapper">
          {/*<span>Testing TraitQuestions Component</span>*/}
          <TraitQuestionHeader name={this.state.data.name} description={this.state.data.description}></TraitQuestionHeader>
          <TraitQuestionAnswers questions={this.state.data.questions} handleSubmit={this.sendAnswerToServer}>

          </TraitQuestionAnswers>
        </div>
      </div>
    )
  }
}

export default TraitQuestions;
