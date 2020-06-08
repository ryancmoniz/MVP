import React from 'react';
import Personality from './Personality';
import Needs from './Needs';
import Values from './Values';


const Profile = ({ profile }) => (
  <div className="profile">
    <Personality personality={profile.personality} />
    <Needs needs={profile.needs} />
    <Values values={profile.values} />
  </div>
);

export default Profile;
