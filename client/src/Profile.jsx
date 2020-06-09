/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import TwitterData from './TwitterData';
import UpperCard from './UpperCard';
import Personality from './Personality';
import Needs from './Needs';
import Values from './Values';


const Profile = ({ profile }) => {
  const [display, setDisplay] = useState('');
  let upper = <UpperCard profile={profile.profile} />;
  let lower = <TwitterData profile={profile.profile} />;
  const tweet = profile.profile ? profile.profile.latest_tweet : '';

  if (display === 'personality') {
    upper = <Personality personality={profile.personality} />;
    lower = '';
  }

  if (display === 'needs') {
    upper = <Needs needs={profile.needs} />;
    lower = '';
  }

  if (display === 'values') {
    upper = <Values values={profile.values} />;
    lower = '';
  }


  return (
    <div className="wrapper">
      <div className="container">
        {upper}
        {lower}
        <div className="quote">
          <h2>Latest Tweet</h2>
          {tweet}
        </div>
        <div className="info">
          <div className="box" onClick={() => setDisplay(display === 'personality' ? '' : 'personality')}>Personality</div>
          <div className="box" onClick={() => setDisplay(display === 'needs' ? '' : 'needs')}>Needs</div>
          <div className="box" onClick={() => setDisplay(display === 'values' ? '' : 'values')}>Values</div>
        </div>
      </div>
    </div>
  );
};


export default Profile;
