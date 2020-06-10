import {shallow, mount, render} from 'enzyme';
import React from 'react';
import UpperCard from '../../client/src/UpperCard';


describe('UpperCard component tests', () => {
  it('should render without throwing an error', function() {
    expect(shallow(<UpperCard />).contains(<div className="role"></div>)).toBe(true);
  });
});
