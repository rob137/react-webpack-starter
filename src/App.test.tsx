import * as React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  it('Renders with correct class name', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('div').first().hasClass('App')).toBeTruthy();
  });
});
