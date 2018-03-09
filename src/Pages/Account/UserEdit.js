/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import AccountNavigation from './AccountNavigation';
import { AuthRequiered } from '../../Utils/user';

class UserEditPage extends React.Component {
  render() {
    return (
      <AccountNavigation title="Edit your Profile">
        User - Edit page Content
      </AccountNavigation>
    );
  }
}

export default AuthRequiered(UserEditPage);
