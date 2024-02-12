import { useState } from 'react';

export default function Form() {
  // let firstName = '';
  // let lastName = '';

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');


  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
    // firstName = e.target.value;
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
    // lastName = e.target.value;
  }

  function handleReset() {
    // firstName = '';
    // lastName = '';
    setFirstName('');
    setLastName('');
  }

  return (
    <form onSubmit={e => e.preventDefault()}>
      <input
        placeholder="First name"
        value={firstName}
        onChange={handleFirstNameChange}
      />
      <input
        placeholder="Last name"
        value={lastName}
        onChange={handleLastNameChange}
      />
      <h1>Hi, {firstName} {lastName}</h1>
      <button onClick={handleReset}>Reset</button>
    </form>
  );
}
