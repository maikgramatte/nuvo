//
// React Reducer Actions
// Please add new Actions in this file.
//

import * as AppActions from './ActionConstants';
import * as UserActions from './UserConstants';

function loginUser(userName) {
  return {
    type: UserActions.APP_STATE_USER_LOGIN,
    userName,
  };
}

function logoutUser() {
  return {
    type: UserActions.APP_STATE_USER_LOGOUT,
  };
}

function addHeaderClassName(className) {
  return {
    type: AppActions.APP_STATE_HEADER_CLASS_ADD,
    className,
  };
}

function removeHeaderClassName(className) {
  return {
    type: AppActions.APP_STATE_HEADER_CLASS_REMOVE,
    className,
  };
}

function pageView(payload) {
  return {
    type: AppActions.APP_STATE_PAGEVIEW,
    payload,
  };
}


export {
  loginUser,
  logoutUser,
  addHeaderClassName,
  removeHeaderClassName,
  pageView,
};
