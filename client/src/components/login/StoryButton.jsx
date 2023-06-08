import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function StoryButton({ accountData, setacctdisplay, setAccountData, setStory }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submit, setSubmit] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const clickHandler = (e) => {
    e.preventDefault();
    console.log('Clicked in button');
    setStory(accountData.body);
  };
  return (
    <button className="stry-nme-btn" onClick={(e) => clickHandler(e)} type="button">
        {accountData.name}
    </button>
  );
}

StoryButton.propTypes = {
  setacctdisplay: PropTypes.func.isRequired,
  setAccountData: PropTypes.func.isRequired,
  accountData: PropTypes.object,
};
