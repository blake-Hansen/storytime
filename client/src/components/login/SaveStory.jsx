import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function SaveStory({ setaccdisplay }) {
  const [story, setStory] = useState('');
  const [storyName, setStoryName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="saveStory" onSubmit={handleSubmit}>
      <label htmlFor="name">
        Name:
        <input id="name" type="text" value={story} onChange={(e) => setStoryName(e.target.value)} />
      </label>
      <input type="submit" value="Save" />
    </form>
  );
}

SaveStory.propTypes = {
  setacctdisplay: PropTypes.func.isRequired,
};
