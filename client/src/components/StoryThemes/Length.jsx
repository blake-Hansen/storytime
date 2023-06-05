import React, { useState } from 'react';

export default function Length() {
  const options = ['5 Minutes', '10 Minutes', '15 Minutes'];
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
