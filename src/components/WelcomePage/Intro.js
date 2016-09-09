import React from 'react';
import { Link } from 'react-router';

class Intro extends React.Component {
  getStartedClick (e) {
    e.preventDefault();
    console.log(e.target);
  }
  render() {
    return (
      <div className='intro-wrapper'>
        <div className='get-started-container'>
          <Link to='/traits'><img src='../images/get_started_button.png' className='get-started-img' role="presentation" /></Link>
        </div>
        <div className='what-is'>
          <span>WHAT IS THE <strong>CHARACTER BUILDING TOOL?</strong></span>
        </div>
        <hr className='what-is-hr'></hr>
        <div className='intro-text-container'>
          <span className='intro-text'>The Character Building Tool, inspired by an Op-Ed article by New York Times columnist David Brooks is designed to help you periodically reflect on and develop your character. The CBT asks you questions pertaining to each of these 9 fundamental traits:</span>
        </div>
        <div className='intro-trait-list'>
          <ol>
            <li className='intro-trait'><strong>Love of Learning</strong></li>
            <li className='intro-trait'><strong>Humility</strong></li>
            <li className='intro-trait'><strong>Ideological Openness</strong></li>
            <li className='intro-trait'><strong>Tolerance</strong></li>
            <li className='intro-trait'><strong>Generosity</strong></li>
            <li className='intro-trait'><strong>Autonomy</strong></li>
            <li className='intro-trait'><strong>Honesty</strong></li>
            <li className='intro-trait'><strong>Resilience</strong></li>
            <li className='intro-trait'><strong>Discipline/Self Control</strong></li>
          </ol>
        </div>
        <div className='intro-text-container'>
          <span className='intro-text'>Then prompts you to record your answers at a time interval of your choosing (eg. on your birthday every year). The 9 traits and their associated questions might even provide a springboard for dinner conversation with your friends and family, or with others, and enable you to stay focused on important and potentially life-changing goals. Have fun!</span>
        </div>
      </div>
    );
  }
}

export default Intro;
