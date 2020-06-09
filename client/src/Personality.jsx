import React from 'react';

const Personality = ({ personality = {} }) => (
  <div className="profile-card personality">
    <h1>
      Personality
    </h1>
    <div className="break" />
    <ul className="value-list">
      {Object.keys(personality).map((name) => (
        <li className="factor">
          <h4>{name}</h4>
          <progress max={1} value={personality[name].score} />
          <span className="percent">{`${Math.trunc(personality[name].score * 100)}%`}</span>
          <ul className="detail-list">
            {Object.keys(personality[name].factors).map((detail) => (
              <li className="factor">
                <h5>{detail}</h5>
                <progress max={1} value={personality[name].factors[detail]} />
                <span className="percent">{`${Math.trunc(personality[name].factors[detail] * 100)}%`}</span>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  </div>
);

export default Personality;
