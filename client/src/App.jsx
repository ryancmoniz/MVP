import React, { useState, useEffect } from 'react';
import Profile from './Profile';
import sample from '../../samples/sampleFormattedData.json';


const App = () => {
  const [profileData, setProfileData] = useState([]);

  const getProfileData = () => {
    setProfileData(sample);
  };


  useEffect(() => {
    getProfileData();
  }, []);

  return (
    <div>
      <Profile profile={profileData} />
    </div>
  );
};

export default App;
