import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

export default function Signup({ setacctdisplay, setAccountData }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submit, setSubmit] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    if (submit) {
      const data = {
        name,
        email,
        password,
      };
      axios.put('/account', {
        data,
      })
        .then((res) => setAccountData(res.data))
        .catch((err) => console.log(err));
    }
  }, [submit]);
  const submitHandler = (e) => {
    e.preventDefault();
    setSubmit(true);
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
      <input onClick={(e) => submitHandler(e)} type="submit" value="Submit" />
    </form>
  );
}

Signup.propTypes = {
  setacctdisplay: PropTypes.func.isRequired,
  setAccountData: PropTypes.func.isRequired,
};
