import { configure } from 'enzyme';
import * as EnzymeAdapter from 'enzyme-adapter-react-16';

configure({ adapter: new EnzymeAdapter() });

// https://stackoverflow.com/a/43957674/8741502
const mockGeolocation = {
  getCurrentPosition: jest.fn(),
  watchPosition: jest.fn(),
};
// @ts-ignore
global.navigator.geolocation = mockGeolocation;
