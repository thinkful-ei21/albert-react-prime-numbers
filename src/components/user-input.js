import React from 'react';

export default function UserInput(props) {
  return (
    <form onSubmit={event => event.preventDefault()}>
      <label htmlFor='user-input'>Enter a numbe: </label>
      <input
        id='user-input'
        type='number'
        onChange={event => props.getNumber(event.target.value)}
      />
    </form>
  );
}
