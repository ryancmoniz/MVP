import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Profile from './Profile';
import Search from './Search';
import sample from '../../samples/sampleFormattedData.json';


const App = () => {
  const [profileData, setProfileData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const getProfileData = (handle) => {
    setLoading(true);
    axios.post('/personality/handle/', { handle })
      .then((response) => {
        setLoading(false);
        setProfileData(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    setProfileData(sample);
  }, []);

  const display = !isLoading ? (
    <div>
      <Profile profile={profileData} />
    </div>
  )
    : (
      <div id="case">
        <div className="allCases" id="case1" />
        <div className="allCases" id="case2" />
        <div className="allCases" id="case3" />
        <div className="allCases" id="case4" />
        <div className="allCases" id="case5" />
        <div className="allCases" id="case6" />
        <div id="load">
          <h1>Generating Profile</h1>
        </div>
      </div>
    );

  return (
    <div>
      <Search search={getProfileData} />
      {display}
    </div>
  );
};

export default App;
