import {shallow, mount, render} from 'enzyme';
import React from 'react';
import Needs from '../../client/src/Needs';


describe('Needs component tests', () => {
  it('should render without throwing an error', function() {
    expect(shallow(<Needs />).contains(<ul className="value-list"></ul>)).toBe(true);
  });
});
