import React from 'react';
import Trait from './Trait';


class TraitList extends React.Component {

  state = {
    data: [
      {
        id: 1, title: 'Love of Learning', text: 'Some text here about LEARNING. quick brown fox jumps over lazy dog. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', img: 'imgUrl'
      },
      {
        id: 2, title: 'Humility', text: 'Some text here about HUMILITY. quick brown fox jumps over lazy dog Lorem ipsum dolor sit amet, consectetur adipisicing elit,.', img: 'imgUrl'
      },
      {
        id: 3, title: 'Idealogical Openness', text: 'Some text here about OPENNESS. quick brown fox jumps over lazy dog Lorem ipsum dolor sit amet, consectetur adipisicing elit,.', img: 'imgUrl'
      },
      {
        id: 4, title: 'Tolerance', text: 'Some text here about love of TOLERANCE. quick brown fox jumps over lazy dog Lorem ipsum dolor sit amet, consectetur adipisicing elit,.', img: 'imgUrl'
      },
      {
        id: 5, title: 'Generosity', text: 'Some text here about love of GENEROSITY. quick brown fox jumps over lazy dog Lorem ipsum dolor sit amet, consectetur adipisicing elit, but wait there is more!.', img: 'imgUrl'
      },
      {
        id: 6, title: 'Autonomy', text: 'Some text here about love of AUTONOMY. quick brown fox jumps over lazy dog Lorem ipsum dolor sit amet, consectetur adipisicing elit,.', img: 'imgUrl'
      },
      {
        id: 7, title: 'Honesty', text: 'Some text here about HONESTY. quick brown fox jumps over lazy dog Lorem ipsum dolor sit amet, consectetur adipisicing elit, wait hold up need more text to be shown here!!!!.', img: 'imgUrl'
      },
      {
        id: 8, title: 'Resilience', text: 'Some text here about RESILIENCE. quick brown fox jumps over lazy dog Lorem ipsum dolor sit amet, consectetur adipisicing elit,.', img: 'imgUrl'
      },
      {
        id: 9, title: 'Discipline', text: 'Some text here about DISCIPLINE. quick brown fox jumps over lazy dog Lorem ipsum dolor sit amet, consectetur adipisicing elit,.', img: 'imgUrl'
      }
    ]
  }

  renderTraits() {

  }


  render() {
    var traits = this.state.data.map(trait => {
      return (
        <Trait key={trait.id} title={trait.title} text={trait.text}></Trait>
      )
    });

    return (
      // <h1>The TraitList will go here.</h1>
      <div className="trait-list-container">
        {traits}
      </div>
    )
  }

}

export default TraitList
