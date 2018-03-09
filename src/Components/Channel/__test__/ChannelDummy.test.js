import React from 'react';
import { shallow } from 'enzyme';
import ChannelDummy from '../ChannelDummy';

describe('Channel-Dummy', () => {
  const wrapperLoading = shallow(<ChannelDummy />);

  it('Should be a class of .dummy', () => {
    expect(wrapperLoading.hasClass('dummy')).toBe(true);
  });

  it('Should have an Image', () => {
    expect(wrapperLoading.find('img').exists()).toBe(true);
  });
});
