
import { NotificationManager } from 'react-notifications';
import React from 'react';
import * as UserActions from '../Actions/UserConstants';

const VUX_PUBLIC_TOKEN = 'public_token';
const LOCALSTORAGE_USER_KEY = 'user';

const user = JSON.parse(localStorage.getItem(LOCALSTORAGE_USER_KEY));
const initialState = user ? { loggedIn: true, user } : {
  loggedIn: false,
  user: {
    userName: 'Peter Fox',
  },
  token: VUX_PUBLIC_TOKEN,
};

const authentication = (state = initialState, action) => {
  switch (action.type) {
    case UserActions.APP_STATE_USER_LOGIN: {
      const loginUser = {
        userName: action.userName,
        token: 'abc',
      };

      localStorage.setItem(LOCALSTORAGE_USER_KEY, JSON.stringify(loginUser));
      NotificationManager.success(`You are now logged in as ${action.userName}`);

      return {
        ...state,
        loggedIn: true,
        token: 'logged',
        in_progress: false,
        user: loginUser,
      };
    }

    case UserActions.APP_STATE_USER_LOGOUT:
      localStorage.removeItem(LOCALSTORAGE_USER_KEY);
      NotificationManager.success('You are now logged out.');

      return {
        ...state,
        loggedIn: false,
        token: VUX_PUBLIC_TOKEN,
        in_progress: false,
        user: null,
      };

    default:
      return state;
  }
};

const Fake = () => (
  <div />
);

export {
  authentication,
  Fake,
};
