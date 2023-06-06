import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function CharName({ setName }) {
  const [selected, setSelected] = useState('');
  const nameHandler = (e) => {
    setName(e.target.value);
    setSelected(e.target.value);
  };
  return (
    <input onChange={(e) => nameHandler(e)} type="text" value={selected} />
  );
}

CharName.propTypes = {
  setName: PropTypes.func.isRequired,
};
