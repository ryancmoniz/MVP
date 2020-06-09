import React from 'react';

const Personality = ({ personality = {} }) => {
  const tooltips = {
    agreeableness: 'A person\'s tendency to be compassionate and cooperative toward others.',
    conscientiousness: 'A person\'s tendency to act in an organized or thoughtful way',
    extraversion: 'A person\'s tendency to seek stimulation in the company of others.',
    emotionalRange: 'Also referred to as Neuroticism or Natural reactions, is the extent to which a person\'s emotions are sensitive to the person\'s environment.',
    openness: 'The extent to which a person is open to experiencing different activities.',
  };

  return (
    <div className="profile-card personality">
      <h1>
        Personality
      </h1>
      <div className="break" />
      <ul className="value-list">
        {Object.keys(personality).map((name) => (
          <li className="factor">
            <p className="tool">
              {name}
              <div className="tooltip">{tooltips[name]}</div>
            </p>
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
};

export default Personality;
