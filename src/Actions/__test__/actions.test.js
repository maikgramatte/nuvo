import * as actions from '../index';
import * as types from '../ActionConstants';

describe('Actions', () => {
  it('addHeaderClassName should pass classname', () => {
    const className = 'test-class';
    const expectedAction = {
      type: types.APP_STATE_HEADER_CLASS_ADD,
      className,
    };

    expect(actions.addHeaderClassName(className)).toEqual(expectedAction);
  });

  it('removeHeaderClassName should pass classname', () => {
    const className = 'test-class';
    const expectedAction = {
      type: types.APP_STATE_HEADER_CLASS_REMOVE,
      className,
    };

    expect(actions.removeHeaderClassName(className)).toEqual(expectedAction);
  });
});
