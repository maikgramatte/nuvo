/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import AccountNavigation from './AccountNavigation';
import { AuthRequiered } from '../../Utils/user';

class UserSettingsPage extends React.Component {
  render() {
    return (
      <AccountNavigation title="Account Settings">
        User - Edit page Content
      </AccountNavigation>
    );
  }
}

export default AuthRequiered(UserSettingsPage);
