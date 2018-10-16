import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App Component', () => {
  test('should contains main container', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
