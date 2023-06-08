import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

export default function Login({ setaccdisplay, setAccountData }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submit, setSubmit] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    if (submit) {
      console.log('THIS GET HAPPEINING');
      const data = {
        email,
        password,
      };
      axios.post('/account', {
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

Login.propTypes = {
  setacctdisplay: PropTypes.func.isRequired,
  setAccountData: PropTypes.func.isRequired,
};
