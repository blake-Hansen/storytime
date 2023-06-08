import React, { useState, useEffect } from 'react';
import StoryButton from './StoryButton';

export default function AccountStories({ accountData }) {
  const [name, setName] = useState('');
  const [list, setList] = useState(null);
  const [password, setPassword] = useState('');
  if (accountData !== null) {
    console.log('Conditional test', accountData.stories);
    // setList(accountData.stories);
  }
  console.log('This is acount data Line 8: ', accountData);
  return (
    <div>
      <p>This is a list of your currently saved Stories.</p>
      <div className="nme-btn-container">
        {list ? (
          <>
            {list.map((obj) => (
              <StoryButton accountData={obj} />
            ))}
          </>
        ) : <div />}
      </div>
    </div>
  );
}
