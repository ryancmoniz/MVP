import {shallow, mount, render} from 'enzyme';
import React from 'react';
import Search from '../../client/src/Search';


describe('Search component tests', () => {
  it('should render without throwing an error', function() {
    expect(shallow(<Search />).contains(<h1>Search a Twitter handle to generate a personality profile</h1>)).toBe(true);
  });
});
