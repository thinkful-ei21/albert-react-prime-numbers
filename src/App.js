import React from 'react';

import './App.css';
import UserInput from './components/user-input.js'
import ResultDisplay from './components/result-display.js'

export default class App extends React.Component {  // 'extends' subclasses the React.Component
  constructor(props) {
    super(props);  // props are IMMUTABLE...so modify this.state instead
    this.state = {
      inputValue: 0
    };
  }

  setNumber(userValue) {
    this.setState({ // setState changes this.state, and will force a re-render
      inputValue: userValue
    })
  }

  render() {
    return (
      <div>
        <h1>GENERATE PRIME NUMBERS</h1>
        <UserInput
          captureNumber={userValue => this.setNumber(userValue)}
        />
        <ResultDisplay
          inputValue={this.state.inputValue}
        />
      </div>
    );
  }
}
