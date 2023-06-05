import React, { useState } from 'react';
import AgeRange from './AgeRange';
import Location from './Location';
import Length from './Length';

export default function ThemeContainer() {
  // const [selected, setSelected] = useState(options[0]);
  return (
    <div className="ThemeContainer">
      <div>
        <p>Age Range:</p>
        <AgeRange />
      </div>
      <div>
        <p>Location of Story:</p>
        <Location />
      </div>
      <div>
        <p>Length of Story:</p>
        <Length />
      </div>
    </div>
  );
}
