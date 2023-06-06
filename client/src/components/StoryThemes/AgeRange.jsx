import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function AgeRange({ setAge }) {
  const options = ['Under 4', '4 - 7', '7 - 9', '9 - 12'];
  const [selected, setSelected] = useState(options[0]);

  const ageHandler = (e) => {
    setAge(e.target.value);
    setSelected(e.target.value);
  };
  return (
    <form>
      <select
        value={selected}
        onChange={(e) => ageHandler(e)}
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

AgeRange.propTypes = {
  setAge: PropTypes.func.isRequired,
};
