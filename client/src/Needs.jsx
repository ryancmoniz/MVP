import React from 'react';

const Needs = ({ needs = {} }) => {
  const tooltips = {
    excitement: 'Want to get out there and live life, have upbeat emotions, and want to have fun.',
    harmony: 'Appreciate other people, their viewpoints, and their feelings.',
    curiosity: 'Have a desire to discover, find out, and grow.',
    ideal: 'Desire perfection and a sense of community.',
    closeness: 'Relish being connected to family and setting up a home.',
    selfExpression: 'Enjoy discovering and asserting their own identities.',
    liberty: 'Have a desire for fashion and new things, as well as the need for escape.',
    love: 'Enjoy social contact, whether one-to-one or one-to-many. Any brand that is involved in bringing people together taps this need.',
    practicality: 'Have a desire to get the job done, a desire for skill and efficiency, which can include physical expression and experience.',
    stability: 'Seek equivalence in the physical world. They favor the sensible, the tried and tested.',
    challenge: 'Have an urge to achieve, to succeed, and to take on challenges.',
    structure: 'Exhibit groundedness and a desire to hold things together. They need things to be well organized and under control.',
  };

  return (
    <div className="profile-card needs">
      <h1>
        Needs
      </h1>
      <div className="break" />
      <ul className="value-list">
        {Object.keys(needs).map((name) => (
          <li className="factor">
            <p className="tool">
              {name}
              <div className="tooltip">{tooltips[name]}</div>
            </p>
            <progress max={1} value={needs[name]} />
            <span className="percent">{`  ${Math.trunc(needs[name] * 100)}%`}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Needs;
