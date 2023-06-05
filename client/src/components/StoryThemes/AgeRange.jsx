import React, { useState } from 'react';

export default function AgeRange() {
  const options = ['Under 4', '4 - 7', '7 - 9', '9 - 12'];
  const [selected, setSelected] = useState(options[0]);
  return (
    <form>
      <select
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
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