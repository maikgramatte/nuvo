
import React from 'react';
import Clone from 'clone';
import * as Actions from '../Actions/ActionConstants';

const initialState = {
  headerClassName: [],
  currentPage: '',
};

const AppStateManager = (state = initialState, action) => {
  switch (action.type) {
    case Actions.APP_STATE_HEADER_CLASS_ADD: {
      const index = state.headerClassName.indexOf(action.className);
      if (index !== -1) {
        return state;
      }

      const classNames = Clone(state.headerClassName);
      classNames.push(action.className);

      return {
        ...state,
        headerClassName: classNames,
      };
    }

    case Actions.APP_STATE_HEADER_CLASS_REMOVE: {
      const index = state.headerClassName.indexOf(action.className);

      if (index === -1) {
        return state;
      }

      const classNames = state.headerClassName.splice(index, 0);
      return {
        ...state,
        headerClassName: classNames,
      };
    }

    case Actions.APP_STATE_PAGEVIEW: {
      return {
        ...state,
        currentPage: action.payload,
      };
    }

    default:
      return state;
  }
};

const Fake = () => (
  <div />
);

export {
  AppStateManager,
  Fake,
};
