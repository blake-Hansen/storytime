import React, { useState } from 'react';
import SignUp from './SignUp';
import Login from './Login';
import AccountDisplay from './AccountDisplay';
import AccountStories from './AccountStories';
import SaveStory from './SaveStory';

export default function LoginContainer({ story }) {
  const [toRender, setToRender] = useState(true);
  const [accountDisplay, setAccountDisplay] = useState(true);
  const [accountDataVals, setAccountDataVals] = useState({});

  const setAccountData = (data) => {
    console.log('This is account data: ', data);
    setAccountDataVals(data);
    setAccountDisplay(false);
  };
  return (
    <div>
      <div className="LoginContainer">
        <div>
          {accountDisplay ? (
            <div>
              <div>
                <input
                  onClick={() => setToRender(true)}
                  type="button"
                  value="Login"
                />
                <input
                  onClick={() => setToRender(false)}
                  type="button"
                  value="Sign up"
                />
              </div>
            </div>
          )
            : <AccountDisplay accountData={accountDataVals} />}
        </div>
        <div>
          {accountDisplay ? (
            <div>
              {toRender
                ? <Login setAccountData={setAccountData} setaccdisplay={setAccountDisplay} />
                : <SignUp setAccountData={setAccountData} setaccdisplay={setAccountDisplay} />}
            </div>
          )
            : <AccountStories accountData={accountDataVals} />}
        </div>
      </div>
      {!accountDisplay ? (
        <div>
          <div>To save the current story, enter a name for the story and save.</div>
          <SaveStory accountData={accountDataVals} story={story} />
        </div>
      ) : <div />}
    </div>
  );
}
