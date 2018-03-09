
import { shallow } from 'enzyme';
import React from 'react';
// import Provider from 'react-redux/lib/components/Provider';
import Config from './Config/api-config';
// import store from './Store';
// import { ConnectedApp } from './App';

describe('Main Page', () => {
  // const wrapper = shallow(<Provider store={store}><ConnectedApp /></Provider>);

  it(`Backend inplace: ${Config}`, () => {});

  // it('Should contain a main section "<ConnectedApp />"', () => {
  //   expect(wrapper.contains(<ConnectedApp />)).toEqual(true);
  // });
});
