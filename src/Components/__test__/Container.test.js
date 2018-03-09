import { shallow } from 'enzyme';
import React from 'react';
import Container from '../Container';

describe('Container Component', () => {
  const TestString = 'Children';
  const wrapper = shallow(<Container title="Title"><div>{TestString}</div></Container>);

  it('Should be selectable by class ".container-fluid"', () => {
    expect(wrapper.is('.container-fluid')).toBe(true);
  });

  it('Should show Children elements"', () => {
    expect(wrapper.contains(TestString)).toBe(true);
  });
});
