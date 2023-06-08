import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ClipLoader from 'react-spinners/ClipLoader';
import ThemeContainer from './components/StoryThemes/ThemeContainer';
import LoginContainer from './components/login/Container';
import StoryDisplay from './components/StoryDisplay';

export default function App() {
  const [location, setLocation] = useState('north america');
  const [age, setAge] = useState('4');
  const [length, setLength] = useState('5 minutes');
  const [name, setName] = useState('');
  const [sendReq, setSendReq] = useState(false);
  const [loadingInProgress, setLoading] = useState(false);
  const [story, setStory] = useState('');

  useEffect(() => {
    // console.log('This is send req:', sendReq);
    if (sendReq) {
      // console.log('This is happening Line 15');
      setLoading(true);
      const data = {
        age,
        location,
        length,
        name,
      };
      // console.log('This is happening Line 23', data);
      axios.get(`/story?age=${age}&location=${location}&length=${length}&name=${name}`, {
        data,
      })
        .then((res) => setStory(res.data))
        .then(() => setLoading(false))
        .then(() => setSendReq((prev) => !prev))
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
      <LoginContainer setStory={setStory} story={story} />
      {loadingInProgress ? (
        <div className="loader-container">
          <ClipLoader className="spinloader" color="#720404" size={150} />
        </div>
      ) : (
        <ThemeContainer
          setAge={setAge}
          setLocation={setLocation}
          setName={setName}
          setLength={setLength}
          setSendReq={setSendReq}
        />
      )}
      <StoryDisplay story={story} />
    </div>
  );
}
