import { shallow, mount, render } from 'enzyme';
import React from 'react';
import { Share } from '../';

describe('Share Component', () => {
  it('should be selectable by class "share"', () => {
    expect(shallow(<Share show={false} />).is('.share')).toBe(true);
  });

  it('should mount in a full DOM', () => {
    expect(mount(<Share show />).find('.fab').length).toBeGreaterThan(3);
  });

  it('should render to static HTML', () => {
    expect(render(<Share show />).text()).toMatch('Share this Page');
  });
});
