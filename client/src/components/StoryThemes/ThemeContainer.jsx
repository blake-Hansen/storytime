import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AgeRange from './AgeRange';
import Location from './Location';
import Length from './Length';
import CharName from './Character';

export default function ThemeContainer({
  setAge,
  setLocation,
  setLength,
  setName,
  setSendReq,
}) {
  console.log('This happened 10000');
  // const [selected, setSelected] = useState(options[0]);
  return (
    <div className="ThemeContainer">
      <h3>Name of Main Character</h3>
      <CharName setName={setName} />
      <div className="ThemeDropdowns">
        <div>
          <p>Age Range:</p>
          <AgeRange setAge={setAge} />
        </div>
        <div>
          <p>Location of Story:</p>
          <Location setLocation={setLocation} />
        </div>
        <div>
          <p>Length of Story:</p>
          <Length setLength={setLength} />
        </div>
      </div>
      <input type="button" value="Submit" onClick={() => setSendReq((prev) => !prev)} />
    </div>
  );
}

ThemeContainer.propTypes = {
  setAge: PropTypes.func.isRequired,
  setName: PropTypes.func.isRequired,
  setLocation: PropTypes.func.isRequired,
  setLength: PropTypes.func.isRequired,
  setSendReq: PropTypes.func.isRequired,
};
