import React, { useState } from 'react';

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="signIn" onSubmit={handleSubmit}>
      <label htmlFor="name">
        Name:
        <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label htmlFor="email">
        Email:
        <input id="email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label htmlFor="password">
        Password:
        <input id="password" type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}
