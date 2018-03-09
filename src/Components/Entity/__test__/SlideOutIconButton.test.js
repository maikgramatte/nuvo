import { mount } from 'enzyme';
import React from 'react';
import SlideOutIconButton from '../SlideOutIconButton';

describe('SlideOutButton works well', () => {
  const elementProps = {
    title: 'Title',
    label: 'Element Label',
    iconClass: 'fa-square',
    onClick: jest.fn(),
  };

  const wrapper = mount(<SlideOutIconButton {...elementProps} />);

  // @todo add Testing for onClick handler
  // const instance = wrapper.instance();
  // const spy = jest.spyOn(instance, 'onClickHandler');
  // wrapper.update();

  it(`Should be selectable by class "${elementProps.iconClass}"`, () => {
    expect(wrapper.find(`.${elementProps.iconClass}`).exists()).toBe(true);
  });

  it(`Should contain a string "${elementProps.label}"`, () => {
    expect(wrapper.contains(elementProps.label)).toBe(true);
  });

  // wrapper.simulate('click');
  // it('Expect that onClick handler to be called', () => {
  //  expect(spy).toHaveBeenCalled().toBe(true);
  // });
});
