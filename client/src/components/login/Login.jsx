import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

export default function Login({ setaccdisplay, setAccountData, submit, setSubmit }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [starpassword, setStarPassword] = useState('');
  const [loginError, setLoginError] = useState(false);
  // const [submit, setSubmit] = useState(false);
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
        .then((res) => {
          if (res.data.account) {
            console.log('invalid password');
            // setSubmit((prev) => !prev);
            setLoginError((prev) => !prev);
          } else {
            setAccountData(res.data);
          }
        })
        .catch((err) => setLoginError(true));
    }
  }, [submit]);
  const submitHandler = (e) => {
    e.preventDefault();
    setSubmit(true);
  };
  const emailHandler = (e) => {
    e.preventDefault();
    setLoginError(false);
    setEmail(e.target.value)
    // setSubmit(true);
  };
  const passwordHandler = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
    setLoginError(false);
    // setStarPassword(() => {
    //   let count = password.split('');
    //   let temp = '';
    //   count.forEach((t) => {
    //     temp += '*';
    //   });
    //   return temp;
    // });
    // setSubmit(true);
  };
  return (
    <form className="signIn" onSubmit={handleSubmit}>
      <label htmlFor="email">
        Email:
        <input id="email" type="text" value={email} onChange={(e) => emailHandler(e)} />
      </label>
      <label htmlFor="password">
        Password:
        <input id="password" type="text" value={password} onChange={(e) => passwordHandler(e)} />
      </label>
      <input onClick={(e) => submitHandler(e)} type="submit" value="Submit" />
      {loginError ? <div className="alert-text">Your password or Email was invalid.</div> : <div />}
    </form>
  );
}

Login.propTypes = {
  setacctdisplay: PropTypes.func.isRequired,
  setAccountData: PropTypes.func.isRequired,
  submit: PropTypes.bool.isRequired,
  setSubmit: PropTypes.func.isRequired,
};
