import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ThemeContainer from './components/StoryThemes/ThemeContainer';
import LoginContainer from './components/login/Container';

export default function App() {
  const [location, setLocation] = useState('');
  const [age, setAge] = useState('');
  const [length, setLength] = useState('');
  const [name, setName] = useState('');
  const [sendReq, setSendReq] = useState(false);

  useEffect(() => {
    if (sendReq === true) {
      const data = {
        age,
        location,
        length,
      };
      axios.get('/story', {
        body: data,
      })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }
  }, [sendReq]);
  return (
    <div id="App">
      <h2>Welcome to Story Time</h2>
      <h4>
        Please feel free to login in below if you
        would like to save stories you like to an
        account for future use
      </h4>
      <LoginContainer />
      <ThemeContainer
        setAge={setAge}
        setLocation={setLocation}
        setName={setName}
        setLength={setLength}
        setSendReq={setSendReq}
      />
    </div>
  );
}
