import React from 'react';

const Values = ({ values = {} }) => (
  <div className="values profile-card">
    <h1>
      Values
    </h1>
    <ul className="value-list">
      {Object.keys(values).map((name) => (
        <li className="factor">
          <h4>{name}</h4>
          <progress max={1} value={values[name]} />
          <span className="percent">{`${Math.trunc(values[name] * 100)}%`}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default Values;
