import React from 'react';
import { shallow } from 'enzyme';
import { NavLink } from 'react-router-dom';
import ChannelTeaser from '../ChannelTeaser';

const testProps = {
  slug: 'test',
  cover: '',
  title: 'Test',
  items: 20,
};

describe('Channel-Teaser', () => {
  const wrapper = shallow(<ChannelTeaser {...testProps} />);

  it('Should be a NavLink ', () => {
    expect(wrapper.is(NavLink)).toBe(true);
  });

  it('Should link to slugged page ', () => {
    expect(wrapper.prop('to')).toBe(`/channel/${testProps.slug}`);
  });
});
