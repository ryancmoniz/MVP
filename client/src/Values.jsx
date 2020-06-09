import React from 'react';

const Values = ({ values = {} }) => {

  const tooltips = {
    conservation: 'Conservation / Tradition: Emphasize self-restriction, order, and resistance to change.',
    change: 'Open to change / Excitement: Emphasize independent action, thought, and feeling, as well as a readiness for new experiences.',
    hedonism: 'Hedonism / Taking pleasure in life: Seek pleasure and sensuous gratification for themselves.',
    selfEnhancement: 'Self-enhancement / Achieving success: Seek personal success for themselves.',
    selfTranscendence: 'Self-transcendence / Helping others: Show concern for the welfare and interests of others.'
  }
  return (
    <div className="values profile-card">
      <h1>
        Values
      </h1>
      <ul className="value-list">
        {Object.keys(values).map((name) => (
          <li className="factor">
            <p className="tool">
              {name}
              <div className="tooltip">{tooltips[name]}</div>
            </p>
            <progress max={1} value={values[name]} />
            <span className="percent">{`${Math.trunc(values[name] * 100)}%`}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Values;
