import React from 'react';
import TraitQuestionHeader from './TraitQuestionHeader';


var data = [
  {name: 'humility', description: "True humility is to have a modest or even low view of one's own importance: manifestations of this include gratefulness for good fortune in one's own life, being willing to step out of the limelight and let someone else step in, admitting when we are wrong about something, and forgiving someone who has done something wrong to us.", questionOne: 'what is humility?', questionTwo: 'are you humility enough bro?'}
]


class TraitQuestions extends React.Component {
  componentWillMount () {
    console.log('componentWillMount and props', this.props.params.trait);
    var info = data.map(el => {
      if (el.name === this.props.params.trait) {
        return el;
      }
    });
    console.log('INFO', info)
    this.setState({
      data: info[0]
    })
  }
  componentDidMount () {
    console.log('componentDidMount and props', this.props)
  }
  render () {
    return (
      <div className="background">
        <div className="trait-questions-wrapper">
          {/*<span>Testing TraitQuestions Component</span>*/}
          <TraitQuestionHeader name={this.state.data.name} description={this.state.data.description}></TraitQuestionHeader>
        </div>
      </div>
    )
  }
}

export default TraitQuestions;
