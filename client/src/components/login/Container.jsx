import React, { useState } from 'react';
import SignUp from './SignUp';
import Login from './Login';

export default function LoginContainer() {
  const [toRender, setToRender] = useState(true);
  return (
    <div className="LoginContainer">
      <div>
        <input onClick={() => setToRender(true)} type="button" value="Login" />
        <input onClick={() => setToRender(false)} type="button" value="Sign up" />
      </div>
      <div>
        {toRender ? <Login /> : <SignUp /> }
      </div>
    </div>
  );
}
