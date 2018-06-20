import React from 'react';

export default function UserInput(props) {
  return (
    <form onSubmit={event => event.preventDefault()}>
      <label htmlFor='user-input'>Enter a number: </label>
      <input
        id='user-input'
        type='number'
        onChange={event => props.captureNumber(event.target.value)}
      />
    </form>
  );
}
