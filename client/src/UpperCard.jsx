import React from 'react';

const UpperCard = ({ profile = {} }) => (
  <div className="profile-card">
    <div className="img-container">
      <img src={profile.profile_image_url} alt="" />
    </div>
    <div className="handle">{`@${profile.screen_name}`}</div>
    <div className="role">{profile.description}</div>
  </div>
);

export default UpperCard;
