import {shallow, mount, render} from 'enzyme';
import React from 'react';
import Values from '../../client/src/Values';


describe('Values component tests', () => {
  it('should render without throwing an error', function() {
    expect(shallow(<Values />).contains(<ul className="value-list"></ul>)).toBe(true);
  });
});
