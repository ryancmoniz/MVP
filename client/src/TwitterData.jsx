import React from 'react';

const TwitterData = ({ profile = {} }) => (
  <div className="data">
    <div className="inner-data">
      <div className="data-content">
        <p>Tweets</p>
        <span>{profile.statuses_count}</span>
      </div>
      <div className="data-content">
        <p>Following</p>
        <span>{profile.friends_count}</span>
      </div>
      <div className="data-content">
        <p>Followers</p>
        <span>{profile.followers_count}</span>
      </div>
    </div>
  </div>
);

export default TwitterData;
