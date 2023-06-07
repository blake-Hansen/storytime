import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

export default function SaveStory({ setaccdisplay, story, accountData }) {
  const [storyName, setStoryName] = useState('');
  const [save, setSave] = useState(false);
  const data = { body: story, storyname: storyName, email: accountData.email };
  useEffect(() => {
    if (save) {
      axios.put('/save', {
        data,
      })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }
  }, [save]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSave(true);
  };

  return (
    <form className="saveStory" onSubmit={handleSubmit}>
      <label htmlFor="name">
        Name:
        <input id="name" type="text" value={storyName} onChange={(e) => setStoryName(e.target.value)} />
      </label>
      <input onClick={(e) => handleSubmit(e)} type="submit" value="Save" />
    </form>
  );
}

SaveStory.propTypes = {
  setacctdisplay: PropTypes.func.isRequired,
  story: PropTypes.string.isRequired,
  accountData: PropTypes.object.isRequired,
};
