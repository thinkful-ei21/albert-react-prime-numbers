import React from 'react';

const getPrimeNumbers = require('./get-prime.js');

export default function ResultDisplay(props) {
  const upperLimit = 50000;

  if (!props.inputValue) {
    return <p>Choose a positive whole number between 1 and {upperLimit}!</p>
  }
  if (props.inputValue > upperLimit) {
    return <p>Keep your number below {upperLimit} so your computer does not blow up...</p>
  }
  if (props.inputValue % 1) {
    return <p>Error: Input must be a whole number!</p>
  }
  if (props.inputValue < 1) {
    return <p>Error: Input must be a greater than 1!</p>
  }
  if (props.inputValue < 2) {
    return <p>1...you can do better than that!</p>
  }
  if (props.inputValue % 1 && props.inputValue < 1) {
    return <p>Error: Input must be a positive whole number!</p>
  }

  const results = getPrimeNumbers(props.inputValue);

  return (
    <div>
      <p>{results.length} numbers found...</p>
      <p>{results.join(', ')}</p>
    </div>
  );
}
