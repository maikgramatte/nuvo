import { shallow } from 'enzyme';
import React from 'react';
import Title from '../Title';

describe('Title Component', () => {
  const Element = shallow(<Title id={1} title="Title" img="Image-URL" className="content-item" />);

  it('Should be selectable by class ".content-item"', () => {
    expect(Element.is('.content-item')).toBe(true);
  });

  it('Should contain an Image"', () => {
    expect(Element.find('img').length).toEqual(1);
  });
});
