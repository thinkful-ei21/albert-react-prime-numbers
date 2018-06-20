import React from 'react';

import './App.css';
import UserInput from './components/user-input.js'
import ResultDisplay from './components/result-display.js'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: 0
    };
  }

  getNumber(userValue) {
    this.setState({
      inputValue: userValue
    })
  }

  render() {
    return (
      <div>
        <h1>GET All PRIME NUMBERS</h1>
        <UserInput
          getNumber={userValue => this.getNumber(userValue)}
        />
        <ResultDisplay
          inputValue={this.state.inputValue}
        />
      </div>
    );
  }
}
