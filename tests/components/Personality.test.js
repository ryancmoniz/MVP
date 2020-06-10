import {shallow, mount, render} from 'enzyme';
import React from 'react';
import Personality from '../../client/src/Personality';


describe('Personality component tests', () => {
  it('should render without throwing an error', function() {
    expect(shallow(<Personality />).contains(<ul className="value-list"></ul>)).toBe(true);
  });
});
