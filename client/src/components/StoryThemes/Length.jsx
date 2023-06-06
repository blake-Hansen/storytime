import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function Length({ setLength }) {
  const options = ['5 Minutes', '10 Minutes', '15 Minutes'];
  const [selected, setSelected] = useState(options[0]);
  const lengthHandler = (e) => {
    setLength(e.target.value);
    setSelected(e.target.value);
  };
  return (
    <form>
      <select
        value={selected}
        onChange={(e) => lengthHandler(e)}
      >
        {options.map((value) => (
          <option value={value} key={value}>
            {value}
          </option>
        ))}
      </select>
    </form>
  );
}

Length.propTypes = {
  setLength: PropTypes.func.isRequired,
};
