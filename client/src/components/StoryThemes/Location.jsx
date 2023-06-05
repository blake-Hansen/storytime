import React, { useState } from 'react';

export default function Location() {
  const options = ['North America', 'South America', 'Asia', 'Africa', 'Europe', 'Oceania', 'Antarctica'];
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
