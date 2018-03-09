/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { logoutUser } from '../../Actions';
import AccountNavigation from './AccountNavigation';
import { AuthRequiered } from '../../Utils/user';

class UserPage extends Component {
  constructor(props) {
    super(props);

    this.redirectTo = '/';
  }

  logout() {
    this.props.logout();
  }

  render() {
    if (!this.props.auth.user) {
      return null;
    }

    return (
      <AccountNavigation title="Your Profile">
        <p><strong>Your current username:</strong> {this.props.auth.user.userName}</p>
        <p>Your current token is: {this.props.auth.token}</p>
        <p>
          <button
            className="btn btn-sm btn-outline-primary"
            onClick={() => this.logout()}
          >Logout
          </button>
        </p>
      </AccountNavigation>
    );
  }
}

UserPage.propTypes = {
  logout: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    logout: () => {
      dispatch({ type: 'progress' });
      dispatch(logoutUser());
    },
  };
}

export default connect(
  null,
  mapDispatchToProps,
)(AuthRequiered(UserPage));
