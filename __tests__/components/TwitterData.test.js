import {shallow, mount, render} from 'enzyme';
import React from 'react';
import TwitterData from '../../client/src/TwitterData';


describe('TwitterData component tests', () => {
  it('should render without throwing an error', function() {
    expect(shallow(<TwitterData />).contains(<p>Tweets</p>)).toBe(true);
  });
});
