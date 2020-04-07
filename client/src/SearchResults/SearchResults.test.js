import React from 'react';
import { shallow } from 'enzyme';
import SearchResults from './SearchResults';

describe('<SearchResults />', () => {
  let component;

  beforeEach(() => {
    const props = {
        selectedSummaries:[]
    }
    component = shallow(<SearchResults {...props}/>);
  });

  test('It should mount', () => {
    expect(component.length).toMatchSnapshot();
  });
});
