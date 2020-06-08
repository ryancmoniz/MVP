import React from 'react';

const Needs = ({ needs = {} }) => (
  <div className="needs">
    <h1>
      Needs
    </h1>
    <ul className="value-list">
      {Object.keys(needs).map((name) => (
        <li className="factor">
          <h4>{name}</h4>
          <progress max={1} value={needs[name]} />
          <span className="percent">{`  ${Math.trunc(needs[name] * 100)}%`}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default Needs;
