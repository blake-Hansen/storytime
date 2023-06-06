import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function Location({ setLocation }) {
  const options = ['North America', 'South America', 'Asia', 'Africa', 'Europe', 'Oceania', 'Antarctica'];
  const [selected, setSelected] = useState(options[0]);
  const locationHandler = (e) => {
    setLocation(e.target.value);
    setSelected(e.target.value);
  };
  return (
    <form>
      <select
        value={selected}
        onChange={(e) => locationHandler(e)}
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

Location.propTypes = {
  setLocation: PropTypes.func.isRequired,
};
